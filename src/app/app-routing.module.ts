import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { AirportsComponent } from './airports/airports.component';


const routes: Routes = [
  {
    path: '',
    component: AirportsComponent
  },
  {
    path: ':id',
    component: AirportDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
