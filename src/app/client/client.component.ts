import { Component, OnInit } from '@angular/core';
import { MyhttpserviceService } from '../myhttpservice.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  data:any = [];

  
  constructor(private dummy:MyhttpserviceService) {
    
   
  }

  ngOnInit(): void {
    this.dummy.getdata().subscribe(data=>{
      console.warn(data)
      this.data = data ;
    })

  }

}
