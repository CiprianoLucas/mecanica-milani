import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5547991727035", "_blank");
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">M</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mecânica Milani</h3>
                <p className="text-white/70 text-sm">Especialista em Nacionais e Importados</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Cuidamos do seu veículo com qualidade, transparência e linguagem simples. 
              Atendemos todas as marcas de carros a combustão.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informações de Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <button 
                  onClick={handleWhatsAppContact}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  (47) 99172-7035
                </button>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div className="text-white/80">
                  <p>Rua Teresa Marta Mathes 35</p>
                  <p>Velha - Blumenau - SC</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div className="text-white/80">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Finais de semana: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Motor e Transmissão</li>
              <li>• Sistema de Freios</li>
              <li>• Sistema Elétrico</li>
              <li>• Suspensão e Direção</li>
              <li>• Ar Condicionado</li>
              <li>• Manutenção Geral</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Mecânica Milani. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;