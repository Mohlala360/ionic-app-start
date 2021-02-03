import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = environment.api;
  constructor(private http: HttpClient) { }


  getCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'carBooking/cars');
  }

  addCarBooking(tempCarBooking: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'carBooking', tempCarBooking);
  }

  getCarBookings(carBookings): void {
    carBookings.push(
      {
        carBookingId: 2,
        referenceNo: "CB2",
        user: { name: "Stanely", surname: "Mohlala", email: "stanleymohlala83@gmail.com", cell: "078 289 6472" },
        car: { carId: 1, registrationNumber: "Stanley GP" },
        bookingFrom: '2020-01-02 09:00',
        bookingTo: '2021-01-05 20:00',
        bookingReason: "Want to take my family to dubai."
      },
      {
        carBookingId: 1,
        referenceNo: "CB1",
        user: { name: "Judith", surname: "Matlala", email: "judithmatlala96@gmail.com", cell: "076 767 5812 " },
        car: { carId: 2, registrationNumber: "Judith GP" },
        bookingFrom: '2020-12-31 14:20',
        bookingTo: '2021-01-02 20:00',
        bookingReason: "Going to church."
      });
  }

}
