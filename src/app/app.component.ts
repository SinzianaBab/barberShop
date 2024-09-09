import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ToolBarComponent} from "./components/tool-bar/tool-bar.component";
import {FooterComponent} from "./components/footer/footer.component";


@Component({
  //@Component is a decorator function that specifies the Angular metadata for the component.
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomepageComponent, ToolBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Barber Shop';
}
