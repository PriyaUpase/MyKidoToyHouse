import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { Agegroup1Component } from './product/agegroup1/agegroup1.component'
import { Agegroup2Component } from './product/agegroup2/agegroup2.component';
import { Agegropupa2Component } from './agegropupa2/agegropupa2.component';
import { Agegroupa1Component } from './agegroupa1/agegroupa1.component';
import { ClientComponent } from './client/client.component';


export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {
    path: 'product',component:ProductComponent
   
},

{
  path: 'agegroupa1',component:Agegroupa1Component
 
},
{
  path: 'agegropupa2',component:Agegropupa2Component
 
},

{path:'contact', component:ContactComponent},

{path:'client', component:ClientComponent},





{path: '', redirectTo:'/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
