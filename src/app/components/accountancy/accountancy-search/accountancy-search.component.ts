import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Accountancy } from 'src/app/data/types/accountancy';
import { AccountancyService } from 'src/app/data/services/accountancy.service';

@Component({
  selector: 'app-accountancy-search',
  templateUrl: './accountancy-search.component.html',
  styleUrls: ['./accountancy-search.component.css']
})
export class AccountancySearchComponent implements OnInit {
  accountancies$!: Observable<Accountancy[]>;
  private searchTerms = new Subject<string>();

  constructor(private accountancyService: AccountancyService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.accountancies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.accountancyService.searchAccountancies(term)
      )
    );
  }
}
