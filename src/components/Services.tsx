import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Settings, 
  Zap, 
  CircuitBoard, 
  Car, 
  Gauge,
  Phone
} from "lucide-react";
import engineService from "@/assets/motor.png";
import brakeService from "@/assets/freio.png";
import electricalService from "@/assets/eletrica.png";
import suspensionService from "@/assets/suspensao.png";
import acService from "@/assets/ac.png";
import maintenanceService from "@/assets/vistoria.png";

const Services = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5547991727035", "_blank");
  };

  const services = [
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      image: engineService,
      title: "Motor e Transmissão",
      description: "Manutenção completa do motor, troca de óleo, filtros e reparos na transmissão.",
      details: [
        "Troca de óleo e filtros",
        "Reparo de motor",
        "Manutenção de transmissão",
        "Sincronização de motor"
      ]
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-primary" />,
      image: brakeService,
      title: "Sistema de Freios",
      description: "Revisão e reparo completo do sistema de freios para sua segurança.",
      details: [
        "Troca de pastilhas de freio",
        "Reparo de discos",
        "Manutenção do sistema hidráulico",
        "Teste de eficiência"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      image: electricalService,
      title: "Sistema Elétrico",
      description: "Diagnóstico e reparo de toda parte elétrica do seu veículo.",
      details: [
        "Diagnóstico eletrônico",
        "Reparo de alternador",
        "Troca de bateria",
        "Sistema de ignição"
      ]
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      image: suspensionService,
      title: "Suspensão e Direção",
      description: "Manutenção completa do sistema de suspensão e direção.",
      details: [
        "Alinhamento e balanceamento",
        "Troca de amortecedores",
        "Reparo da caixa de direção",
        "Manutenção de molas"
      ]
    },
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      image: acService,
      title: "Ar Condicionado",
      description: "Manutenção e reparo do sistema de climatização.",
      details: [
        "Recarga de gás",
        "Limpeza do sistema",
        "Troca de filtros",
        "Reparo do compressor"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      image: maintenanceService,
      title: "Manutenção Geral",
      description: "Revisões periódicas e manutenção preventiva completa.",
      details: [
        "Revisão completa",
        "Troca de peças",
        "Manutenção preventiva",
        "Diagnóstico geral"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos todos os serviços para carros a combustão, explicados de forma simples 
            para que você entenda exatamente o que seu veículo precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth transform hover:scale-105 bg-card">
              <CardHeader className="text-center">
                {service.image && (
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-2xl shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Trabalhamos com Todas as Marcas
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Nacionais e importados - Atendemos todos os tipos de veículos a combustão 
              com a mesma qualidade e dedicação.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleWhatsAppContact}
              className="text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;