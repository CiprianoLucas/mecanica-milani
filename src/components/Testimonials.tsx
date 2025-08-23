import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      rating: 5,
      comment: "Excelente atendimento! O pessoal da Mecânica Milani explicou tudo de forma simples e clara. Meu carro ficou como novo!",
      service: "Revisão completa"
    },
    {
      name: "Maria Santos",
      rating: 5,
      comment: "Profissionais muito honestos e competentes. Resolveram o problema do meu ar condicionado rapidamente e com preço justo.",
      service: "Sistema de ar condicionado"
    },
    {
      name: "Carlos Oliveira",
      rating: 5,
      comment: "Recomendo demais! Trabalham com todas as marcas mesmo. Cuidaram do meu importado com muito carinho e qualidade.",
      service: "Motor e transmissão"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Finalmente encontrei uma mecânica de confiança em Blumenau. Atendimento excelente e preços honestos!",
      service: "Sistema de freios"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-amber-400 text-amber-400" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A confiança dos nossos clientes é o nosso maior patrimônio. 
            Veja o que eles falam sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-hero p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Mais de 500 clientes satisfeitos
            </h3>
            <p className="text-white/90">
              Junte-se aos nossos clientes que confiam na Mecânica Milani para cuidar dos seus veículos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;