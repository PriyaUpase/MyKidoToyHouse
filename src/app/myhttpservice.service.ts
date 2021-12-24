import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyhttpserviceService {

  constructor(private http:HttpClient) { }//created object of http client
  getdata()//method for getting data from httpcllient
  {
let url ="http://jsonplaceholder.typicode.com/users"
return this.http.get(url);
}
}