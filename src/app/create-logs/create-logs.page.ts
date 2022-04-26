import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-logs',
  templateUrl: './create-logs.page.html',
  styleUrls: ['./create-logs.page.scss'],
})
export class CreateLogsPage implements OnInit {
  staff_name: any;
  employee_ID: any;
  appointment_ID: any;
  note: any;
  time_frame: any;
  
  
  constructor(public _apiService: ApiService) { 
    
  }

  addLog(){
    let log = {
      staff_name: this.staff_name,
      employee_ID: this.employee_ID,
      appointment_ID: this.appointment_ID,
      note: this.note,
      time_frame: this.time_frame,
    }//end of data
                                    //Form Vailidation
    if( (this.staff_name == " ") || (this.employee_ID == " ") || (this.appointment_ID == " ") || (this.note == " ") || (this.time_frame == " ") ){
      alert('Please ensure all fields are filled');

    }else{
      this._apiService.addLog(log).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.staff_name = " ";
      this.employee_ID = " ";
      this.appointment_ID = " ";
      this.note = " ";
      this.time_frame = " ";
        alert('SUCCESS');
      
      },(error: any) => {
        alert('ERROR')
        console.log("ERROR ===",error);  
      })
    }//end of if else

  }//end of add log

 



  ngOnInit() {
  }

}
