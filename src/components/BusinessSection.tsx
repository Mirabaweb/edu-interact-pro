import { Building2, Users, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import businessImage from "@/assets/business-presentation.jpg";

const BusinessSection = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Profesjonalne prezentacje",
      description: "Imponuj klientom i partnerom podczas spotkań biznesowych dzięki wysokiej jakości wyświetlaniu",
    },
    {
      icon: Users,
      title: "Efektywne szkolenia",
      description: "Interaktywne warsztaty i szkolenia zwiększające zaangażowanie pracowników",
    },
    {
      icon: TrendingUp,
      title: "Większa produktywność",
      description: "Lepsza współpraca zespołowa i szybsze podejmowanie decyzji biznesowych",
    },
    {
      icon: Award,
      title: "Przewaga konkurencyjna",
      description: "Nowoczesne technologie budują wizerunek innowacyjnej, profesjonalnej firmy",
    },
  ];

  const features = [
    "Sale konferencyjne i boardroom",
    "Sale szkoleniowe i warsztaty",
    "Przestrzenie coworkingowe",
    "Showroomy i punkty obsługi klienta",
  ];

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Monitory interaktywne dla biznesu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zwiększ efektywność spotkań, szkoleń i prezentacji w Twojej firmie dzięki najnowocześniejszym rozwiązaniom interaktywnym
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={businessImage}
              alt="Profesjonalna prezentacja biznesowa z monitorem interaktywnym"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
              <div className="space-y-2">
                <p className="text-white text-2xl md:text-3xl font-bold">
                  Nowoczesne sale konferencyjne
                </p>
                <p className="text-white/90 text-lg">
                  Profesjonalne wyposażenie dla Twojego biznesu
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in border border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF7A00' }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Idealne rozwiązanie dla
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right space-y-6">
              <div>
                <p className="text-lg text-muted-foreground mb-2">
                  Gotowy na nowoczesne rozwiązania w Twojej firmie?
                </p>
                <p className="text-3xl font-bold text-foreground mb-6">
                  Umów bezpłatną konsultację
                </p>
              </div>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-12 shadow-xl hover:scale-105 transition-transform"
                style={{ backgroundColor: '#FF7A00' }}
              >
                Skontaktuj się z nami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
