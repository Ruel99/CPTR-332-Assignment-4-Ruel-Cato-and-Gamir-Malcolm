import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.page.html',
  styleUrls: ['./create-type.page.scss'],
})
export class CreateTypePage implements OnInit {
  name: any;
  price: any;
  
  constructor(public _apiService: ApiService) {}

   addType(){
      let type = {
        name: this.name,
        price: this.price,
      }//end of data
                          //Form Vailidation
    if( (this.name == " ") || (this.price == " ") ){
      alert('Please ensure all fields are filled');

    }else{
      this._apiService.addType(type).subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        this.name = " ";
        this.price = " ";
          alert('SUCCESS');
      },(error: any) => {
        alert('ERROR')
        console.log("ERROR ===",error);  
      })
    }//end of if else
   }//end of add type

  ngOnInit() {
  }

}
