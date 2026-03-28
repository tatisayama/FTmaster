# FTmaster - Facility Techmaster Engenharia

## Projeto
Site institucional B2B para empresa de facilities e engenharia voltada a postos de combustível. Cliente principal: Carrefour Postos.

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
├── index.html          # Home page
├── sobre.html          # Sobre nós
├── servicos.html       # Serviços
├── contato.html        # Contato
├── styles.css          # Design system + estilos
├── script.js           # Interatividade
├── claude.md           # Este arquivo
└── assets/
    └── logo.jpeg       # Logo da empresa
```

## Público-alvo
- Gerentes de postos de combustível
- Diretoria (C-level)
- Compradores do Carrefour

## Tom de Comunicação
- Profissional e técnico, mas acessível
- Foco em resultados e confiabilidade
- Evitar jargões excessivos
- CTAs diretos e claros
