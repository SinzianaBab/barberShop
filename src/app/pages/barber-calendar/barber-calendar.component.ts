import {Component, OnInit} from "@angular/core";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgFor} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {AppointmentsService} from "../scheduling/appointments.service";
import {Appointment} from "../scheduling/appointment";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-barber-calendar',
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    CardModule,
    NgFor,
    HttpClientModule
  ],
  providers: [AppointmentsService],
  templateUrl: './barber-calendar.component.html',

})
export class BarberCalendarComponent implements OnInit {
  appointmentList: Appointment[] = [];

  constructor(
    private appointmentsService: AppointmentsService
  ) {
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
}
