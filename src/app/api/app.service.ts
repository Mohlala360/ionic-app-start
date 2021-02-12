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

  addCarBooking(tempCarBooking: TempCarBooking): Observable<TempCarBooking> {
    return this.http.post<TempCarBooking>(this.apiUrl + 'carBooking', tempCarBooking);
  }

  getCarBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'carBooking');
  }

  getCarBooking(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + `carBooking/${id}`);
  }

  updateCarBooking(booking): Observable<any> {
    return this.http.put<TempCarBooking>(this.apiUrl + 'carBooking', booking);
  }

}

export class TempCarBooking {
  carBookingId: number = 0;
  BookingReason: string;
  ReferenceNo: string;
  bookingFrom: Date;
  bookingTo: Date;
  user: any;
  userId: number = 0;
  car: any;
  carId: number = 0;
  dateCaptured: Date;
  userCatured: number = 0;
}