import { useEffect } from "react";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Oferta = () => {
  useEffect(() => {
    document.title = "Oferta - Monitory Interaktywne | Interaktywne Pracownie";
    window.scrollTo(0, 0);
  }, []);

  const monitors = [
    {
      id: 1,
      name: "Monitor interaktywny 65 cali",
      specs: [
        "Rozdzielczość: 4K Ultra HD (3840×2160)",
        "Technologia dotyku: 20-punktowy touch infrared",
        "System: Android 11 wbudowany",
        "Gwarancja: 3 lata",
        "Czas reakcji: < 10ms",
        "Jasność: 400 cd/m²",
      ],
    },
    {
      id: 2,
      name: "Monitor interaktywny 75 cali",
      specs: [
        "Rozdzielczość: 4K Ultra HD (3840×2160)",
        "Technologia dotyku: 20-punktowy touch infrared",
        "System: Android 11 wbudowany",
        "Gwarancja: 3 lata",
        "Czas reakcji: < 8ms",
        "Jasność: 450 cd/m²",
      ],
    },
    {
      id: 3,
      name: "Monitor interaktywny 86 cali",
      specs: [
        "Rozdzielczość: 4K Ultra HD (3840×2160)",
        "Technologia dotyku: 40-punktowy touch infrared",
        "System: Android 13 wbudowany",
        "Gwarancja: 5 lat",
        "Czas reakcji: < 6ms",
        "Jasność: 500 cd/m²",
      ],
    },
  ];

  const accessories = [
    {
      name: "Mobilny stojak elektryczny",
      description: "Regulowana wysokość, łatwe przemieszczanie między salami",
    },
    {
      name: "Laptop Dell dla nauczyciela",
      description: "Profesjonalny sprzęt z pełną konfiguracją i oprogramowaniem",
    },
    {
      name: "Oprogramowanie edukacyjne",
      description: "Licencje na popularne aplikacje do nauki interaktywnej",
    },
    {
      name: "Kamera konferencyjna 4K",
      description: "Idealna do lekcji online i spotkań z rodzicami",
    },
  ];

  const scrollToContact = () => {
    window.location.href = "/#kontakt";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do strony głównej
            </a>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nasza pełna oferta
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kompleksowe rozwiązania dla nowoczesnej edukacji – monitory interaktywne i akcesoria
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Monitory interaktywne
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {monitors.map((monitor) => (
                <Card key={monitor.id} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{monitor.name}</CardTitle>
                    <CardDescription>Parametry techniczne</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {monitor.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full mt-6" 
                      size="lg"
                      onClick={scrollToContact}
                    >
                      Umów bezpłatną konsultację
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Komplementarne akcesoria
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Oferujemy kompletne zestawy – wszystko czego potrzebujesz w jednym miejscu
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {accessories.map((accessory, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{accessory.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{accessory.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-12"
              >
                Umów się na bezpłatną konsultację
              </Button>
              <p className="text-muted-foreground mt-4">
                Skontaktuj się z nami, aby poznać szczegółową ofertę i ceny dostosowane do Twojej szkoły
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Oferta;
