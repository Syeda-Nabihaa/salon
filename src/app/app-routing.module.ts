import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { FindComponent } from './page/find/find.component';
import { CareComponent } from './page/care/care.component';
import { BlogComponent } from './page/blog/blog.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent },
  {path:'find' , component:FindComponent},
  {path:'service' , component:CareComponent},
  {path:'blog' , component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


