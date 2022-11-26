import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/data/types/category';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.css']
})
export class CategoryListItemComponent implements OnInit {
  @Input()
  category!: Category;
  @Input()
  groupKey!: string;
  @Input()
  groupType!: string;
  @Input()
  accountancyKey!: string;
  @Output() deleteRequest = new EventEmitter<Category>();

  constructor() {}

  ngOnInit(): void {}

  delete(): void {
    if (!this.category) {
      return;
    }
    this.deleteRequest.emit(this.category);
  }
}
