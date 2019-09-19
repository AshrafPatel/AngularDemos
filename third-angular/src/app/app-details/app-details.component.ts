import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  displayText = false;
  arrText = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDisplayText() {
    this.displayText = !this.displayText;
    this.arrText.push(new Date());
  }

}
