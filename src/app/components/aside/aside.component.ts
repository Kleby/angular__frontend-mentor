import { Component, Input, OnInit } from '@angular/core';
import { DbFaker } from 'src/app/interfaces/db-faker';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css', './aside.responsive.component.css']
})
export class AsideComponent implements OnInit{
  @Input() title: string = 'New';
  @Input() itemTitle!: string;
  @Input() itemDescription!: string;

  @Input() news!: DbFaker | any;

  ngOnInit(): void {
      
  }

}
