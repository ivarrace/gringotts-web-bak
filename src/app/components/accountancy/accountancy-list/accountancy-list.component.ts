import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Accountancy } from 'src/app/data/types/accountancy';
import { AccountancyService } from 'src/app/data/services/accountancy.service';

@Component({
  selector: 'app-accountancies',
  templateUrl: './accountancy-list.component.html',
  styleUrls: ['./accountancy-list.component.css']
})
export class AccountancyListComponent implements OnInit {
  accountancies: Accountancy[] = [];
  errorMsg = '';
  constructor(private accountancyService: AccountancyService) {}

  ngOnInit(): void {
    this.getAccountancies();
  }

  getAccountancies(): void {
    this.accountancyService
      .getAccountancies()
      .subscribe((accountancies) => (this.accountancies = accountancies));
  }

  deleteRequest(accountancy: Accountancy): void {
    if (!accountancy) {
      return;
    }
    this.accountancyService.delete(accountancy.key).subscribe({
      next: () =>
        (this.accountancies = this.accountancies.filter(
          (h) => h !== accountancy
        )),
      error: (error: HttpErrorResponse) => {
        this.errorMsg = error.message;
      }
    });
  }
}
