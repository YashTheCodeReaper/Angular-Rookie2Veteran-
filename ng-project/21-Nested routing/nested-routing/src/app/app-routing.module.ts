import { GalleryComponent } from './main/nested/gallery/gallery.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { NestedComponent } from './main/nested/nested.component';
import { ContactComponent } from './main/nested/contact/contact.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'main/home',
    component: HomeComponent,
  },
  {
    path: 'main/services',
    component: ServicesComponent,
  },
  {
    path: 'main/nested',
    component: NestedComponent,
    children: [
      {
        path: '',
        component: GalleryComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
