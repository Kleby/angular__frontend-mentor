import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component'; 
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';

const importComponents = [
  CardComponent,
  AsideComponent,
  SectionComponent
]

@NgModule({
  declarations: importComponents,
  imports: [
    CommonModule
  ],
  exports: importComponents
})
export class ComponentsModule { }
