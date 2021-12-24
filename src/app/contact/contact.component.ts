import { Component,OnInit} from '@angular/core';

import { MyhttpserviceService } from '../myhttpservice.service';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';




import { FormControl,FormGroup,Validators } from '@angular/forms'  ;
import { MymsgService } from '../mymsg.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent implements OnInit {


  
   constructor(){  }
  
  
  
  firstname: any;
  lastname: any;
  ngOnInit(): void {

  
  }
  myform = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.maxLength(15)]),
    lastname : new FormControl('',[Validators.required,Validators.maxLength(20)]),
    emailid : new FormControl('',[Validators.required]),
    mobno : new FormControl('',[Validators.required,Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')])


  })
  
   get Firstname() {
     return this.myform.get('firstname');
  }
  get Lastname() {
    return this.myform.get('lastname');
 }
 get Emailid() {
  return this.myform.get('emailid');
}
get Mobno() {
  return this.myform.get('mobno');
}
get f(){
  return this.myform.controls;
}
 


onSubmit(myform:any) {
  console.log(this.myform.value);
}

btnClick(){

  const msgService = new MymsgService();
  msgService.messageAlert()
 }

 selectedCountry: String = "--Choose Country--";
  
 Countries: Array<any> = [
   { name: 'India', states: [ {name: 'Maharastra', cities: ['Nagpur', 'Pune', 'Mumbai']} , {name: 'Madhyapradesh', cities: ['Jabalpur', 'Bhopal', 'Chhindwara']},
   {name: 'Gujrat', cities: ['Ahemadabad', 'Surat', 'Vadodra']}] },


   { name: 'Germany', states: [ {name: 'B', cities: ['Barcelona']} ] },
   { name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
   { name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
   { name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
 ];
 //states: Array<any>; //Angular 8
 states: Array<any> = []; //Angular 11

 //cities: Array<any>; //Angular 8
 cities: Array<any> = []; //Angular 11
 
 //changeCountry(country) { //Angular 8
 changeCountry(country: any) { //Angular 11
   //this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
   this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; //Angular 11
 }

 //changeState(state) { //Angular 8
 changeState(state: any) { //Angular 11
   //this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == state).cities; //Angular 8
   this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
 }
 


 
}   
   
 

