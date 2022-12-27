import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Group } from 'src/app/data/types/group';
import { GroupService } from 'src/app/data/services/group.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  @Input()
  groups: Group[] = [];
  @Input()
  groupType = '';
  @Input()
  accountancyKey = '';
  errorMsg = '';

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {}

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.groupService
      .add(this.accountancyKey, this.groupType, { name } as Group)
      .subscribe({
        next: (response: Group) => {
          this.groups.push(response);
          this.errorMsg = '';
        },
        error: (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
        }
        //complete: () => this.router.navigate(['/login']),
      });
  }
}
