import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseModel } from './models/expense-model';
import * as moment from 'moment';
import { AddExpenseModalComponent } from './modals/add-expense-modal/add-expense-modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-manage-expenses',
  templateUrl: './manage-expenses.component.html',
  styleUrls: ['./manage-expenses.component.css']
})
export class ManageExpensesComponent implements OnInit {

  @Output() expenseList: EventEmitter<any> = new EventEmitter<any>();

  public pickMonth: any;
  public month: string;
  public pickYear: any;
  public expenseModel: ExpenseModel;

  public expenses = [
    {date: '2020-08-05', category: 'Dining', value: 15.44, description: 'Bought lunch'},
    {date: '2020-08-04', category: 'Groceries', value: 50.64, description: ''},
    {date: '2020-08-02', category: 'Entertainment', value: 30.53, description: 'Went to movies'}
  ];

  constructor(
    public modalRef: MDBModalRef,
    public router: Router,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
    this.pickMonth = '8';
    this.pickYear = '2020';
    if (this.pickMonth === '8') {
      this.month = 'August';
    }
  }

  selectionHandler() {
    if (this.pickMonth === '8') {
      this.month = 'August';
    }
  }

  openExpenseModal() {
    this.modalRef = this.modalService.show(AddExpenseModalComponent);
    this.modalRef.content.passExpense.subscribe((expense) => {
      this.addExpense(expense);
      console.log(expense.category);
    });

  }

  addExpense(expense: any) {
    this.expenses.unshift(expense);
  }

  backToOptions() {
    this.expenseList.emit(this.expenses);
    this.router.navigate(['/home/main']);
  }

}
