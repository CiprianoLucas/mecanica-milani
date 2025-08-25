import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CompanyConfig } from '@/config/companies';
import { getCompanyConfigUrl, CACHE_CONFIG } from '@/config/bucket';

interface CompanyContextType {
  config: CompanyConfig;
  isLoading: boolean;
  error: string | null;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

// Configuração padrão para fallback
const defaultConfig: CompanyConfig = {
  name: 'mecanica-exemplo',
  displayName: 'Mecânica Exemplo',
  logo: '/src/assets/logo.png',
  phone: '(XX) XXXXX-XXXX',
  whatsapp: 'XXXXXXXXXXX',
  street: 'Rua Exemplo 123',
  neighborhood: 'Bairro Exemplo',
  city: 'Cidade Exemplo',
  state: 'XX',
  fullAddress: 'Bairro Exemplo, Cidade Exemplo-XX',
  description: 'Especialista em Veículos Nacionais e Importados',
  speciality: 'Especialista em Veículos Nacionais e Importados',
  weekdays: '8h às 18h',
  saturday: 'Fechado',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.2435009016615!2d-49.129733730379684!3d-26.936038602927397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1spt-BR!2sbr!4v1755877994071!5m2!1spt-BR!2sbr'
};

// Função para mesclar configuração da empresa com valores padrão
const mergeWithDefault = (companyConfig: Partial<CompanyConfig>): CompanyConfig => {
  return {
    ...defaultConfig,
    ...companyConfig
  };
};

// Função para gerenciar cache local
const getCachedConfig = (companyName: string): CompanyConfig | null => {
  try {
    const cached = localStorage.getItem(CACHE_CONFIG.storageKey);
    if (!cached) return null;
    
    const cache = JSON.parse(cached);
    const companyCache = cache[companyName];
    
    if (!companyCache) return null;
    
    // Verificar se o cache ainda é válido
    if (Date.now() - companyCache.timestamp > CACHE_CONFIG.ttl) {
      // Cache expirado, remover
      delete cache[companyName];
      localStorage.setItem(CACHE_CONFIG.storageKey, JSON.stringify(cache));
      return null;
    }
    
    return companyCache.config;
  } catch {
    return null;
  }
};

const setCachedConfig = (companyName: string, config: CompanyConfig): void => {
  try {
    const cached = localStorage.getItem(CACHE_CONFIG.storageKey);
    const cache = cached ? JSON.parse(cached) : {};
    
    cache[companyName] = {
      config,
      timestamp: Date.now()
    };
    
    localStorage.setItem(CACHE_CONFIG.storageKey, JSON.stringify(cache));
  } catch {
    // Ignorar erros de cache
  }
};

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [config, setConfig] = useState<CompanyConfig>(defaultConfig);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCompanyConfig = async (companyName: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Verificar cache primeiro
      const cachedConfig = getCachedConfig(companyName);
      if (cachedConfig) {
        console.log('🔍 fetchCompanyConfig: Usando cache para:', companyName);
        setConfig(cachedConfig);
        setIsLoading(false);
        return;
      }
      
      // URL do arquivo JSON no bucket
      const configUrl = getCompanyConfigUrl(companyName);
      console.log('🔍 fetchCompanyConfig: URL:', configUrl);
      
      const response = await fetch(configUrl);
      
      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`Empresa ${companyName} não encontrada, redirecionando para página inicial`);
          navigate('/');
          return;
        }
        throw new Error(`Erro ao carregar configuração: ${response.status}`);
      }
      
      const companyConfig = await response.json();
      
      // Mesclar com valores padrão para preencher campos faltantes
      const mergedConfig = mergeWithDefault(companyConfig);
      
      console.log('🔍 fetchCompanyConfig: Configuração mesclada para:', companyName);
      
      // Salvar no cache
      setCachedConfig(companyName, mergedConfig);
      
      setConfig(mergedConfig);
    } catch (err) {
      console.error('Erro ao carregar configuração da empresa:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      
      // Redirecionar para página inicial em caso de erro
      navigate('/');
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Extrair o nome da empresa da URL
    const pathname = location.pathname;
    const companyName = pathname.substring(1);
    
    fetchCompanyConfig(companyName);
  }, [location.pathname]);

  return (
    <CompanyContext.Provider value={{ config, isLoading, error }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = (): CompanyContextType => {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error('useCompany deve ser usado dentro de um CompanyProvider');
  }
  return context;
};
