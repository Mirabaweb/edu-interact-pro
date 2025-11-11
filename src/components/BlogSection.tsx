import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      slug: "jak-wybrac-monitor-interaktywny",
      title: "Jak wybrać monitor interaktywny dla szkoły?",
      description: "Kompleksowy poradnik wyboru odpowiedniego monitora interaktywnego dostosowanego do potrzeb Twojej placówki.",
      image: blog1,
    },
    {
      id: 2,
      slug: "5-sposobow-na-wykorzystanie-monitora",
      title: "5 sposobów na wykorzystanie monitora w klasie",
      description: "Praktyczne pomysły na wykorzystanie technologii interaktywnej w codziennym nauczaniu.",
      image: blog2,
    },
    {
      id: 3,
      slug: "montaz-i-konfiguracja",
      title: "Montaż i konfiguracja - co warto wiedzieć?",
      description: "Wszystko o procesie instalacji monitora interaktywnego i przygotowaniu sali lekcyjnej.",
      image: blog3,
    },
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Centrum wiedzy
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dowiedz się, jak nowoczesne technologie wspierają proces nauczania
          </p>
        </div>

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
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>

              <CardContent>
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

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => window.open('/blog', '_blank')}
            className="gap-2"
          >
            Czytaj więcej na blogu
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
