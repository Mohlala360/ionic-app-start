import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/api/app.service';

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
        this.booking = {
          carBookingId: 0,
          bookingReason: "",
          user: {
            name: "",
            email: "",
            cell: "",
            userId: 0
          },
          car: {
            carId: 0,
            registrationNumber: "",
          },
          bookingFrom: "",
          bookingTo: ""
        };
      }
    });

    this.steps = {
      prev: false,
      next: true
    };
    this.getCars();
  }

  setData() {
    var nameValue = (<HTMLInputElement>document.getElementById("txtName")).value;
    var cellValue = (<HTMLInputElement>document.getElementById("txtCell")).value;
    var emailValue = (<HTMLInputElement>document.getElementById("txtEmail")).value;
    var bookingReasonValue = (<HTMLInputElement>document.getElementById("txtbookingReason")).value;
    var bookingFromDateValue = (<HTMLInputElement>document.getElementById("txtbookingFromDate")).value + ' ' +
      (<HTMLInputElement>document.getElementById("txtbookingFromTime")).value;
    var bookingToDateValue = (<HTMLInputElement>document.getElementById("txtbookingToDate")).value + ' ' +
      (<HTMLInputElement>document.getElementById("txtbookingToTime")).value;

    this.user = {
      userId: 0,
      name: nameValue,
      cell: cellValue,
      email: emailValue
    };

    console.log(this.user);

    this.booking = {
      carBookingId: 0,
      bookingReason: bookingReasonValue,
      userId: 0,
      user: this.user,
      bookingTo: bookingToDateValue,
      bookingFrom: bookingFromDateValue,
      carId: this.car.carId,
      car: this.car
    };

    this.steps = {
      prev: true,
      next: true
    };
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
    this.car = this.cars.filter(b => b.carId == id)[0];
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
