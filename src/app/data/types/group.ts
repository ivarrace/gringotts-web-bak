import { Category } from './category';
import { AnnualSummary } from './annualSummary';

export interface Group {
  key: string;
  name: string;
  createdDate: string;
  lastModified: string;
  categories: Category[];
  annualSummary: AnnualSummary;
}
