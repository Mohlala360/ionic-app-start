import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute, private appService: AppService) {

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
          bookingReason: "",
          user: {
            name: "",
            email: "",
            cell: ""
          },
          car: {
            registrationNumber: "",
          }
        };
      }
    });
    
    this.steps = {
      prev: false,
      next: true
    };
    this.getCars();

  }

  nextStep() {
    var nameValue = (<HTMLInputElement>document.getElementById("txtName")).value;
    var cellValue = (<HTMLInputElement>document.getElementById("txtCell")).value;
    var emailValue = (<HTMLInputElement>document.getElementById("txtEmail")).value;
    var bookingReasonValue = (<HTMLInputElement>document.getElementById("txtbookingReason")).value;

    this.user = {
      name: nameValue,
      cell: cellValue,
      email: emailValue
    };

    console.log(this.user);

    this.booking = {
      bookingReason: bookingReasonValue,
      user: this.user,
    };

    this.steps = {
      prev: true,
      next: true
    };
  }

  getCars() {
    this.cars = [];
    this.cars.push({ carId: "1", registrationNumber: "Stanley GP" });
    this.cars.push({ carId: "2", registrationNumber: "Judith GP" });
    this.cars.push({ carId: "3", registrationNumber: "Thuto GP" });
  }

  selectedCar(car): void {
    const k = car;
  }

}

// export class User {
//   name: "";
//   email: "";
//   cell: "";
// }
