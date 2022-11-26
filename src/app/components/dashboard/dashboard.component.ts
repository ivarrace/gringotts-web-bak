import { Component, OnInit } from '@angular/core';

import { Accountancy } from 'src/app/data/types/accountancy';
import { AccountancyService } from 'src/app/data/services/accountancy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accountancies: Accountancy[] = [];
  panelOpenState = false;

  constructor(private accountancyService: AccountancyService) {}

  ngOnInit(): void {
    this.getAccountancies();
  }

  getAccountancies(): void {
    this.accountancyService
      .getAccountancies()
      .subscribe((accountancies) => (this.accountancies = accountancies));
  }
}
