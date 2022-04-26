import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-types',
  templateUrl: './view-types.page.html',
  styleUrls: ['./view-types.page.scss'],
})
export class ViewTypesPage implements OnInit {
  types: any =[];

  constructor(public _apiService: ApiService){
    this.viewTypes();
  }

  viewTypes(){
    this._apiService.viewTypes().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.types = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }// end of view log

  deleteType(id){
    this._apiService.deleteType(id).subscribe((res:any) =>{
      console.log("SUCCESS");
      this.viewTypes();
    },(err:any) =>{
      console.log("ERROR")
    })
  }//end of deleteAppointmenttype method
    
  ngOnInit() {
  }

}
