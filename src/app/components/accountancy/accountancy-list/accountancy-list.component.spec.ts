import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountancyListComponent } from './accountancy-list.component';

describe('AccountancyListComponent', () => {
  let component: AccountancyListComponent;
  let fixture: ComponentFixture<AccountancyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountancyListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
