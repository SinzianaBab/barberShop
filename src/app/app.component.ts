import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BarberShop';
}
