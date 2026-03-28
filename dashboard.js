const mockData = {
  unidade: {
    title: "Visão Geral — Unidade (Carrefour Express Morumbi)",
    userRole: "Gerente de Unidade",
    kpis: [
      { label: "OS em Andamento", value: "02", status: "warning" },
      { label: "SLA no Prazo", value: "100%", status: "good" },
      { label: "OS Concluídas no Mês", value: "15", status: "" },
      { label: "Orçamento Executado", value: "R$ 3.450", status: "accent" }
    ],
    table: [
      { os: "#1023", local: "Morumbi", servico: "Ar-condicionado (Split)", status: "No Prazo", badge: "on-time", tech: "Carlos R.", acoes: "Ver OS" },
      { os: "#1024", local: "Morumbi", servico: "Reparo Hidráulico", status: "Em Andamento", badge: "warning", tech: "Fábio M.", acoes: "Ver OS" },
      { os: "#1018", local: "Morumbi", servico: "Adequação EHS", status: "Concluído", badge: "closed", tech: "Equipe Alpha", acoes: "Baixar Dossiê" },
    ]
  },
  regional: {
    title: "Visão Geral — Regional SP Capital",
    userRole: "Gestor Regional",
    kpis: [
      { label: "Unidades Ativas", value: "45", status: "" },
      { label: "Chamados Abertos", value: "18", status: "warning" },
      { label: "SLA Regional", value: "96%", status: "good" },
      { label: "Itens Críticos (NR10)", value: "01", status: "warning" }
    ],
    table: [
      { os: "#1026", local: "Pinheiros", servico: "Troca Quadro Força", status: "Atrasado", badge: "delayed", tech: "Equipe Beta", acoes: "Cobrar OS" },
      { os: "#1025", local: "Paulista", servico: "Pintura Fachada", status: "No Prazo", badge: "on-time", tech: "João P.", acoes: "Ver OS" },
      { os: "#1023", local: "Morumbi", servico: "Ar-condicionado", status: "No Prazo", badge: "on-time", tech: "Carlos R.", acoes: "Ver OS" },
      { os: "#1015", local: "Itaim Bibi", servico: "Sinalização Fuga", status: "Concluído", badge: "closed", tech: "Equipe Alpha", acoes: "Baixar Dossiê" }
    ]
  },
  cliente: {
    title: "Visão Geral Consolidada — Carrefour Brasil",
    userRole: "Diretoria de Facilities",
    kpis: [
      { label: "Regionais Atendidas", value: "08", status: "" },
      { label: "SLA Global", value: "98.2%", status: "good" },
      { label: "Economia Gerada YTD", value: "R$ 45k", status: "accent" },
      { label: "Compliance Documental", value: "100%", status: "good" }
    ],
    table: [
      { os: "---", local: "Múltiplos (SP)", servico: "Pacote Mensal Preventiva", status: "Em dia", badge: "on-time", tech: "FTmaster", acoes: "Relatório" },
      { os: "---", local: "Múltiplos (RJ)", servico: "Pacote Mensal Preventiva", status: "Em dia", badge: "on-time", tech: "FTmaster", acoes: "Relatório" },
      { os: "#1026", local: "SP-Capital", servico: "Escalonamento Crítico", status: "Atrasado", badge: "delayed", tech: "Gestão", acoes: "Intervir" },
      { os: "DOSS-09", local: "Brasil", servico: "Auditoria EHS Q3", status: "Emitido", badge: "closed", tech: "Compliance", acoes: "Baixar PDF" },
    ]
  },
  admin: {
    title: "Painel de Administração Global — FTmaster",
    userRole: "Diretor FTmaster",
    kpis: [
      { label: "Clientes Ativos", value: "12", status: "" },
      { label: "Equipes em Campo", value: "34", status: "accent" },
      { label: "OS SLA Risco", value: "04", status: "warning" },
      { label: "Faturamento Mensal", value: "R$ 280k", status: "good" }
    ],
    table: [
      { os: "CRF-01", local: "Carrefour", servico: "Contrato Guarda-chuva", status: "Ativo", badge: "closed", tech: "Conta 1", acoes: "Gerenciar" },
      { os: "ASSA-01", local: "Assaí", servico: "Piloto 5 Lojas", status: "Atenção SLA", badge: "delayed", tech: "Conta 2", acoes: "Cobrar Equipe" },
      { os: "MKT-03", local: "Dia Supermercados", servico: "Expansão Nacional", status: "Em Progresso", badge: "on-time", tech: "Comercial", acoes: "Status" },
      { os: "INT-OS", local: "Logística", servico: "Reposição Estoque", status: "Pendente", badge: "warning", tech: "Suprimentos", acoes: "Aprovar" },
    ]
  }
};

function renderKPIs(kpis) {
  const container = document.getElementById('kpi-grid');
  container.innerHTML = kpis.map(kpi => `
    <div class="kpi-card">
      <span class="kpi-title">${kpi.label}</span>
      <span class="kpi-value ${kpi.status}">${kpi.value}</span>
    </div>
  `).join('');
}

function renderTable(rows) {
  const tbody = document.getElementById('os-table-body');
  tbody.innerHTML = rows.map(row => `
    <tr>
      <td>${row.os}</td>
      <td><strong>${row.local}</strong></td>
      <td>${row.servico}</td>
      <td><span class="status-badge ${row.badge}">${row.status}</span></td>
      <td>${row.tech}</td>
      <td><button class="btn-ghost" style="padding:0; font-size:0.75rem;">${row.acoes}</button></td>
    </tr>
  `).join('');
}

function updateDashboardView() {
  const level = document.getElementById('hierarchy-select').value;
  const data = mockData[level];
  
  if(!data) return;

  // Animate transition (simple fade effect)
  const content = document.querySelector('.dash-content');
  content.style.opacity = '0';
  
  setTimeout(() => {
    document.getElementById('dash-title').innerText = data.title;
    document.getElementById('user-role').innerText = data.userRole;
    
    renderKPIs(data.kpis);
    renderTable(data.table);
    
    content.style.opacity = '1';
    content.style.transition = 'opacity 0.3s ease';
  }, 150);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  updateDashboardView();
});
