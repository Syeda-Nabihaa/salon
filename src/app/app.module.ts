import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { FindComponent } from './page/find/find.component';
import { PrimarybuttonComponent } from './component/buttons/primarybutton/primarybutton.component';
import { ServicesComponent } from './component/cards/services/services.component';
import { AppointmentsComponent } from './component/cards/appointments/appointments.component';
import { SearchComponent } from './page/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FindComponent,
    PrimarybuttonComponent,
    ServicesComponent,
    AppointmentsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
