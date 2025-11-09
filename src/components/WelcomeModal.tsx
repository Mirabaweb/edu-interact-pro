import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenWelcomeModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Proszę wypełnić wszystkie wymagane pola");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Proszę podać prawidłowy adres e-mail");
      return;
    }

    toast.success("Dziękujemy! Film został wysłany na Twój e-mail.");
    sessionStorage.setItem("hasSeenWelcomeModal", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            🎬 Zobacz cały proces w 90 sekund!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            Podaj swój e-mail, a otrzymasz bezpłatny film pokazujący jak wygląda cały proces: 
            doradztwo, wybór, instalacja i szkolenie nauczycieli.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Imię *</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Jan"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Nazwisko *</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Kowalski"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Adres e-mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="jan.kowalski@szkola.pl"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+48 123 456 789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" variant="hero">
            Odbierz bezpłatny film
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
