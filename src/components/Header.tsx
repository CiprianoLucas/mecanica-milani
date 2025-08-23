import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5547991727035", "_blank");
  };

  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Logo Mecânica Milani"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Mecânica Milani</h1>
              <p className="text-sm text-muted-foreground">Especialista em Nacionais e Importados</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-smooth">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
          </nav>

          {/* Contact Info & WhatsApp */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Velha central (Ao lado do Terminal da Velha), Blumenau-SC</span>
            </div>
            <Button variant="whatsapp" size="sm" onClick={handleWhatsAppContact}>
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-smooth">
                Início
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-smooth">
                Serviços
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-smooth">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-smooth">
                Contato
              </a>
              <div className="pt-2">
                <Button variant="whatsapp" size="sm" onClick={handleWhatsAppContact} className="w-full">
                  <Phone className="w-4 h-4" />
                  Entrar em Contato
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;