import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAbbreviateNumberPipe } from 'ngx-abbreviate-number';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAbbreviateNumberPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
