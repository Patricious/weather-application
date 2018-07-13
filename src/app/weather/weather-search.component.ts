import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Subject} from "rxjs/Subject";
import { Weather } from './weather';


@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
})
export class WeatherSearchComponent implements OnInit {

    errorMessage: string;
    weatherForecastData: any;
    disabledForecastButton: boolean = true;
    cityName:string;

    constructor(private _weatherService:WeatherService) {
    }

    ngOnInit() {
       
    }

    onSubmit(cityName: string) {
        this._weatherService.getWeatherForecast(cityName)
         .subscribe(data => {
             this.weatherForecastData = data;
            }, 
        error =>  this.errorMessage = <any>error,            
     );
    }
    
    
    onSearchLocation(cityName:string) {
     this.disabledForecastButton = false;
    }

    onSubmitDatabinding() {
    let vm = this;
     console.log("inside the two way:"+ vm.cityName);
        this._weatherService.getWeatherForecast(vm.cityName)
         .subscribe(data => {
             vm.weatherForecastData = data;
             console.log(data);
            }, 
                    error =>  vm.errorMessage = <any>error,            
     );
      vm.onResetControls();

    }

    onSearchLocationWithEvent(event:Event) {
      this.disabledForecastButton = false;
    }

    onResetControls(){
        this.cityName = '';
        this.disabledForecastButton= true;

    }

}