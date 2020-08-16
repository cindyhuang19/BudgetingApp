import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-main',
  templateUrl: './home-page-main.component.html',
  styleUrls: ['./home-page-main.component.css']
})
export class HomePageMainComponent implements OnInit {

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
  }

  manageExpenses() {
    this.router.navigate(['/home/manage-expenses']);
  }

  setGoals() {
    this.router.navigate(['/home/manage-goals-outlet/manage-goals']);
  }

  achievements() {
    this.router.navigate(['']);
  }
}
