import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

// import { FormsModule } from '@angular/forms';
import { Agegroup1Component } from './product/agegroup1/agegroup1.component';
import { Agegroup2Component } from './product/agegroup2/agegroup2.component';
import { Agegroupa1Component } from './agegroupa1/agegroupa1.component';
import { Agegropupa2Component } from './agegropupa2/agegropupa2.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    NavbarComponent,
    Agegroup1Component,
    Agegroup2Component,
    Agegroupa1Component,
    Agegropupa2Component,
    ClientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    CommonModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent],
    })

export class AppModule { }
