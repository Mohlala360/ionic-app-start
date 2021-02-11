import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, TempCarBooking } from 'src/app/api/app.service';

import * as moment from 'moment';

@Component({
  selector: 'app-pool-vehicle',
  templateUrl: './pool-vehicle.page.html',
  styleUrls: ['./pool-vehicle.page.scss'],
})
export class PoolVehiclePage implements OnInit {

  steps: any;
  user: any;
  cars: any;
  booking: any;
  editMode: any;
  title: string;
  car: any;

  from: Date;
  to: Date;
  fromTime: any;
  toTime: any;

  constructor(
    private activatedRoute: ActivatedRoute, private appService: AppService, private router: Router) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.editMode = !!(params['id']);

      if (this.editMode) {
        const bookingId = +params['id'];
        this.title = `Edit car booking `;
        const allBookings = [];
        this.appService.getCarBookings(allBookings);
        var selectedBooking = allBookings.filter(b => b.carBookingId == bookingId)[0];
        this.booking = selectedBooking;
        console.log(this.booking);
      } else {
        this.title = `Add car booking `;
        this.booking = new TempCarBooking();
        this.booking.user = {
          name: "",
          email: "",
          cellPhonenumber: "",
          userId: 0
        };
        this.booking.
          car = {
          carId: 0,
          registrationNumber: "",
        };
        this.from = new Date();
      }
    });

    this.steps = {
      prev: false,
      next: true
    };
    this.getCars();
  }

  setData() {
    this.booking.car = this.car;
    this.booking.bookingTo = moment(this.booking.bookingTo).format('YYYY-MM-DDTHH:mm');
    this.booking.bookingFrom = moment(this.booking.bookingFrom).format('YYYY-MM-DDTHH:mm');
  }

  getCars() {
    this.cars = [];
    this.appService.getCars().subscribe((returnedCars: any[]) => {
      console.log('cars = ', returnedCars);
      this.cars = returnedCars;
    });
  }

  selectedCar(car): void {
    let id = car.target.value;
    this.car = this.cars.filter(b => b.registrationNumber == id.replace(/\s+$/, ''))[0];
  }

  submit(): void {
    this.setData();
    console.log('booking = ', this.booking);
    this.appService.addCarBooking(this.booking).subscribe((booking: any) => {
      if (booking.referenceNo !== undefined) {
        this.router.navigate(['/projects']);
      } else {
        //failing methods here
      }
    });
  }
}
