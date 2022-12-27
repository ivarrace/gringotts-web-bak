import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Category } from 'src/app/data/types/category';
import { CategoryService } from 'src/app/data/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  groupKey = '';
  groupType = '';
  accountancyKey = '';
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.accountancyKey = this.route.snapshot.paramMap.get('accountancyKey')!;
    this.groupType = this.route.snapshot.data['groupType'];
    this.groupKey = this.route.snapshot.paramMap.get('groupKey')!;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService
      .getCategories(this.accountancyKey, this.groupType, this.groupKey)
      .subscribe((categories) => (this.categories = categories));
  }

  deleteRequest(category: Category): void {
    if (!category) {
      return;
    }
    this.categoryService
      .delete(this.accountancyKey, this.groupType, this.groupKey, category.key)
      .subscribe({
        next: () =>
          (this.categories = this.categories.filter((h) => h !== category)),
        error: (error: HttpErrorResponse) => {
          this.errorMsg = error.message;
        }
      });
  }
}
