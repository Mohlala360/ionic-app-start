import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  steps: any;
  user: any;
  vehicles: any;
  pool: any;

  constructor() { }

  ngOnInit() {
    this.steps = {
      prev: false,
      next: true
    };

    this.user = {
      name: "",
      email: "",
      cell: ""
    };
    this.getVehicles();
    this.pool = {
      reason: "",
    };
  }

  nextStep() {
    var nameValue = (<HTMLInputElement>document.getElementById("txtName")).value;
    var cellValue = (<HTMLInputElement>document.getElementById("txtCell")).value;
    var emailValue = (<HTMLInputElement>document.getElementById("txtEmail")).value;
    var poolReasonValue = (<HTMLInputElement>document.getElementById("txtPoolReason")).value;

    this.user = {
      name: nameValue,
      cell: cellValue,
      email: emailValue
    };

    console.log(this.user);

    this.pool = {
      reason: poolReasonValue,
    };

    console.log(this.pool);
    
    this.steps = {
      prev: true,
      next: true
    };
  }

  getVehicles() {
    this.vehicles = [];
    this.vehicles.push({ vehicleId: "1", registrationNumber: "Stanley GP" });
    this.vehicles.push({ vehicleId: "2", registrationNumber: "Judith GP" });
    this.vehicles.push({ vehicleId: "3", registrationNumber: "Thuto GP" });
  }

  // prevStep() {
  //   this.steps = {
  //     prev: false,
  //     next: true
  //   }
  // }

}

// export class User {
//   name: "";
//   email: "";
//   cell: "";
// }
