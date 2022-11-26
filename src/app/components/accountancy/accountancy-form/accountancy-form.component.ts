import { Component, OnInit, Input } from '@angular/core';
import { Accountancy } from 'src/app/data/types/accountancy';
import { AccountancyService } from 'src/app/data/services/accountancy.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accountancy-form',
  templateUrl: './accountancy-form.component.html',
  styleUrls: ['./accountancy-form.component.css']
})
export class AccountancyFormComponent implements OnInit {
  @Input()
  accountancies: Accountancy[] = [];
  errorMsg = '';
  constructor(private accountancyService: AccountancyService) {}

  ngOnInit(): void {}

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.accountancyService.add({ name } as Accountancy).subscribe({
      next: (response: Accountancy) => {
        this.accountancies.push(response);
        this.errorMsg = '';
      },
      error: (error: HttpErrorResponse) => {
        this.errorMsg = error.error.message;
      }
      //complete: () => this.router.navigate(['/login']),
    });
  }
}
