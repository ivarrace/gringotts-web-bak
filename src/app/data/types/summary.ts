interface monthResume {
  monthOrdinal: number;
  value: number;
}

export interface Summary {
  monthly: monthResume[];
  total: number;
  average: number;
}
