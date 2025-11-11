import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const BlogArticle = () => {
  const { slug } = useParams();

  const articles = {
    "jak-wybrac-monitor-interaktywny": {
      title: "Jak wybrać monitor interaktywny dla szkoły?",
      date: "15 listopada 2024",
      image: blog1,
      content: `
        <p>Wybór odpowiedniego monitora interaktywnego to kluczowa decyzja dla każdej szkoły. W tym artykule przedstawimy najważniejsze kryteria, które warto wziąć pod uwagę.</p>
        
        <h2>1. Rozmiar ekranu</h2>
        <p>Rozmiar monitora powinien być dostosowany do wielkości sali lekcyjnej. Dla małych sal wystarczy 65 cali, średnie pomieszczenia najlepiej sprawdzi się 75 cali, a w dużych aulach warto rozważyć model 86 cali.</p>
        
        <h2>2. Rozdzielczość</h2>
        <p>Zalecamy wybór monitorów z rozdzielczością 4K (3840×2160 pikseli). Zapewnia to wyraźny obraz nawet z większej odległości i podczas prezentacji szczegółowych materiałów.</p>
        
        <h2>3. Technologia dotyku</h2>
        <p>Nowoczesne monitory oferują technologię wielodotykową. Minimalna liczba punktów dotyku powinna wynosić 20, co pozwala na równoczesną pracę wielu uczniów.</p>
        
        <h2>4. System operacyjny</h2>
        <p>Wbudowany system Android znacząco ułatwia pracę - nie wymaga podłączania dodatkowego komputera i umożliwia natychmiastowe korzystanie z monitora.</p>
        
        <h2>5. Gwarancja i serwis</h2>
        <p>Zwróć uwagę na długość gwarancji (minimum 3 lata) oraz dostępność lokalnego serwisu. To istotne dla ciągłości procesu edukacyjnego.</p>
        
        <h2>Podsumowanie</h2>
        <p>Wybierając monitor interaktywny dla szkoły, warto skorzystać z bezpłatnej konsultacji i prezentacji sprzętu w warunkach rzeczywistych. Skontaktuj się z nami, aby umówić demonstrację w Twojej placówce.</p>
      `,
    },
    "5-sposobow-na-wykorzystanie-monitora": {
      title: "5 sposobów na wykorzystanie monitora w klasie",
      date: "10 listopada 2024",
      image: blog2,
      content: `
        <p>Monitor interaktywny to nie tylko tablica do pisania. Przedstawiamy pięć praktycznych sposobów wykorzystania tego narzędzia w codziennej pracy dydaktycznej.</p>
        
        <h2>1. Interaktywne prezentacje multimedialne</h2>
        <p>Łącz tekst, obrazy, filmy i animacje w jedną spójną prezentację. Uczniowie mogą wchodzić w interakcję z materiałem bezpośrednio na ekranie.</p>
        
        <h2>2. Gry edukacyjne</h2>
        <p>Wykorzystaj szeroki ekran do przeprowadzania quizów, gier językowych czy zadań matematycznych w formie rywalizacji grupowej.</p>
        
        <h2>3. Wirtualne wycieczki</h2>
        <p>Dzięki wysokiej rozdzielczości zabierz uczniów w podróż do muzeów, parków narodowych czy miast na całym świecie bez wychodzenia z klasy.</p>
        
        <h2>4. Współpraca w czasie rzeczywistym</h2>
        <p>Uczniowie mogą wspólnie pracować nad projektem na ekranie, jednocześnie dodając notatki, rysunki i pomysły.</p>
        
        <h2>5. Zapisywanie i udostępnianie notatek</h2>
        <p>Wszystko, co napiszesz na tablicy, można zapisać i przesłać uczniom po lekcji. Nikt nie musi już przepisywać notatek z tablicy.</p>
        
        <h2>Zacznij dziś</h2>
        <p>To tylko początek możliwości, jakie daje monitor interaktywny. Każdy dzień przynosi nowe pomysły na wykorzystanie technologii w edukacji. Chcesz dowiedzieć się więcej? Umów się na prezentację w swojej szkole!</p>
      `,
    },
    "montaz-i-konfiguracja": {
      title: "Montaż i konfiguracja - co warto wiedzieć?",
      date: "5 listopada 2024",
      image: blog3,
      content: `
        <p>Profesjonalny montaż i prawidłowa konfiguracja monitora interaktywnego to podstawa jego długiej i bezproblemowej pracy. Oto, na co zwrócić uwagę.</p>
        
        <h2>Przygotowanie sali</h2>
        <p>Przed montażem upewnij się, że w sali dostępne są odpowiednie gniazdka elektryczne oraz dostęp do internetu (przewodowego lub WiFi).</p>
        
        <h2>Wybór sposobu montażu</h2>
        <p>Monitor można zamontować na ścianie (trwałe rozwiązanie) lub na mobilnym stojaku (elastyczność). Stojak pozwala łatwo przenosić sprzęt między salami.</p>
        
        <h2>Wysokość montażu</h2>
        <p>Monitor powinien być zamontowany na takiej wysokości, aby górna krawędź ekranu znajdowała się na wysokości oczu nauczyciela, a dolna część była dostępna dla uczniów.</p>
        
        <h2>Podłączenie do sieci</h2>
        <p>Zalecamy połączenie przewodowe z siecią szkolną - jest bardziej stabilne niż WiFi. Dzięki temu aktualizacje i praca z zasobami online będą przebiegać bez zakłóceń.</p>
        
        <h2>Konfiguracja systemu</h2>
        <p>Podczas pierwszego uruchomienia należy skonfigurować system Android, połączyć monitor z siecią i zainstalować niezbędne aplikacje edukacyjne.</p>
        
        <h2>Szkolenie dla nauczycieli</h2>
        <p>Najważniejszy krok! Nawet najlepszy sprzęt nie będzie w pełni wykorzystany bez odpowiedniego przeszkolenia kadry. Oferujemy kompleksowe szkolenia dostosowane do poziomu zaawansowania użytkowników.</p>
        
        <h2>Wsparcie techniczne</h2>
        <p>Po montażu zapewniamy ciągłe wsparcie techniczne. W razie pytań lub problemów jesteśmy do dyspozycji telefonicznie i mailowo.</p>
        
        <p><strong>Potrzebujesz pomocy w montażu?</strong> Skontaktuj się z nami - zajmiemy się wszystkim od A do Z!</p>
      `,
    },
  };

  const article = slug ? articles[slug as keyof typeof articles] : null;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Interaktywne Pracownie`;
    }
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <a 
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do centrum wiedzy
            </a>

            <div className="mb-8">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            <header className="mb-12">
              <p className="text-primary font-medium mb-4">{article.date}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {article.title}
              </h1>
            </header>

            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            <div className="mt-16 p-8 bg-primary/5 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Chcesz dowiedzieć się więcej?
              </h3>
              <p className="text-muted-foreground mb-6">
                Umów się na bezpłatną konsultację i prezentację w Twojej szkole
              </p>
              <a 
                href="/#kontakt"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Skontaktuj się z nami
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
