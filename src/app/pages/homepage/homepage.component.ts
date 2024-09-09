import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Button} from "primeng/button";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterLink,
    Button
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})


export class HomepageComponent {

  constructor(private readonly router: Router) {}

  async goToAppointments() {
    await this.router.navigateByUrl('scheduling')
  }



}
