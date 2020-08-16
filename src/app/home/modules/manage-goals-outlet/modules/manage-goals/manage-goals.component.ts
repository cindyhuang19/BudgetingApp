import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-goals',
  templateUrl: './manage-goals.component.html',
  styleUrls: ['./manage-goals.component.css']
})
export class ManageGoalsComponent implements OnInit {

  public salaryDetails: any;
  public salaryInput: number;
  public periodInput: number;
  public updated = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.salaryDetails = {
      salary: null,
      period: null
    };
    this.updated = false;
  }

  update() {
    this.salaryDetails = {
      salary: this.salaryInput,
      period: this.periodInput
    };
    this.updated = true;
  }

  backToOptions() {
    this.router.navigate(['home/main']);
  }

  payStudentLoan() {
    this.router.navigate(['home/manage-goals-outlet/student-loan']);
  }
}
