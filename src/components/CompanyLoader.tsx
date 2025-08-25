import { useCompany } from "@/contexts/CompanyContext";
import { Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompanyLoaderProps {
  children: React.ReactNode;
}

const CompanyLoader: React.FC<CompanyLoaderProps> = ({ children }) => {
  const { isLoading, error } = useCompany();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Carregando configuração da empresa...
          </h2>
          <p className="text-muted-foreground">
            Aguarde enquanto buscamos as informações da sua empresa
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Erro ao carregar configuração
          </h2>
          <p className="text-muted-foreground mb-6">
            {error}
          </p>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Verifique se:
            </p>
            <ul className="text-sm text-muted-foreground text-left space-y-1">
              <li>• A empresa existe no bucket</li>
              <li>• O arquivo JSON está acessível</li>
              <li>• A URL do bucket está configurada corretamente</li>
            </ul>
          </div>
          <Button 
            onClick={() => window.location.reload()} 
            className="mt-6"
            variant="outline"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default CompanyLoader;
