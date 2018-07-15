import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { environment } from '../../environments/environment';



@Injectable()
export class WeatherService {

  constructor(private http: Http) { 
     console.log('Production='+ environment.production);

  }

  getWeatherItems(){ } 

  getWeatheritemsbyCity(cityName): Observable<any>{

    	 return this.http.get(
         environment.baseUrl +
         'q='+ cityName +
         '&key='+ environment.appId +
         '' + environment.units
         )
    	 .map(response => response.json())
    	 .catch(this.handleError);
  }

  getWeatherForecast(cityName): Observable<any[]>{

     return this.http.get(environment.baseUrl +'q='+ cityName +'&key='+ environment.appId +'' + environment.units)
     .map(response => this.extractData(response))
     .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    let errMsg: string;
      errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}