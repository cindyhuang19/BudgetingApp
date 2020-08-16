import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGoalsComponent } from './manage-goals.component';

describe('SpendPlanFormComponent', () => {
  let component: ManageGoalsComponent;
  let fixture: ComponentFixture<ManageGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
