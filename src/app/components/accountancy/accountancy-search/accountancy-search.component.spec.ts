import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountancySearchComponent } from './accountancy-search.component';

describe('AccountancySearchComponent', () => {
  let component: AccountancySearchComponent;
  let fixture: ComponentFixture<AccountancySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountancySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountancySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
