import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  isFilterHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFilter() {
    this.isFilterHidden = !this.isFilterHidden;
  }

}
