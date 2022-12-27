import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Accountancy } from 'src/app/data/types/accountancy';

@Component({
  selector: 'app-accountancy-list-item',
  templateUrl: './accountancy-list-item.component.html',
  styleUrls: ['./accountancy-list-item.component.css']
})
export class AccountancyListItemComponent {
  //implements OnInit {
  @Input()
  accountancy!: Accountancy;
  @Output() deleteRequest = new EventEmitter<Accountancy>();

  //constructor() {}

  //ngOnInit(): void {}

  delete(): void {
    if (!this.accountancy) {
      return;
    }
    this.deleteRequest.emit(this.accountancy);
  }
}
