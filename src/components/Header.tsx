import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Interaktywne Pracownie" className="h-14 w-14" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">
                Interaktywne
              </span>
              <span className="font-bold text-lg text-foreground leading-tight">
                Pracownie
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              O nas
            </button>
            <a 
              href="/oferta"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Oferta
            </a>
            <button 
              onClick={() => scrollToSection("blog")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("kontakt")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kontakt
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+48780500017" 
              className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+48 780 500 017</span>
            </a>
            <Button 
              onClick={() => scrollToSection("kontakt")}
              size="default"
            >
              Umów konsultację
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
