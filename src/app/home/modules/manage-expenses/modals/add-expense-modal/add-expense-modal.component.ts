import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ExpenseModel } from '../../models/expense-model';
import * as moment from 'moment';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.css']
})
export class AddExpenseModalComponent implements OnInit {

  public expenseModel: ExpenseModel;
  public date: any;
  public category: string;
  public value: number;
  public description: string;

  @Output() passExpense: EventEmitter<any> = new EventEmitter;

  constructor(
    public modalRef: MDBModalRef,
    public modalService: MDBModalService
  ) { }

  ngOnInit() {
    this.category = 'Groceries';
  }

  closeModal() {
    this.modalRef.hide();
  }

  submit() {
    this.date = moment(new Date()).format('YYYY-MM-DD');
    this.expenseModel = {
      date: this.date,
      category: this.category,
      value: this.value,
      description: this.description
    };
    this.passExpense.emit(this.expenseModel);
    console.log(this.category);
    this.modalRef.hide();
  }

}
