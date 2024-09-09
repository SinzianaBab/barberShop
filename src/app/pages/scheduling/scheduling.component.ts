import {Component, OnInit} from '@angular/core';
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgFor} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {Appointment} from "./appointment";
import {AppointmentsService} from "./appointments.service";
import { HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-scheduling',
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    CardModule,
    HttpClientModule,
    NgFor
  ],
  providers: [AppointmentsService],
  templateUrl: './scheduling.component.html',

})
export class SchedulingComponent implements OnInit {
  appointmentList: Appointment[] = [];

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
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.appointmentsService.getAllAppointments().subscribe({
      next: (appointments: any) => {
        this.appointmentList = appointments;
      },
      error: (err) => {
        console.error('Error fetching appointments: ', err)
      }
    })
  }



  // appointmentList: Appointment[] = this.appointmentsService.getAllAppointments();

}


//todo  backend : dto cu: data programarii, nume, nr tel

//todo separat o pagina in care sa apara toate programarile
