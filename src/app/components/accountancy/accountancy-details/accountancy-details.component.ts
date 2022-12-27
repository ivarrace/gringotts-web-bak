import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Accountancy } from 'src/app/data/types/accountancy';
import { AccountancyService } from 'src/app/data/services/accountancy.service';

@Component({
  selector: 'app-accountancy-details',
  templateUrl: './accountancy-details.component.html',
  styleUrls: ['./accountancy-details.component.css']
})
export class AccountancyDetailsComponent implements OnInit {
  accountancy: Accountancy | undefined;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private accountancyService: AccountancyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAccountancy();
  }

  getAccountancy(): void {
    const key = this.route.snapshot.paramMap.get('accountancyKey'); //parseInt(!, 10)
    if (key) {
      this.accountancyService
        .getAccountancy(key)
        .subscribe((acc) => (this.accountancy = acc));
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.accountancy) {
      this.accountancyService.update(this.accountancy).subscribe({
        next: () => {
          this.errorMsg = '';
          this.goBack();
        },
        error: (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
        }
        //complete: () => this.router.navigate(['/']),
      });
    }
  }
}
