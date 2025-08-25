// Configuração simplificada do bucket
export const BUCKET_BASE_URL = import.meta.env.DEV 
  ? '/api/companies' 
  : 'https://mecanica-milani.capiblu.com/companies';

// Função para obter a URL completa de uma empresa
export const getCompanyConfigUrl = (companyName: string): string => {
  return `${BUCKET_BASE_URL}/${companyName}.json`;
};

// Função para obter a URL de um logo
export const getLogoUrl = (logoPath: string): string => {
  // Se o logo já é uma URL completa, retorna como está
  if (logoPath.startsWith('http')) {
    return logoPath;
  }
  
  // Se é um caminho relativo, constrói a URL completa
  return `${BUCKET_BASE_URL.replace('/companies', '/assets')}/${logoPath}`;
};

// Configurações de cache
export const CACHE_CONFIG = {
  // Tempo de cache em milissegundos (15 minutos)
  ttl: 15 * 60 * 1000,
  
  // Chave do cache no localStorage
  storageKey: 'company-config-cache'
};
