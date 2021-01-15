import { Component, OnInit } from '@angular/core';
import { AppService } from '../api/app.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  bookings: any[];
  constructor(private appService: AppService) {
    this.bookings = [];
  }

  ngOnInit() {

    this.appService.getCarBookings(this.bookings);
    this.bookings;
  }

  durationInDays(booking): Number {
    return 1;
  }
}