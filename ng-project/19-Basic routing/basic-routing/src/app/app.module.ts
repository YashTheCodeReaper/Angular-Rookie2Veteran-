import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Sample1Component,
    Sample2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
