import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  id: any;
  name: any;
  email: any;
  password: any;
  department: any
  
  constructor(private route:ActivatedRoute, private router:Router, private _apiService:ApiService){
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id)
     this.displayUsers(this.id); 
    })
  }//end of constructor

  displayUsers(id){ //change to displayAppointment(id)
    this._apiService.displayUsers(id).subscribe((res:any) =>{ //change to displayAppointment(id)
      console.log("SUCCESS", res);
      let user = res[0];
        this.name = user.name;
        this.email = user.email;
        this.password = user.password
        this.department = user.depaertment;      
    },(err:any) => {
      console.log("ERROR",err);
    })
   
  }// end of view appointment methods

  updateUser(){
    let data = {
      name: this.name,
      email: this.email,
      password: this.password,
      department: this.department,
    }// end of data
                                  //Form Vailidation
    if( (this.name == " ") || (this.email == " ") || (this.password == " ") || (this.department == " ")){
      alert('Please ensure all fields are filled');

    }else{
      this._apiService.updateUser(this.id,data).subscribe((res:any) =>{
        console.log("SUCCESS",res);
        this.router.navigateByUrl('/register');
      }, (err:any) =>{
        console.log("ERROR",err)
      })
    }//end of if else
  }//end of update function

  ngOnInit() {
  }

}
