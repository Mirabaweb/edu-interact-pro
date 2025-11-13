import { Brain, Wrench, GraduationCap, Headphones } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Doradztwo dopasowane do potrzeb",
      description: "Pomożemy wybrać najlepsze rozwiązanie dla Twojej organizacji, uwzględniając budżet i specyfikę.",
    },
    {
      icon: Wrench,
      title: "Profesjonalny montaż i konfiguracja",
      description: "Nasz zespół zainstaluje i skonfiguruje monitor, dbając o każdy detal i bezpieczeństwo.",
    },
    {
      icon: GraduationCap,
      title: "Szkolenie kadry",
      description: "Przeszkolimy Twoich pracowników, aby w pełni wykorzystali potencjał technologii interaktywnej.",
    },
    {
      icon: Headphones,
      title: "Serwis i wsparcie po instalacji",
      description: "Zapewniamy kompleksowe wsparcie techniczne i pomoc w każdej sytuacji.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dlaczego my?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kompleksowa obsługa od konsultacji po wdrożenie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="space-y-4 animate-fade-in flex flex-col items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center px-4 min-h-[3.5rem] flex items-center justify-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
