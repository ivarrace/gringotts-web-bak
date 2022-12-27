import { AnnualSummary } from './annualSummary';

export interface Category {
  key: string;
  name: string;
  createdDate: string;
  lastModified: string;
  annualSummary: AnnualSummary;
  //movements: number
}
