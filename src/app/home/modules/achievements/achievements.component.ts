import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  backToOptions() {
    this.router.navigate(['home/main']);
  }

}
