# FTmaster - Facility Techmaster Engenharia

## Projeto
Site institucional B2B para empresa de facilities e engenharia voltada a postos de combustível. Cliente principal: Carrefour Postos.

**Versão atual: v2** — Site completo com múltiplas páginas, área de compliance, dashboard e documentação institucional.

## Stack
- HTML5 semântico
- CSS3 vanilla (custom properties, grid, flexbox)
- JavaScript vanilla (ES6+)
- Google Fonts: Inter (corpo), Outfit (títulos)

## Design System

### Paleta de Cores
- Primary: `#00D4AA` (cyan/teal)
- Primary Dark: `#00B894`
- Secondary: `#1A1A4E` (navy escuro)
- Secondary Dark: `#0D0D2B`
- Accent: `#00E5FF` (ciano claro)
- Surface Light: `#F8FFFE`
- Surface Dark: `#12123A`

### Tipografia
- Títulos: Outfit (700, 600)
- Corpo: Inter (400, 500, 600)
- Scale: 16px base, 1.25 ratio

### Princípios de Design
1. **Sóbrio-premium**: Profissional sem ser genérico
2. **Confiança**: Transmitir solidez e competência técnica
3. **Dark + Light mixing**: Seções alternadas escuro/claro
4. **Micro-animações**: Sutis, profissionais (scroll reveal, hover lift)
5. **Mobile-first**: Responsivo para todos os dispositivos

## SEO
- Title tags únicos por página
- Meta descriptions persuasivas (~155 chars)
- Open Graph tags (foco LinkedIn B2B)
- Schema.org JSON-LD (Organization, LocalBusiness, Service)
- Hierarquia semântica de headings (1 h1 por página)
- Alt text em todas as imagens
- Lazy loading em imagens

## Segurança
- Content-Security-Policy via meta tag
- Referrer-Policy: strict-origin-when-cross-origin
- Links externos: rel="noopener noreferrer"
- Form validation client-side
- Deploy com HTTPS obrigatório
- Sem JavaScript inline

## Estrutura de Arquivos
```
FTmaster/
├── index.html           # Home page
├── solucoes.html        # Soluções/Serviços
├── metodologia.html     # Metodologia de trabalho
├── lideranca.html       # Liderança / Equipe
├── compliance.html      # Compliance e políticas
├── contato.html         # Contato
├── dashboard.html       # Área do cliente (Dashboard)
├── dashboard.css        # Estilos específicos do dashboard
├── dashboard.js         # Lógica do dashboard
├── styles.css           # Design system + estilos globais
├── script.js            # Interatividade global
├── claude.md            # Este arquivo de contexto
├── assets/
│   ├── logo.png                          # Logo PNG atual
│   ├── codigo-etica-conduta.pdf          # Código de ética (download)
│   ├── politica-compliance.pdf           # Política de compliance (download)
│   └── politica-conflito-interesses.pdf  # Política de conflitos (download)
├── docs/
│   ├── Apresentação comercial FTmaster v2.pdf
│   ├── CÓDIGO DE ÉTICA E CONDUTA.pdf
│   ├── PLANO DE NEGÓCIOS — SERVIÇOS DE MANUTENÇÃO E REPAROS PARA VAREJO DE COMBUSTÍVEIS.pdf
│   ├── POLÍTICA DE COMPLIANCE – FACILITY TECMASTER ENGENHARIA.pdf
│   ├── POLÍTICA DE CONFLITO DE INTERESSES.pdf
│   └── Relatório Estratégia Digital B2B Facilities.pdf
└── _archive/            # Versões anteriores e protótipos
```

## Páginas

| Arquivo | Título | Descrição |
|---|---|---|
| `index.html` | Home | Hero, serviços resumidos, diferenciais, CTA |
| `solucoes.html` | Soluções | Portfólio de serviços detalhados |
| `metodologia.html` | Metodologia | Processo de trabalho e diferenciais técnicos |
| `lideranca.html` | Liderança | Perfis da equipe de gestão |
| `compliance.html` | Compliance | Código de ética, políticas e downloads |
| `contato.html` | Contato | Formulário, telefone, localização |
| `dashboard.html` | Área do Cliente | Dashboard com hierarquia de 4 níveis |

## Dashboard — Área do Cliente
- Hierarquia de 4 níveis: Admin → Gestor → Supervisor → Técnico
- Visualização de SLAs, chamados e contratos
- Arquivos separados: `dashboard.html`, `dashboard.css`, `dashboard.js`

## Documentação Institucional (docs/)
- Apresentação comercial v2
- Plano de negócios
- Código de ética e conduta
- Política de compliance
- Política de conflito de interesses
- Relatório de estratégia digital B2B

## Público-alvo
- Gerentes de postos de combustível
- Diretoria (C-level)
- Compradores do Carrefour

## Tom de Comunicação
- Profissional e técnico, mas acessível
- Foco em resultados e confiabilidade
- Evitar jargões excessivos
- CTAs diretos e claros
