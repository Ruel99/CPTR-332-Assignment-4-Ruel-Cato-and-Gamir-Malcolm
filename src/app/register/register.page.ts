import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: any;
  email: any;
  password: any;
  department: any;
  users: any =[];

  constructor(public _apiService: ApiService){
     this.viewUser(); 
  }

  addUser(){
      let data = {
      name: this.name,
      email: this.email,
      password: this.password,
      department: this.department,
    }//end of data
                                    //Form Vailidation
    if( (this.name == " ") || (this.email == " ") || (this.password == " ") || (this.department == " ")){
      alert('Please ensure all fields are filled');

    }else{
      this._apiService.addUser(data).subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        this.name = " ";
        this.email = " ";
        this.password= " ";
        this.department = " ";
        alert('SUCCESS, Account created');
        this.viewUser(); 
      },(error: any) => {
        alert('ERROR')
        console.log("ERROR ===",error);  
    })
  }//end of if else

  }//end of addAppointment method

  viewUser(){
    this._apiService.viewUser().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.users = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }//end of viewAppointment method

  deleteUser(id){
    this._apiService.deleteUser(id).subscribe((res:any) =>{
      console.log("SUCCESS");
      this.viewUser();
    },(err:any) =>{
      console.log("ERROR")
    })
  }//end of deleteAppointment method

  ngOnInit() {
  }

}
