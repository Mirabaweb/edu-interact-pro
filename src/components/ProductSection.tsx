import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Monitor interaktywny 65 cali",
      subtitle: "Najlepszy wybór",
      price: "6 900 zł",
      oldPrice: "8 500 zł",
      description: "Kompleksowe rozwiązanie dla szkół – monitor, montaż, szkolenie i wsparcie techniczne.",
      features: [
        "Monitor interaktywny 65 cali",
        "Profesjonalny montaż",
        "Szkolenie kadry pedagogicznej",
        "Wsparcie techniczne przez 12 miesięcy",
        "Instrukcja obsługi po polsku",
      ],
      recommended: true,
    },
    {
      id: 2,
      name: "Monitor interaktywny 85 cali",
      subtitle: "Wersja premium",
      price: "14 500 zł",
      description: "Dla większych klas i sal konferencyjnych – profesjonalny zestaw z rozszerzonym wsparciem.",
      features: [
        "Monitor interaktywny 85 cali",
        "Profesjonalny montaż",
        "Rozszerzone szkolenie kadry",
        "Wsparcie techniczne przez 24 miesiące",
        "Dedykowany opiekun techniczny",
        "Dostęp do zaawansowanych funkcji",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="oferta" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nasza oferta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wybierz rozwiązanie dopasowane do potrzeb Twojej szkoły
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                product.recommended ? 'border-2 border-primary shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.recommended && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1"
                >
                  {product.subtitle}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                {!product.recommended && (
                  <CardDescription className="text-base font-medium text-secondary">
                    {product.subtitle}
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl font-bold text-foreground">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">brutto</p>
                </div>

                <p className="text-center text-muted-foreground">
                  {product.description}
                </p>

                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  size="lg"
                  variant={product.recommended ? "hero" : "default"}
                >
                  Kup teraz
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
