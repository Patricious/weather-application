import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }  from './page-not-found.component';
import { WeatherSearchComponent } from './weather/weather-search.component';

const routes: Routes = [
  //{ path: '', component: WeatherSearchComponent},
  { path: 'forecast', component: WeatherSearchComponent },
  { path: '', redirectTo: '/forecast', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }



