import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExpensesComponent } from './manage-expenses.component';

describe('SavePlanFormComponent', () => {
  let component: ManageExpensesComponent;
  let fixture: ComponentFixture<ManageExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
