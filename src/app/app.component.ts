import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {Title: 'Home', url:'home', icon: 'home-outline'}, // <ion-icon name="home-outline"></ion-icon>
    {Title: 'About us', url:'#', icon: 'man-outline'}, //<ion-icon name="man-outline"></ion-icon>
    {Title: 'Contact us', url:'#', icon: 'phone-portrait-outline'}, //<ion-icon name="phone-portrait-outline"></ion-icon>
    {Title: 'Login', url:'#', icon: 'log-in-outline'}, //<ion-icon name="log-in-outline"></ion-icon>
    {Title: 'Register', url:'#', icon: 'person-outline'}, //<ion-icon name=""></ion-icon>
    {Title: 'Create Appintment', url:'create-appointment', icon: ''},
    {Title: 'View Appintment', url:'view-appointments', icon: ''},
    {Title: 'Create Appintment Logs', url:'create-logs', icon: ''},
    {Title: 'View Appintment Logs', url:'view-logs', icon: ''},
    {Title: 'Create Appintment Type', url:'create-types', icon: ''},
    {Title: 'View Appintment Types', url:'view-types', icon: ''},

  ];
  constructor() {}
}
