import {Component} from '@angular/core';
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";


@Component({
  selector: 'app-scheduling',
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    CardModule,
  ],
  templateUrl: './scheduling.component.html',

})
export class SchedulingComponent {
  date: Date = new Date();
  name: string | undefined;
  phoneNumber: string | undefined;
  protected readonly String = String;
}


//todo  backend : dto cu: data programarii, nume, nr tel

//todo separat o pagina in care sa apara toate programarile
