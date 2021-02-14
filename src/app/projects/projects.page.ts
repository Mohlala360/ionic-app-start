import { Component, OnInit } from '@angular/core';
import { AppService } from '../api/app.service';

import * as moment from 'moment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  bookings: any[];
  loading: boolean;
  constructor(private appService: AppService) {
    this.bookings = [];
  }

  ngOnInit() {
    this.loading = true;
    this.appService.getCarBookings().subscribe((returnedBookings: any[]) => {
      console.log(returnedBookings);
      this.bookings = returnedBookings;
      this.loading = false;
    });
  }

  durationInDays(booking): string {
    const from = booking.bookingFrom;
    const to = booking.bookingTo;
    var result = '';
    var days = Math.abs(
      moment(from, 'YYYY-MM-DD')
        .startOf('day')
        .diff(moment(to, 'YYYY-MM-DD').startOf('day'), 'days')
    ) + 1;

    days < 2 ? result = days + ' day' : result = days + ' days'
    return result;
  }

  formatDate(date): string {
    return moment(date).format('DD MMM YYYY HH:mm');
  }
}