import { Component, OnInit, Input } from '@angular/core';
import { MovementService } from 'src/app/data/services/movement.service';
import { Group } from 'src/app/data/types/group';
import { Movement } from 'src/app/data/types/movement';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/data/types/category';

import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovementFormComponent } from '../movement-form/movement-form.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.css']
})
export class GroupTableComponent implements OnInit {
  @Input()
  accountancyKey!: string;
  @Input()
  groupType!: string;
  @Input()
  group!: Group;
  @Input()
  reportYear!: number;

  totalCols = 0;
  totalRows = 0;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.totalCols = 16;
    this.totalRows = this.group.categories.length + 1;
  }

  showMovements(category: string, month: string) {
    const movement: Movement = {
      accountancyKey: this.accountancyKey,
      groupType: this.groupType.toUpperCase(),
      groupKey: this.group.key,
      categoryKey: category,
      date: this.getDate(month),
      amount: 0,
      info: ''
    };
    this.dialog.open(MovementFormComponent, {
      data: { movement: movement, group: this.group }
    });
  }

  private getDate(month: string) {
    const monthOrdinal = (
      '0' +
      (new Date(`${month} 1, ${this.reportYear}`).getMonth() + 1)
    ).slice(-2);
    return `${this.reportYear}-${monthOrdinal}-01`;
  }
}
