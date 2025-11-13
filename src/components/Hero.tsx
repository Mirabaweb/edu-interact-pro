import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Nowoczesne monitory interaktywne dla edukacji i biznesu
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Zwiększ efektywność nauczania i profesjonalizm prezentacji biznesowych dzięki nowoczesnym technologiom interaktywnym.
            </p>
            <Button 
              onClick={() => scrollToSection("kontakt")}
              size="lg"
              variant="hero"
              className="mt-4"
            >
              Umów bezpłatną konsultację
            </Button>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage} 
              alt="Nauczyciel i uczniowie korzystający z monitora interaktywnego w nowoczesnej klasie"
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
