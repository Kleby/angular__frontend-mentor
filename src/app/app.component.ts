import { Component, Input, OnInit } from '@angular/core';

import { HomeMainService } from './services/homeMain.service';
import { DbFaker } from './interfaces/db-faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'app.responsive.component.css'],
})
export class AppComponent implements OnInit {
  isToggle!: boolean;

  cards: DbFaker['cards'] | any;
  news: DbFaker['news'] | any ;

  constructor(private homeMainService: HomeMainService){}
  
  ngOnInit(): void {
      this.homeMainService.getData().subscribe({
        next: (res) => {
          this.cards = res.cards;
          this.news = res.news;
        },
        error: (e) => console.error(e)
      });
  }

  handleOutput(value: boolean) {
    this.isToggle = value;
  }
}
