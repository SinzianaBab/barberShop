import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {SchedulingComponent} from "./scheduling/scheduling.component";
import {ImagesComponent} from "./images/images.component";

export const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    title: "Home Page"
  },
  {
    path: 'aboutTheBarber',
    component: AboutPageComponent,
    title: 'About the Barber'
  },
  {
    path: 'scheduling',
    component: SchedulingComponent,
    title: 'Schedule an appointment'
  },
  {
    path:'images',
    component: ImagesComponent,
    title: 'Images'
  }


];
