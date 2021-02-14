import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  education: any[];
  contact: any;
  projects: any[];
  workExperiences: any[];
  loading: boolean;

  constructor() {
    this.education = [];
    this.projects = [];
    this.workExperiences = [];
  }

  ngOnInit() {
    this.loading = true;
    this.getEducations();
    this.getContact();
    this.getProjects();
    this.getWorkExperiences();
    this.loading = false;
  }

  getProjects(): void {
    this.projects.push({ name: "Moifleet", state: "Resigned", relationship: "Participation", technologies: { a: "TypeScript" }, activeYear: { from: "2017", to: "2020" } });
    this.projects.push({ name: "ST Profile", state: "In Progress", relationship: "Personal", technologies: { a: "TypeScript" }, activeYear: { from: "2020", to: "" } });
    this.projects.push({ name: "Librarian", state: "In Progress", relationship: "Assessment", technologies: { a: "C#" }, activeYear: { from: "2020", to: "2020" } });
    this.projects.push({ name: "Drop Down", state: "In Progress", relationship: "Assessment", technologies: { a: "TypeScript" }, activeYear: { from: "2020", to: "2020" } });
    this.projects.push({ name: "User Mang", state: "Pause", relationship: "Personal", technologies: { a: "TypeScript" }, activeYear: { from: "2017", to: "2019" } });
  }

  getEducations(): void {
    this.education.push({ instution: "TUT", highestGrade: "Diploma", duration: "2 yrs", status: "complete" });
    this.education.push({ instution: "UL", highestGrade: "Degree", duration: "7 yrs", status: "In progress" });
  }

  getContact(): void {
    var contact = {
      street: "27820 Mkhabela str",
      sub: "Mamelodi ext 5",
      code: "0122",
      city: "Pretoria",
      cell: "078 289 6274",
      cell2: "064 501 1889",
      email: "stanleymohlala83@gmail.com"
    };
    this.contact = contact;
  }

  getWorkExperiences(): void {
    this.workExperiences.push({ name: "Moitech", position: "Junior Software Developer", reference: { nam: "Moalosi", sur: "Matsepe" }, contact: "082 145 5858", duration: { from: "2017 JAN", to: "2020 MAR" } });
    this.workExperiences.push({ name: "Moitech", position: "Software Developer Intern", reference: { nam: "Moalosi", sur: "Matsepe" }, contact: "082 145 5858", duration: { from: "2017 JAN", to: "2017 DEC" } });
  }

}
