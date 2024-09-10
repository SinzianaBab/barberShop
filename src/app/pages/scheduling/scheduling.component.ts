import {Component, OnInit} from '@angular/core';
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgFor} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {Appointment} from "./appointment";
import {AppointmentsService} from "./appointments.service";

@Component({
  selector: 'app-scheduling',
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    CardModule,
    NgFor
  ],
  providers: [AppointmentsService],
  templateUrl: './scheduling.component.html',

})
export class SchedulingComponent implements OnInit {

  constructor(
   private appointmentsService: AppointmentsService
  ) {
  }

  protected readonly String = String;
  appointment: Appointment = {
    id: "1",
    name: "Lili",
    date: new Date(),
    phoneNumber: "0152478546"
  }

  ngOnInit(): void {
  }



}
