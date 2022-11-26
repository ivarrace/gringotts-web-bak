import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/data/types/category';
import { CategoryService } from 'src/app/data/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Input()
  categories: Category[] = [];
  @Input()
  groupKey = '';
  @Input()
  groupType = '';
  @Input()
  accountancyKey = '';
  errorMsg = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.categoryService
      .add(this.accountancyKey, this.groupType, this.groupKey, {
        name
      } as Category)
      .subscribe({
        next: (response: Category) => {
          this.categories.push(response);
          this.errorMsg = '';
        },
        error: (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
        }
      });
  }
}
