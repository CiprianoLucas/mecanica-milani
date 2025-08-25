import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Users,
  Award,
  Phone,
  CheckCircle
} from "lucide-react";
import { useCompany } from "@/contexts/CompanyContext";

const About = () => {
  const { config } = useCompany();

  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${config.whatsapp}`, "_blank");
  };

  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Localização Privilegiada",
      description: `Localizada no bairro ${config.neighborhood} em ${config.city}-${config.state}, região central com fácil acesso.`
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Linguagem Simples",
      description: "Explicamos todos os problemas e soluções de forma clara, sem termos técnicos complicados."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Especialistas Experientes",
      description: "Equipe qualificada com anos de experiência em veículos nacionais e importados."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Trabalho Garantido",
      description: "Todos os nossos serviços possuem garantia e acompanhamento pós-venda."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Por que escolher a
              <span className="text-primary block">{config.displayName}?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos uma mecânica especializada que atende todos os tipos de veículos a combustão,
              tanto nacionais quanto importados. Nossa missão é resolver os problemas do seu carro
              de forma honesta e transparente.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="hero"
              size="lg"
              onClick={handleWhatsAppContact}
              className="text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5" />
              Fale Conosco
            </Button>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-hero text-white border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold">Horário de Funcionamento</h3>
                </div>
                <div className="space-y-2 text-white/90">
                  <p><strong>Segunda a Sexta:</strong> {config.weekdays}</p>
                  <p><strong>Sábado:</strong> {config.saturday}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Nossa Localização</h3>
                </div>
                            <p className="text-muted-foreground text-lg mb-4">
              Estamos localizados no bairro {config.neighborhood}, região central de {config.city}-{config.state}.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              📍 {config.street}<br />
              📍 {config.neighborhood} - {config.city} - {config.state}<br />
              📍 Fácil acesso
            </p>
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden">
                  <iframe 
                    src={config.googleMapsUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.2435009016615!2d-49.129733730379684!3d-26.936038602927397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1be4f07f6849%3A0x67100a75365684e3!2sR.%20Teresa%20Marta%20Mathes%2C%2035%20-%20Velha%20Central%2C%20Blumenau%20-%20SC%2C%2089045-510!5e0!3m2!1spt-BR!2sbr!4v1755877994071!5m2!1spt-BR!2sbr"} 
                    className="w-full h-full border-0"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localização da ${config.displayName} em ${config.city}`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;