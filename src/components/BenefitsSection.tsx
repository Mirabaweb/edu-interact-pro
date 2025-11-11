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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Benefits list */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dlaczego szkoły wybierają nasze monitory interaktywne?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Oferujemy kompleksowe wsparcie i narzędzia, które sprawiają, że inwestycja w technologię przynosi realne korzyści edukacyjne.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <li
                    key={index}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#FF7A00' }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-foreground font-medium text-lg pt-2">{benefit.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right side - Call to action */}
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 lg:sticky lg:top-24">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Gotowi na zmianę?
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              Skontaktuj się z naszym zespołem, aby otrzymać bezpłatną konsultację i poznać pełną ofertę dla Twojej szkoły.
            </p>

            <div className="space-y-6 mb-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: '#FF7A00' }}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                </div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection("kontakt")}
              size="lg"
              className="w-full shadow-xl text-white hover:opacity-90"
              style={{ backgroundColor: '#FF7A00' }}
            >
              Umów bezpłatną konsultację
            </Button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl mt-12">
          <img
            src={benefitsImage}
            alt="Dzieci uczące się z monitorem interaktywnym"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8">
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
