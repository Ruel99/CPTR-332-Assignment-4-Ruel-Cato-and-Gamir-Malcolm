import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.page.html',
  styleUrls: ['./update-appointment.page.scss'],
})
export class UpdateAppointmentPage implements OnInit {
  id: any;
  full_name: any;
  email: any;
  appointment_type: any;
  staff_member: any;
  day: any;
  appointment_date: any;
  appointment_time: any;

                            /*IF THERE ARE ERRORS AFTER YOU CHANGE THE DIFFERENT METHODS REGARDING THE
                              VIEW OF ALL THE APPOINTMENTS AND VIEWIING ONE APPOINTMENT FOR THE UPDATE 
                              REMEBER THO CHANGE ALL THE viewAppointmets ON THIS PAGE TO viewAppointment
                            */ 

  constructor(private route:ActivatedRoute, private router:Router, private _apiService:ApiService){
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id);
      this.displayAppointments(this.id); //change to displayAppointment(this.id)
    })
    
   }//end of consrtuctor

  ngOnInit() {
  }

          // this function displays a single appointment in the update appointment form.
  
    displayAppointments(id){ 
    this._apiService.displayAppointments(id).subscribe((res:any) =>{ 
      console.log("SUCCESS", res);
      let appointment = res[0];
      this.full_name = appointment.full_name;
      this.email = appointment.email;
      this.appointment_type = appointment.appointment_type;
      this.staff_member = appointment.staff_member;
      this.day = appointment.day;
      this.appointment_date = appointment.appointment_date;
      this.appointment_time = appointment.appointment_time;
    },(err:any) => {
      console.log("ERROR",err)
    })
   
  }// end of view appointment methods

  updateAppointment(){
    let data = {
      full_name: this.full_name,
      email: this.email,
      appointment_type: this.appointment_type,
      staff_member: this.staff_member,
      day: this.day,
      appointment_date: this.appointment_date,
      appointment_time: this.appointment_time,
    }// end of data

    let start = 7.99;
    let end = 13.01
    let fri_start = 7.99
    let fri_end = 14.01

    if( (this.full_name == " ") || (this.email == " ") || (this.appointment_type == " ") || (this.staff_member == " ")  || (this.day == " ") || (this.appointment_date == " ") || (this.appointment_time == " ") ){
      alert('please ensure all fields are filled');

    }else if(this.appointment_time <= start || this.appointment_time >=end && this.day !='Friday'){ //add day parameter
        alert('Please book an appointment during business hours');

    }else if(this.appointment_time <= fri_start || this.appointment_time >=fri_end && this.day =='Friday'){ //add day parameter
      alert('Please book an appointment during business hours');

    }else{

      this._apiService.updateAppointment(this.id,data).subscribe((res:any) =>{
        console.log("SUCCESS",res);
        this.router.navigateByUrl('/view-appointments');
      }, (err:any) =>{
        console.log("ERROR",err)
      })
    }//end of else if
  }//end of update function

}
