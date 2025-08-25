# 🚀 Guia de Uso - Sistema Simplificado

## 📍 Como Funciona

### URLs das Empresas
```
http://localhost:8080/                    # Página "Não Encontrado"
http://localhost:8080/mecanica-milani     # Mecânica Milani
http://localhost:8080/mecanica-exemplo    # Mecânica Exemplo
http://localhost:8080/mecanica-joao      # Mecânica João Silva
http://localhost:8080/qualquer-empresa    # Redireciona para "/" (Não Encontrado)
```

### Bucket de Configurações
Todas as configurações são carregadas de:
```
https://mecanica-milani.capiblu.com/companies/exemplo.json
```

## 🧪 Como Testar

### 1. Iniciar o Servidor
```bash
npm run dev
```

### 2. Testar as Rotas
- Acesse: `http://localhost:8080/mecanica-milani`
- Acesse: `http://localhost:8080/mecanica-exemplo`
- Acesse: `http://localhost:8080/empresa-inexistente`

### 3. Testar o Bucket
```bash
node scripts/test-bucket.js
```

## 🔧 Arquivos de Configuração

### Adicionar Nova Empresa
1. Crie um arquivo JSON no bucket:
   ```
   https://mecanica-milani.capiblu.com/companies/nova-empresa.json
   ```

2. Acesse no site:
   ```
   http://localhost:8080/nova-empresa
   ```

### Formato do JSON
```json
{
  "name": "nova-empresa",
  "displayName": "Nova Mecânica",
  "logo": "logo-empresa.png",
  "phone": "(XX) XXXXX-XXXX",
  "whatsapp": "XXXXXXXXXXX",
  "street": "Rua Exemplo 123",
  "neighborhood": "Bairro",
  "city": "Cidade",
  "state": "XX",
  "fullAddress": "Bairro, Cidade-XX",
  "description": "Descrição da empresa",
  "speciality": "Especialidade da empresa",
  "weekdays": "8h às 18h",
  "saturday": "8h às 12h",
  "googleMapsUrl": "URL do Google Maps"
}
```

**💡 Campos opcionais**: Se algum campo estiver faltando, o sistema preenche automaticamente com valores padrão.

## 🛡️ Sistema de Fallback

- **Empresa não encontrada**: Redireciona para página inicial "/"
- **Dados inconsistentes**: Preenche campos faltantes com valores padrão
- **Tratamento de erro**: Mostra página "Não Encontrado" em português
- **Cache inteligente**: 15 minutos de duração para melhor performance

## 📁 Estrutura do Projeto

```
src/
├── config/
│   ├── bucket.ts              # URL do bucket
│   └── companies.ts           # Interface CompanyConfig
├── contexts/
│   └── CompanyContext.tsx     # Contexto da empresa
├── components/
│   └── WhatsAppBanner.tsx     # Banner flutuante do WhatsApp
└── pages/
    └── Index.tsx              # Página principal
```

## 🚀 Próximos Passos

1. **Testar as rotas** no navegador
2. **Adicionar empresas** no bucket
3. **Deploy** para produção

## 💡 Dicas

- URLs de empresas inexistentes redirecionam para página inicial "/"
- Sistema de cache automático (15 minutos)
- Preenchimento automático de campos faltantes com valores padrão
- Página inicial sempre mostra "Não Encontrado"
- Banner flutuante do WhatsApp em todas as páginas
- Estrutura JSON plana para fácil manutenção
