import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Car,
  Wrench
} from "lucide-react";

const Contact = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5547991727035", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Precisa de ajuda com seu veículo? Entre em contato conosco pelo WhatsApp 
            e receba atendimento rápido e personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Fale Conosco Agora</h3>
              <p className="text-xl text-white/90 mb-8">
                Clique no botão abaixo e seja direcionado para nosso WhatsApp. 
                Nossa equipe está pronta para te atender!
              </p>
              
              <Button 
                variant="accent" 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="text-xl px-10 py-8 mb-8"
              >
                <MessageCircle className="w-6 h-6" />
                Chamar no WhatsApp
              </Button>

              <p className="text-white/80 text-lg">
                📱 <strong>(47) 99172-7035</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold text-lg mb-2">Localização</h4>
                <p className="text-white/80">
                  Ao lado do Terminal da Velha<br />
                  Blumenau - SC
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold text-lg mb-2">Horários</h4>
                <p className="text-white/80">
                  Seg-Sex: 8h às 18h<br />
                  Sáb: 8h às 12h
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-accent" />
                  <span>Atendimento Especializado</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Trabalhamos com todas as marcas de veículos nacionais e importados. 
                  Nossa experiência garante o melhor cuidado para seu carro.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Wrench className="w-6 h-6 text-accent" />
                  <span>Serviços Completos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Oferecemos todos os serviços para veículos a combustão, desde 
                  manutenção básica até reparos complexos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  <span>Explicação Clara</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Explicamos todos os problemas e soluções em linguagem simples, 
                  para que você entenda exatamente o que seu veículo precisa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Seu carro em boas mãos!
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Na Mecânica Milani, cuidamos do seu veículo com a atenção e qualidade que ele merece.
            </p>
            <Button 
              variant="accent" 
              size="lg" 
              onClick={handleWhatsAppContact}
              className="text-xl px-10 py-6"
            >
              <Phone className="w-6 h-6" />
              (47) 99172-7035
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;