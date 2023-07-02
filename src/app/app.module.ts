import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplatesModule } from './templates/templates.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TemplatesModule,
    ComponentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
