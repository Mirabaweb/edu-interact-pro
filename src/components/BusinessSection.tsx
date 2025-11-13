import { Building2, Users, TrendingUp, Award } from "lucide-react";
import businessImage from "@/assets/business-presentation.jpg";

const BusinessSection = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Profesjonalne prezentacje",
      description: "Imponuj klientom i partnerom podczas spotkań biznesowych",
    },
    {
      icon: Users,
      title: "Efektywne szkolenia",
      description: "Interaktywne warsztaty i szkolenia dla pracowników",
    },
    {
      icon: TrendingUp,
      title: "Większa produktywność",
      description: "Lepsza współpraca zespołowa i szybsze podejmowanie decyzji",
    },
    {
      icon: Award,
      title: "Przewaga konkurencyjna",
      description: "Nowoczesne technologie budują wizerunek innowacyjnej firmy",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img
              src={businessImage}
              alt="Profesjonalna prezentacja biznesowa z monitorem interaktywnym"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-8">
              <p className="text-white text-xl md:text-2xl font-semibold">
                Wyposażenie sal konferencyjnych i szkoleniowych
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Monitory interaktywne dla biznesu
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Zwiększ efektywność spotkań, szkoleń i prezentacji w Twojej firmie dzięki nowoczesnym monitorom interaktywnym.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="space-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF7A00' }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
