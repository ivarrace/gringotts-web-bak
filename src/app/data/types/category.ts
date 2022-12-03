import { Summary } from './summary';

export interface Category {
  key: string;
  name: string;
  createdDate: string;
  lastModified: string;
  summary: Summary;
  //movements: number
}
