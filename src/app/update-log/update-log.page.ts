import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-log',
  templateUrl: './update-log.page.html',
  styleUrls: ['./update-log.page.scss'],
})
export class UpdateLogPage implements OnInit {
  id: any;
  staff_name: any;
  employee_ID: any;
  appointment_ID: any;
  note: any;
  time_frame: any;
  
  constructor(private route:ActivatedRoute, private router:Router, private _apiService:ApiService) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id)
      this.displayLog(this.id); 
    })
  }//end of constructor

  ngOnInit() {
  }

  displayLog(id){ //change to displayAppointment(id)
    this._apiService.displayLog(id).subscribe((res:any) =>{ //change to displayAppointment(id)
      console.log("SUCCESS", res);
      let log = res[0];
        this.staff_name = log.staff_name;
        this.employee_ID = log.employee_ID;
        this.appointment_ID = log.appointment_ID;
        this.note = log.note;
        this.time_frame = log.time_frame;

    },(err:any) => {
      console.log("ERROR",err);
    })
   
  }// end of display appointment log  methods


  updateLog(){
    let log = {
      staff_name: this.staff_name,
      employee_ID: this.employee_ID,
      appointment_ID: this.appointment_ID,
      note: this.note,
      time_frame: this.time_frame,
    }// end of data
                                //Form Vailidation
    if( (this.staff_name == " ") || (this.employee_ID == " ") || (this.appointment_ID == " ") || (this.note == " ") || (this.time_frame == " ") ){
      alert('Please ensure all fields are filled');

    }else{
      this._apiService.updateLog(this.id,log).subscribe((res:any) =>{
        console.log("SUCCESS",res);
        this.router.navigateByUrl('/create-logs');
      }, (err:any) =>{
        console.log("ERROR",err)
      })
    }
  }//end of update function
}
