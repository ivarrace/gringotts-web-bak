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

  totalCols = 0;
  totalRows = 0;
  constructor(
    private movementService: MovementService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.totalCols = 16;
    this.totalRows = this.group.categories.length + 1;
  }

  alert(category: string, month: number) {
    const movement: Movement = {
      accountancyKey: this.accountancyKey,
      groupType: this.groupType.toUpperCase(),
      groupKey: this.group.key,
      categoryKey: category,
      date: `2022-${('0' + month).slice(-2)}-01`,
      amount: 42,
      info: 'Random values'
    };
    this.openDialog(movement);
  }

  openDialog(movement: Movement) {
    this.dialog.open(MovementFormComponent, {
      data: { movement: movement, group: this.group }
    });
  }
}
