import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-goals',
  templateUrl: './manage-goals.component.html',
  styleUrls: ['./manage-goals.component.css']
})
export class ManageGoalsComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
}
