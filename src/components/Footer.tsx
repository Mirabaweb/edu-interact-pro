import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  Interaktywne
                </span>
                <span className="font-bold text-lg leading-tight">
                  Pracownie
                </span>
              </div>
            </div>
            <p className="text-background/80 text-sm">
              Technologia, która rozwija edukację
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  O nas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("oferta")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Oferta
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("blog")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("kontakt")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informacje</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Regulamin
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Interaktywne Pracownie. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
