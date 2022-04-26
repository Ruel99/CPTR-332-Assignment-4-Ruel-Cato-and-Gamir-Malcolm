import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.page.html',
  styleUrls: ['./view-appointments.page.scss'],
})
export class ViewAppointmentsPage implements OnInit {
  appointments: any =[];

  constructor(public _apiService: ApiService){
    this.viewAppointment();
  }

  viewAppointment(){
    this._apiService.viewAppointment().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.appointments = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }//end of viewAppointment method

  deleteAppointment(id){
    this._apiService.deleteAppointment(id).subscribe((res:any) =>{
      console.log("SUCCESS");
      this.viewAppointment();
    },(err:any) =>{
      console.log("ERROR")
    })
  }//end of deleteAppointment method

  ngOnInit() {
  }

}
