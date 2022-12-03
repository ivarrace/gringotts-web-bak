import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movement } from 'src/app/data/types/movement';
import { MovementService } from 'src/app/data/services/movement.service';
import { Group } from 'src/app/data/types/group';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/data/types/category';

export interface DialogData {
  movement: Movement;
  group: Group;
}

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
  styleUrls: ['./movement-form.component.css']
})
export class MovementFormComponent implements OnInit {
  movementsHistory: Movement[] = [];
  constructor(
    private movementService: MovementService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.getMovements();
  }

  getMovements(): void {
    this.movementService
      .getMovements(this.data.movement)
      .subscribe((response) => (this.movementsHistory = response));
  }

  save(movement: Movement): void {
    if (!movement) {
      return;
    }
    this.movementService.add(movement).subscribe({
      next: (response: Movement) => {
        console.log(response);
        this.updateGroupSummary(movement);
        //this.errorMsg = '';
      },
      error: (error: HttpErrorResponse) => {
        //this.errorMsg = error.error.message;
        console.error(error.error.message);
      }
      //complete: () => this.router.navigate(['/login']),
    });
  }

  private updateGroupSummary(movement: Movement) {
    this.data.group.summary.total += +movement.amount;
    this.data.group.summary.average = this.data.group.summary.total / 12;
    this.data.group.summary.monthly[this.getDateMonth(movement.date)].value +=
      +movement.amount;
    for (let i = 0; i < this.data.group.categories.length; i++) {
      if (this.data.group.categories[i].key === movement.categoryKey) {
        this.updateCategorySummary(movement, this.data.group.categories[i]);
      }
    }
  }

  private updateCategorySummary(movement: Movement, category: Category) {
    category.summary.total += +movement.amount;
    category.summary.average = category.summary.total / 12;
    category.summary.monthly[this.getDateMonth(movement.date)].value +=
      +movement.amount;
  }

  private getDateMonth(dateString: string) {
    const d = dateString.split('-');
    const date = new Date(d[0] + '/' + d[1] + '/' + d[2]);
    return date.getMonth();
  }
}
