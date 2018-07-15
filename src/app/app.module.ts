import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { APP_CONFIG, AppConfig } from './app.config';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { WeatherService } from './weather/weather.service';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule }  from './app-routing.module';
import { MaterialModule } from './shared/modules/materialModule';



@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    Ng4GeoautocompleteModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
   ],

  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    WeatherItemComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],

  providers: [WeatherService,  { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
