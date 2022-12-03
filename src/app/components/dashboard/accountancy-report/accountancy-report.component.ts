import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Accountancy } from 'src/app/data/types/accountancy';
import { AccountancyService } from 'src/app/data/services/accountancy.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-accountancy-report',
  templateUrl: './accountancy-report.component.html',
  styleUrls: ['./accountancy-report.component.css']
})
export class AccountancyReportComponent implements OnInit {
  accountancy: Accountancy | undefined;

  constructor(
    private route: ActivatedRoute,
    private accountancyService: AccountancyService
  ) {}

  ngOnInit(): void {
    this.getAccountancy();
  }

  getAccountancy(): void {
    const key = this.route.snapshot.paramMap.get('accountancyKey');
    if (key) {
      this.accountancyService
        .getAccountancySummary(key)
        .subscribe((acc) => (this.accountancy = acc));
    }
  }
}
