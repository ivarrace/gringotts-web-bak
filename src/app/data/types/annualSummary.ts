interface monthSummary {
  month: string;
  total: number;
  incomes: number;
  expenses: number;
}

export interface AnnualSummary {
  monthly: monthSummary[];
  total: number;
  average: number;
}
