import { Lock, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import monitorFeature from "@/assets/monitor-feature.jpg";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Jak wybrać monitor interaktywny dla szkoły?",
      description: "Kompleksowy poradnik wyboru odpowiedniego monitora interaktywnego dostosowanego do potrzeb Twojej placówki.",
      image: monitorFeature,
    },
    {
      id: 2,
      title: "5 sposobów na wykorzystanie monitora w klasie",
      description: "Praktyczne pomysły na wykorzystanie technologii interaktywnej w codziennym nauczaniu.",
      image: monitorFeature,
    },
    {
      id: 3,
      title: "Montaż i konfiguracja - co warto wiedzieć?",
      description: "Wszystko o procesie instalacji monitora interaktywnego i przygotowaniu sali lekcyjnej.",
      image: monitorFeature,
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
            Dowiedz się, jak nowoczesne technologie wspierają proces nauczania. 
            Zaloguj się, aby uzyskać dostęp do artykułów, poradników i analiz.
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Lock className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button variant="outline" className="w-full">
                  Zaloguj się, aby czytać
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
