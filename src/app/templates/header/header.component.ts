import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.component.css']
})
export class HeaderComponent {


  @Output() toggleEmit = new EventEmitter<boolean>();
  isToggle:boolean = true;
  
  menuClosed: string = 'assets/images/icon-menu-close.svg';
  menuOpen: string = 'assets/images/icon-menu.svg'

  onToggleMenu(){
    this.toggleEmit.emit(this.isToggle)
    this.isToggle  =! this.isToggle;
  }

}
