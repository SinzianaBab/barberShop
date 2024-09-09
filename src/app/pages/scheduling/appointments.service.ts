import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppointmentDto} from "./appointment.dto";

@Injectable()
export class AppointmentsService {
  constructor(
    readonly http: HttpClient,
  ) {
  }

  postAppointment = (data: AppointmentDto) => this.http.post('http://localhost:3000/appointments', data);

  getAllAppointments = () => this.http.get('http://localhost:3000/appointments');
}


