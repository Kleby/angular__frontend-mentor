import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const importComponents = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: importComponents,
  imports: [
    CommonModule
  ],
  exports: importComponents
})
export class TemplatesModule { }
