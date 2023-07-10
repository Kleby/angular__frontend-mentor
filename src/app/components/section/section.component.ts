import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css', './section.responsive.component.css']
})
export class SectionComponent {
  @Input() isToggle!: boolean; 

}
