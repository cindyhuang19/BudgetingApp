import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-loan',
  templateUrl: './student-loan.component.html',
  styleUrls: ['./student-loan.component.css']
})
export class StudentLoanComponent implements OnInit {

  public calculated = false;
  public loanDebt: number;
  public interestRate: number;
  public months: number;
  public payment: number;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.calculated = false;
  }

  calculate() {
    const r = (this.interestRate / 100) / 12;
    const temp: number = Math.pow((1 + r), this.months);
    this.payment = ((this.loanDebt) / ((temp - 1) / (r * temp)));
    this.payment = Math.round(this.payment * 100) / 100;
    if (this.payment > 0) {
      this.calculated = true;
    }
  }

  backToGoals() {
    this.router.navigate(['/home/manage-goals-outlet/manage-goals']);
  }

}
