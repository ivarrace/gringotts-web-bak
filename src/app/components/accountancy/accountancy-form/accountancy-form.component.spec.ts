import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountancyFormComponent } from './accountancy-form.component';

describe('AccountancyFormComponent', () => {
  let component: AccountancyFormComponent;
  let fixture: ComponentFixture<AccountancyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountancyFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountancyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
