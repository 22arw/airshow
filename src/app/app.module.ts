import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PerformerComponent } from './performer/performer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MapComponent } from './map/map.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LandingComponent } from './landing/landing.component';
import { GuestinfoComponent } from './guestinfo/guestinfo.component';
import { SponsordisplayComponent } from './sponsordisplay/sponsordisplay.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { PremiumseatingComponent } from './premiumseating/premiumseating.component';
import { ParkingComponent } from './parking/parking.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PerformerComponent,
    ScheduleComponent,
    MapComponent,
    ExhibitComponent,
    FaqComponent,
    FooterComponent,
    TimelineComponent,
    LandingComponent,
    GuestinfoComponent,
    SponsordisplayComponent,
    SponsorComponent,
    PremiumseatingComponent,
    ParkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
