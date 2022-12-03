import { Category } from './category';
import { Summary } from './summary';

export interface Group {
  key: string;
  name: string;
  createdDate: string;
  lastModified: string;
  categories: Category[];
  summary: Summary;
}
