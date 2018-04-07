import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerformerComponent } from './performer/performer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MapComponent } from './map/map.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { FaqComponent } from './faq/faq.component';
import { SponsorComponent } from './sponsor/sponsor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'performers', component: PerformerComponent},
  {path: 'schedules', component: ScheduleComponent},
  {path: 'maps', component: MapComponent},
  {path: 'exhibits', component: ExhibitComponent},
  {path: 'faqs', component: FaqComponent},
  {path: 'sponsors', component: SponsorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
