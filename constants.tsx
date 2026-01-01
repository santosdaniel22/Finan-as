
import { Question, SpreadsheetInfo } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Como você se sente ao abrir o seu extrato bancário?",
    options: [
      { label: "Totalmente perdido(a), prefiro nem olhar.", value: 1 },
      { label: "Preocupado(a), sinto que o dinheiro some.", value: 2 },
      { label: "Tranquilo(a), sei exatamente o que tem lá.", value: 3 }
    ]
  },
  {
    id: 2,
    text: "Qual é a sua principal fonte de renda?",
    options: [
      { label: "Renda variável (autônomo/comissão).", value: 1 },
      { label: "Salário fixo mensal.", value: 2 },
      { label: "Múltiplas fontes de renda.", value: 3 }
    ]
  },
  {
    id: 3,
    text: "Você sabe quanto gastou no total no mês passado?",
    options: [
      { label: "Não tenho a menor ideia.", value: 1 },
      { label: "Tenho uma estimativa por cima.", value: 2 },
      { label: "Sei o valor exato até os centavos.", value: 3 }
    ]
  },
  {
    id: 4,
    text: "Como você usa seu cartão de crédito?",
    options: [
      { label: "Uso para tudo e perco o controle do limite.", value: 1 },
      { label: "Uso consciente, mas às vezes o valor assusta.", value: 2 },
      { label: "É uma ferramenta estratégica de fluxo de caixa.", value: 3 }
    ]
  },
  {
    id: 5,
    text: "Você possui dívidas ou muitos parcelamentos ativos?",
    options: [
      { label: "Sim, vários parcelamentos que comprometem minha renda.", value: 1 },
      { label: "Apenas o essencial (casa, carro).", value: 2 },
      { label: "Nenhuma dívida ou parcelamento longo.", value: 3 }
    ]
  },
  {
    id: 6,
    text: "Já tentou se organizar financeiramente antes?",
    options: [
      { label: "Nunca tentei.", value: 1 },
      { label: "Tentei planilhas complexas e desisti.", value: 2 },
      { label: "Me organizo, mas busco mais profissionalismo.", value: 3 }
    ]
  },
  {
    id: 7,
    text: "Quanto tempo você pode dedicar à sua organização por mês?",
    options: [
      { label: "Menos de 15 minutos.", value: 1 },
      { label: "Cerca de 30 a 60 minutos.", value: 2 },
      { label: "O tempo que for necessário.", value: 3 }
    ]
  },
  {
    id: 8,
    text: "Qual seu maior objetivo financeiro hoje?",
    options: [
      { label: "Sair do sufoco e pagar as contas em dia.", value: 1 },
      { label: "Começar a poupar e investir.", value: 2 },
      { label: "Liberdade geográfica e independência financeira.", value: 3 }
    ]
  },
  {
    id: 9,
    text: "Costuma sobrar dinheiro no final do mês?",
    options: [
      { label: "Nunca sobra, às vezes falta.", value: 1 },
      { label: "Às vezes sobra um pouco.", value: 2 },
      { label: "Sempre sobra e já tem destino certo.", value: 3 }
    ]
  },
  {
    id: 10,
    text: "Quão importante é ter segurança financeira agora?",
    options: [
      { label: "É a minha prioridade absoluta.", value: 3 },
      { label: "É importante, mas não urgente.", value: 2 },
      { label: "Ainda não parei para pensar nisso.", value: 1 }
    ]
  }
];

export const SPREADSHEETS: SpreadsheetInfo[] = [
  {
    id: "1",
    name: "Controle Financeiro Mensal Geral",
    objective: "Centralizar toda a saúde financeira do mês em uma única tela.",
    columns: ["Categoria", "Previsão", "Realizado", "Diferença", "Status"],
    formulas: ["ARRAY_HEADER (Cálculo Externo)", "SUMIFS Dinâmico", "SE(Vazio;\"\")"],
    benefit: "Visão consolidada sem fórmulas que bloqueiam a exclusão manual de linhas."
  },
  {
    id: "2",
    name: "Controle de Receitas",
    objective: "Mapear todas as entradas, fixas ou variáveis.",
    columns: ["Data", "Fonte", "Valor Bruto", "Impostos/Taxas", "Valor Líquido"],
    formulas: ["Lógica de Entrada Limpa", "Subtração Protegida"],
    benefit: "Apague entradas antigas instantaneamente sem deixar 'rastros' de erro."
  },
  {
    id: "3",
    name: "Controle de Despesas Fixas",
    objective: "Listar compromissos recorrentes que não mudam.",
    columns: ["Vencimento", "Descrição", "Valor", "Pago (Check)"],
    formulas: ["Validação de Dados", "Formatação Condicional"],
    benefit: "Gerencie seus boletos com a facilidade de um checklist físico."
  },
  {
    id: "4",
    name: "Controle de Despesas Variáveis",
    objective: "Monitorar gastos do dia a dia (alimentação, lazer).",
    columns: ["Data", "Item", "Categoria", "Forma de Pagamento", "Valor"],
    formulas: ["Filtro de Categoria Automático", "QUERY Desconectada"],
    benefit: "Exclua gastos errados sem que o valor retorne automaticamente."
  },
  {
    id: "5",
    name: "Controle de Cartão de Crédito",
    objective: "Gerenciar faturas e limites de múltiplos cartões.",
    columns: ["Cartão", "Fechamento", "Vencimento", "Valor Fatura", "Limite Disponível"],
    formulas: ["Soma de Intervalo Dinâmico", "Subtração Simples"],
    benefit: "Flexibilidade total para ajustar limites e limpar faturas pagas."
  },
  {
    id: "6",
    name: "Planejamento de Orçamento Mensal",
    objective: "Definir limites de gastos antes do mês começar.",
    columns: ["Categoria", "Limite Estipulado", "Consumido", "% de Uso"],
    formulas: ["Percentual com Tratamento de Erro", "Sparklines"],
    benefit: "Planejamento que respeita células vazias para uma leitura limpa."
  },
  {
    id: "7",
    name: "Controle de Dívidas e Parcelamentos",
    objective: "Visualizar o fim da linha para cada dívida.",
    columns: ["Credor", "Valor Total", "Parcelas Restantes", "Próximo Vencimento"],
    formulas: ["Cronograma de Pagamento", "Referência Estática"],
    benefit: "Total liberdade para dar baixa em dívidas quitadas removendo a linha."
  },
  {
    id: "8",
    name: "Controle de Assinaturas e Serviços",
    objective: "Listar streamings, clubes e assinaturas anuais.",
    columns: ["Serviço", "Periodicidade", "Valor", "Próxima Renovação"],
    formulas: ["Alerta de Data (IF/TODAY)", "Concatenação"],
    benefit: "Mantenha apenas o que você realmente consome hoje."
  },
  {
    id: "9",
    name: "Controle de Metas Financeiras",
    objective: "Transformar sonhos (viagem, reserva) em números reais.",
    columns: ["Objetivo", "Valor Alvo", "Já Guardado", "Falta", "% Concluído"],
    formulas: ["Cálculo de Projeção", "Normalização de Dados"],
    benefit: "Metas flexíveis: apague e recomece objetivos a qualquer momento."
  },
  {
    id: "10",
    name: "Dashboard de Inteligência Financeira",
    objective: "Dashboard automático com gráficos de performance.",
    columns: ["Gráficos de Pizza", "Gráficos de Linha", "Indicadores de Saúde"],
    formulas: ["Pivot Tables Protegidas", "Named Ranges"],
    benefit: "Dashboard MY Finance que ignora linhas vazias, mantendo o visual profissional."
  }
];
