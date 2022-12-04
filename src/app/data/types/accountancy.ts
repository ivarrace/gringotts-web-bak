import { AnnualSummary } from './annualSummary';
import { Group } from './group';

export interface Accountancy {
  key: string;
  createdDate: string;
  lastModified: string;
  name: string;
  incomes: Group[];
  expenses: Group[];

  annualSummary: AnnualSummary;
}
