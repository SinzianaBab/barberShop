import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ToolBarComponent} from "./components/tool-bar/tool-bar.component";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomepageComponent, ToolBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BarberShop';
}
