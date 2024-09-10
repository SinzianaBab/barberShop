import { Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {SchedulingComponent} from "./pages/scheduling/scheduling.component";
import {ImagesComponent} from "./pages/images/images.component";
import {BarberCalendarComponent} from "./pages/barber-calendar/barber-calendar.component";

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
  },
  {
    path:'calendar',
    component: BarberCalendarComponent,
    title: 'Calendar'
  }


];
