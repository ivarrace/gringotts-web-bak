import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/data/types/group';
import { GroupService } from 'src/app/data/services/group.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];
  groupType = '';
  accountancyKey = '';
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService
  ) {
    this.accountancyKey = this.route.snapshot.paramMap.get('accountancyKey')!;
    this.groupType = this.route.snapshot.data['groupType'];
  }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService
      .getGroups(this.accountancyKey, this.groupType)
      .subscribe((groups) => (this.groups = groups));
  }

  deleteRequest(group: Group): void {
    if (!group) {
      return;
    }
    this.groupService
      .delete(this.accountancyKey, this.groupType, group.key)
      .subscribe({
        next: () => (this.groups = this.groups.filter((h) => h !== group)),
        error: (error: HttpErrorResponse) => {
          this.errorMsg = error.message;
        }
      });
  }
}
