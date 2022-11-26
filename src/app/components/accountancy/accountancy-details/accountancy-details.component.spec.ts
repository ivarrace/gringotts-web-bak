import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountancyDetailsComponent } from './accountancy-details.component';

describe('AccountancyDetailsComponent', () => {
  let component: AccountancyDetailsComponent;
  let fixture: ComponentFixture<AccountancyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountancyDetailsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountancyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
