import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { FindComponent } from './page/find/find.component';
import { CareComponent } from './page/care/care.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent },
  {path:'find' , component:FindComponent},
  {path:'care' , component:CareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


