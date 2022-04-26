import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.page.html',
  styleUrls: ['./view-logs.page.scss'],
})
export class ViewLogsPage implements OnInit {
  logs: any =[];

  constructor(public _apiService: ApiService){
    this.viewLogs();
  }

  viewLogs(){
    this._apiService.viewLogs().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.logs = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }// end of view log

  deleteLog(id){
    this._apiService.deleteLog(id).subscribe((res:any) =>{
      console.log("SUCCESS");
      this.viewLogs();
    },(err:any) =>{
      console.log("ERROR")
    })
  }//end of deleteAppointment method
  
  ngOnInit() {
  }

}
