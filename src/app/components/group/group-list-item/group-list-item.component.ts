import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/data/types/group';

@Component({
  selector: 'app-group-list-item',
  templateUrl: './group-list-item.component.html',
  styleUrls: ['./group-list-item.component.css']
})
export class GroupListItemComponent implements OnInit {
  @Input()
  group!: Group;
  @Input()
  groupType!: string;
  @Input()
  accountancyKey!: string;
  @Output() deleteRequest = new EventEmitter<Group>();

  constructor() {}

  ngOnInit(): void {}

  delete(): void {
    if (!this.group) {
      return;
    }
    this.deleteRequest.emit(this.group);
  }
}
