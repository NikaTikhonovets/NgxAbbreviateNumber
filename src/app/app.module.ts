import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAbbreviateNumberModule } from 'ngx-abbreviate-number';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAbbreviateNumberModule,
    NgxAbbreviateNumberModule,
    NgxAbbreviateNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
