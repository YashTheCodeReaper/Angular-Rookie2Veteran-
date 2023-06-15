import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NestedComponent } from './main/nested/nested.component';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { GalleryComponent } from './main/nested/gallery/gallery.component';
import { ContactComponent } from './main/nested/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NestedComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
