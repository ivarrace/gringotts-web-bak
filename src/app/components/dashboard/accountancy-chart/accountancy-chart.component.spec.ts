import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountancyChartComponent } from './accountancy-chart.component';

describe('AccountancyChartComponent', () => {
  let component: AccountancyChartComponent;
  let fixture: ComponentFixture<AccountancyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountancyChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountancyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
