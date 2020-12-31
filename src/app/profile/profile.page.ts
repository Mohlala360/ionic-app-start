import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  education: any[];

  constructor() {
    this.education = [];
  }

  ngOnInit() {
    this.getEducation();
  }

  getEducation(): void {
    this.education.push({ instution: "TUT", highestGrade: "Diploma", duration: "2 yrs", status: "complete" });
    this.education.push({ instution: "UL", highestGrade: "Degree", duration: "7 yrs", status: "In progress" });  
  }

}
