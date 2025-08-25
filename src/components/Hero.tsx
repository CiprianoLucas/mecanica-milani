import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import { useCompany } from "@/contexts/CompanyContext";
import heroImage from "@/assets/hero-mecainca.jpg";

const Hero = () => {
  const { config } = useCompany();

  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${config.whatsapp}`, "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt={`${config.displayName} - Oficina profissional`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 m-10">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm">Mecânica de Confiança</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {config.displayName.split(' ')[0]}
              <span className="block text-accent">{config.displayName.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              {config.speciality}
            </p>

            <div className="flex items-center space-x-2 mb-8 text-white/80">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-lg">{config.address.fullAddress}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="accent" 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5" />
                Fale Conosco no WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Todas as Marcas</h3>
                <p className="text-white/80">Atendemos veículos nacionais e importados</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Linguagem Simples</h3>
                <p className="text-white/80">Explicamos tudo de forma clara e fácil</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Combustão Completa</h3>
                <p className="text-white/80">Todos os serviços para seu carro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;