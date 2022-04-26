import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.page.html',
  styleUrls: ['./update-type.page.scss'],
})
export class UpdateTypePage implements OnInit {
  id: any;
  name: any;
  price: any;

  constructor(private route:ActivatedRoute, private router:Router, private _apiService:ApiService) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id)
      this.displayType(this.id); 
    })
  }//end of constructor


  displayType(id){ //change to displayAppointment(id)
    this._apiService.displayType(id).subscribe((res:any) =>{ //change to displayAppointment(id)
      console.log("SUCCESS", res);
      let type = res[0];
        this.name = type.name;
        this.price = type.price;
       
    },(err:any) => {
      console.log("ERROR",err);
    })
   
  }// end of display type methods

  updateType(){
    let type = {
      name: this.name,
      price: this.price,
    }
                      //Form Vailidation
    if( (this.name == " ") || (this.price == " ") ){
      alert('Please ensure all fields are filled');

    }else{
      this._apiService.updateType(this.id,type).subscribe((res:any) =>{
        console.log("SUCCESS",res);
        this.router.navigateByUrl('/create-type');
      }, (err:any) =>{
        console.log("ERROR",err)
      })
    }//end of if else
  }//update type method

  ngOnInit() {
  }

}
