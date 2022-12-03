import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountancyReportComponent } from './accountancy-report.component';

describe('AccountancyReportComponent', () => {
  let component: AccountancyReportComponent;
  let fixture: ComponentFixture<AccountancyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountancyReportComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountancyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
