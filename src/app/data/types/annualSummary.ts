interface monthSummary {
  month: string;
  total: number;
}

export interface AnnualSummary {
  monthly: monthSummary[];
  total: number;
  average: number;
}
