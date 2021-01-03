import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  today: any;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: '/profile',
      icon: 'man'
    },
    {
      title: 'Contacts',
      url: '/profile',
      icon: 'location'
    },    
    {
      title: 'Work history',
      url: '/profile',
      icon: 'search'
    },
    {
      title: 'Education',
      url: '/education',
      icon: 'medal'
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'pulse'
    },
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
    var date = new Date();

    var options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: 'UTC' 
    };

    this.today =  date.toLocaleString("en-GB", options);
    
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  getCurrentYear(): number {
    return (new Date()).getFullYear();
  }
}
