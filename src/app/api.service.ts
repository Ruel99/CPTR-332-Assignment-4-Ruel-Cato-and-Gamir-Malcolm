import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/jason');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

                  //API Connection for appointments
  addAppointment(data){
    return this.http.post('https://retoolapi.dev/HsAwZI/appointments_2', data);
  }//end of addAppointment

  // change everything related to this to viewAppointments. this deals with getting all the appointment 
  viewAppointment(){
    return this.http.get('https://retoolapi.dev/HsAwZI/appointments_2');
  }

  deleteAppointment(id){
    return this.http.delete('https://retoolapi.dev/HsAwZI/appointments_2/'+id);
  }

    displayAppointments(id){ 
    return this.http.get('https://retoolapi.dev/HsAwZI/appointments_2/'+id);
  }


  updateAppointment(id, data){
    return this.http.put('https://retoolapi.dev/HsAwZI/appointments_2/'+id,data);
  }

                    //API Connection for appointment Logs

  addLog(log){
    return this.http.post('https://retoolapi.dev/GzNzEc/appointmentlogs', log);
  }

  viewLogs(){
    return this.http.get('https://retoolapi.dev/GzNzEc/appointmentlogs');
  }

  deleteLog(id){
    return this.http.delete('https://retoolapi.dev/GzNzEc/appointmentlogs/'+id);
  }

  displayLog(id){ //change to displayAppointment(id)
    return this.http.get('https://retoolapi.dev/GzNzEc/appointmentlogs/'+id);
  }

  updateLog(id, log){
    return this.http.put('https://retoolapi.dev/GzNzEc/appointmentlogs/'+id,log);
  }


                //API Connection for Appointment Types
  
  addType(type){
    return this.http.post('https://retoolapi.dev/srJde7/appointmenttypes', type);
  }

  viewTypes(){
    return this.http.get('https://retoolapi.dev/srJde7/appointmenttypes');
  }

  deleteType(id){
    return this.http.delete('https://retoolapi.dev/srJde7/appointmenttypes/'+id);
  }

  displayType(id){ //change to displayAppointment(id)
    return this.http.get('https://retoolapi.dev/srJde7/appointmenttypes/'+id);
  }

  updateType(id, type){
    return this.http.put('https://retoolapi.dev/srJde7/appointmenttypes/'+id,type);
  }


              //API Connection for users
  addUser(data){
    return this.http.post('https://retoolapi.dev/9ygN6m/user', data);
  }

  viewUser(){
    return this.http.get('https://retoolapi.dev/9ygN6m/user');
  }
 
  deleteUser(id){
    return this.http.delete('https://retoolapi.dev/9ygN6m/user/'+id);
  }

  displayUsers(id){ //change to displayAppointment(id)
    return this.http.get('https://retoolapi.dev/9ygN6m/user/'+id);
  }

  updateUser(id, data){
    return this.http.put('https://retoolapi.dev/9ygN6m/user/'+id,data);
  }
}// end of ApiService class
 