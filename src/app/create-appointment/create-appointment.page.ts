import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.page.html',
  styleUrls: ['./create-appointment.page.scss'],
})
export class CreateAppointmentPage implements OnInit {
  full_name: any;
  email: any;
  appointment_type: any;
  staff_member: any;
  day: any;
  appointment_date: any;
  appointment_time: any;

  constructor(public _apiService: ApiService){ 
   // this.viewAppointment(); comment out?
  }

  addAppointment(){
    let data = {
      full_name: this.full_name,
      email: this.email,
      appointment_type: this.appointment_type,
      staff_member: this.staff_member,
      day:this.day,
      appointment_date: this.appointment_date,
      appointment_time: this.appointment_time,
    }//end of data

    let start = 7.99;
    let end = 13.01
    let fri_start = 7.99
    let fri_end = 14.01

    if( (this.full_name == " ") || (this.email == " ") || (this.appointment_type == " ") || (this.staff_member == " ")  || (this.day == " ") || (this.appointment_date == " ") || (this.appointment_time == " ")){
      alert('please ensure all fields are filled');

    }else if(this.appointment_time <= start || this.appointment_time >=end && this.day !='Friday'){ //add day parameter
        alert('Please book an appointment during business hours');

    }else if(this.appointment_time <= fri_start || this.appointment_time >=fri_end && this.day =='Friday'){ //add day parameter
      alert('Please book an appointment during business hours');
    }else{
      this._apiService.addAppointment(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.full_name = " ";
      this.email = " ";
      this.appointment_type = " ";
      this.staff_member = " ";
      this.day = " ";
      this.appointment_date = " ";
      this.appointment_time = " ";
        alert('Appointment Created');
    },(error: any) => {
      alert('ERROR')
      console.log("ERROR ===",error);  
    })

    }//end of if else
    
    

  }//end of addAppointment method

  ngOnInit() {
  }

}
