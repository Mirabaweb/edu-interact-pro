import { useEffect } from "react";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - Centrum Wiedzy | Interaktywne Pracownie";
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: 1,
      slug: "jak-wybrac-monitor-interaktywny",
      title: "Jak wybrać monitor interaktywny dla szkoły?",
      description: "Kompleksowy poradnik wyboru odpowiedniego monitora interaktywnego dostosowanego do potrzeb Twojej placówki.",
      image: blog1,
      date: "15 listopada 2024",
    },
    {
      id: 2,
      slug: "5-sposobow-na-wykorzystanie-monitora",
      title: "5 sposobów na wykorzystanie monitora w klasie",
      description: "Praktyczne pomysły na wykorzystanie technologii interaktywnej w codziennym nauczaniu.",
      image: blog2,
      date: "10 listopada 2024",
    },
    {
      id: 3,
      slug: "montaz-i-konfiguracja",
      title: "Montaż i konfiguracja - co warto wiedzieć?",
      description: "Wszystko o procesie instalacji monitora interaktywnego i przygotowaniu sali lekcyjnej.",
      image: blog3,
      date: "5 listopada 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do strony głównej
            </a>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Centrum wiedzy
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dowiedz się, jak nowoczesne technologie wspierają proces nauczania
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.id}
                  className="hover:shadow-lg transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.date}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(`/blog/${article.slug}`, '_blank')}
                    >
                      Czytaj artykuł
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
