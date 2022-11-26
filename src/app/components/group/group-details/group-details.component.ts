import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Group } from 'src/app/data/types/group';
import { GroupService } from 'src/app/data/services/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  group: Group | undefined;
  groupKey = '';
  groupType = '';
  accountancyKey = '';
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location
  ) {
    this.accountancyKey = this.route.snapshot.paramMap.get('accountancyKey')!;
    this.groupType = this.route.snapshot.data['groupType'];
    this.groupKey = this.route.snapshot.paramMap.get('groupKey')!;
  }

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(): void {
    if (this.groupKey) {
      this.groupService
        .getGroup(this.accountancyKey, this.groupType, this.groupKey)
        .subscribe((gr) => (this.group = gr));
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.group) {
      this.groupService
        .update(this.accountancyKey, this.groupType, this.groupKey, this.group)
        .subscribe({
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
