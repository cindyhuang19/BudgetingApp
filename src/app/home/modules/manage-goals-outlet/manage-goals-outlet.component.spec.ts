import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGoalsOutletComponent } from './manage-goals-outlet.component';

describe('ManageGoalsComponent', () => {
  let component: ManageGoalsOutletComponent;
  let fixture: ComponentFixture<ManageGoalsOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGoalsOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGoalsOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
