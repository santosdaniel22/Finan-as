
export enum AppView {
  FUNNEL = 'FUNNEL',
  RESULT = 'RESULT',
  SALES_PAGE = 'SALES_PAGE'
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: number; // weight for diagnostic
  }[];
}

export interface SpreadsheetInfo {
  id: string;
  name: string;
  objective: string;
  columns: string[];
  formulas: string[];
  benefit: string;
}

export interface DiagnosticResult {
  level: 1 | 2 | 3;
  title: string;
  description: string;
  recommendation: string;
}
