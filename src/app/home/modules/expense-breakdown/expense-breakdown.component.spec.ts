import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseBreakdownComponent } from './expense-breakdown.component';

describe('ExpenseBreakdownComponent', () => {
  let component: ExpenseBreakdownComponent;
  let fixture: ComponentFixture<ExpenseBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
