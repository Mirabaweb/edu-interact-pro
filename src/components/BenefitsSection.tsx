import { Check, Users, Monitor, Clock, Palette, GraduationCap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import benefitsImage from "@/assets/benefits-image.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      text: "Zwiększone zaangażowanie uczniów podczas zajęć",
    },
    {
      icon: Monitor,
      text: "Łatwa integracja z istniejącymi systemami IT",
    },
    {
      icon: Clock,
      text: "Oszczędność czasu na przygotowanie materiałów",
    },
    {
      icon: Palette,
      text: "Wsparcie dla różnych stylów uczenia się",
    },
    {
      icon: GraduationCap,
      text: "Profesjonalne szkolenia dla nauczycieli",
    },
    {
      icon: Shield,
      text: "Długoterminowa gwarancja i serwis",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Bezpłatna konsultacja",
    },
    {
      number: "2",
      title: "Prezentacja w szkole",
    },
    {
      number: "3",
      title: "Instalacja i szkolenie",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dlaczego szkoły wybierają nasze monitory interaktywne?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferujemy kompleksowe wsparcie i narzędzia, które sprawiają, że inwestycja w technologię przynosi realne korzyści edukacyjne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground font-medium pt-2">{benefit.text}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Gotowi na zmianę?
          </h3>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Skontaktuj się z naszym zespołem, aby otrzymać bezpłatną konsultację i poznać pełną ofertę dla Twojej szkoły.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection("kontakt")}
              size="lg"
              variant="hero"
              className="shadow-xl"
            >
              Umów bezpłatną konsultację
            </Button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={benefitsImage}
            alt="Dzieci uczące się z monitorem interaktywnym"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
            <p className="text-white text-xl md:text-2xl font-semibold">
              Interaktywna nauka dla każdego ucznia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
