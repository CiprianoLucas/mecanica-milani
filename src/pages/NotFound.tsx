import { Link } from "react-router-dom";
import { Home, Search, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/* Ícone de Erro */}
        <div className="mb-6">
          <AlertTriangle className="w-20 h-20 text-destructive mx-auto" />
        </div>

        {/* Título */}
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Página Não Encontrada
        </h1>

        {/* Descrição */}
        <p className="text-lg text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>

        {/* Informações Adicionais */}
        <div className="bg-muted/50 rounded-lg p-4 mb-8 text-left">
          <h3 className="font-semibold text-foreground mb-2">
            💡 Dicas para encontrar o que procura:
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Verifique se o endereço está correto</li>
            <li>• Use os links de navegação do site</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
