import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormControl,FormGroupName}from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mykidotoyhouse';
  public currentPage = 0;
  public changePage(delta: number): void {
      // some checks
     this.currentPage = delta++;
  }

  
}
