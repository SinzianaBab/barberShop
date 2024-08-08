import {Component} from "@angular/core";
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  templateUrl: 'tool-bar.component.html',
  styleUrl: 'tool-bar.component.css',
  imports: [
    MenubarModule,
  ]
})

export class ToolBarComponent {

  items: MenuItem[] = [
    {
      label: ' Home',
      icon: 'pi pi-home',
      route: '/'
    },
    {
      label: ' Images',
      icon: 'pi pi-images',
      route: '/images'
    },
    {
      label: 'Appointments',
      icon: 'pi pi-calendar',
      route: '/scheduling'
    },
    {
      label: 'About the Barber',
      icon: 'pi pi-info-circle',
      route: '/aboutTheBarber'
    }
  ];


}
