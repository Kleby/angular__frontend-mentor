import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';

const importCOmponnets = [
  CardComponent,
  AsideComponent,
  SectionComponent
]

@NgModule({
  declarations: importCOmponnets,
  imports: [
    CommonModule
  ],
  exports: importCOmponnets
})
export class ComponentsModule { }
