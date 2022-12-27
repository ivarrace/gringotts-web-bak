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
  groupType: string;
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
        this.updateGroupAnnualSummary(response, movement.categoryKey);
        //this.errorMsg = '';
      },
      error: (error: HttpErrorResponse) => {
        //this.errorMsg = error.error.message;
        console.error(error.error.message);
      }
      //complete: () => this.router.navigate(['/login']),
    });
  }

  private updateGroupAnnualSummary(movement: Movement, categoryKey: string) {
    this.data.group.annualSummary.total += movement.amount;
    this.data.group.annualSummary.average =
      this.data.group.annualSummary.total / 12;
    if (this.data.groupType === 'EXPENSES') {
      this.data.group.annualSummary.monthly[
        this.getDateMonth(movement.date)
      ].total -= movement.amount * -1;
    } else {
      this.data.group.annualSummary.monthly[
        this.getDateMonth(movement.date)
      ].total += movement.amount;
    }
    for (let i = 0; i < this.data.group.categories.length; i++) {
      if (this.data.group.categories[i].key === categoryKey) {
        this.updateCategoryAnnualSummary(
          movement,
          this.data.group.categories[i]
        );
      }
    }
  }

  private updateCategoryAnnualSummary(movement: Movement, category: Category) {
    category.annualSummary.total += movement.amount;
    category.annualSummary.average = category.annualSummary.total / 12;
    category.annualSummary.monthly[this.getDateMonth(movement.date)].total +=
      this.data.groupType === 'EXPENSES'
        ? movement.amount * -1
        : movement.amount;
  }

  private getDateMonth(dateString: string) {
    const d = dateString.split('-');
    const date = new Date(d[0] + '/' + d[1] + '/' + d[2]);
    return date.getMonth();
  }
}
