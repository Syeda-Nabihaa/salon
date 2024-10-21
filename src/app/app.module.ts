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
import { ReviewsComponent } from './component/cards/reviews/reviews.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { FooterComponent } from './component/footer/footer.component';
import { CareComponent } from './page/care/care.component';
import { CarecardsComponent } from './component/cards/carecards/carecards.component';
import { BlogComponent } from './page/blog/blog.component';
import { BlogCardsComponent } from './component/cards/blog-cards/blog-cards.component';
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
    ReviewsComponent,
    GalleryComponent,
    FooterComponent,
    CareComponent,
    CarecardsComponent,
    BlogComponent,
    BlogCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
