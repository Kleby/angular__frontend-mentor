import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent implements OnInit{
  @Input() cardPicture!: string;
  @Input() cardOrder!: string;
  @Input() cardTitle!: string;
  @Input() cardDesc!: string;

  ngOnInit(): void {
  }
}
