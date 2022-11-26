import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/data/types/category';
import { CategoryService } from 'src/app/data/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  category: Category | undefined;
  categoryKey = '';
  groupKey = '';
  groupType = '';
  accountancyKey = '';
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) {
    this.accountancyKey = this.route.snapshot.paramMap.get('accountancyKey')!;
    this.groupType = this.route.snapshot.data['groupType'];
    this.groupKey = this.route.snapshot.paramMap.get('groupKey')!;
    this.categoryKey = this.route.snapshot.paramMap.get('categoryKey')!;
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    if (this.categoryKey) {
      this.categoryService
        .getCategory(
          this.accountancyKey,
          this.groupType,
          this.groupKey,
          this.categoryKey
        )
        .subscribe((cat) => (this.category = cat));
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.category) {
      this.categoryService
        .update(
          this.accountancyKey,
          this.groupType,
          this.groupKey,
          this.categoryKey,
          this.category
        )
        .subscribe({
          next: () => {
            this.errorMsg = '';
            this.goBack();
          },
          error: (error: HttpErrorResponse) => {
            this.errorMsg = error.error.message;
          }
        });
    }
  }
}
