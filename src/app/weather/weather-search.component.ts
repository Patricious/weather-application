import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Subject} from "rxjs/Subject";
import { Weather } from './weather';

let vm = null;
@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
})
export class WeatherSearchComponent implements OnInit {

    errorMessage: string;
    weatherForecastData: any;
    weatherForecastDataUser: any;
    disabledForecastButton: boolean = true;
    cityName:string;

  userSettings: any = {
    showRecentSearch: true,
    showSearchButton: false,
    geoCountryRestriction: ['za'],
  };

    constructor(private _weatherService:WeatherService) {
    }

    ngOnInit() {
        this.geolocate();
       
    }
    geolocate() {
        vm = this;
        navigator.geolocation.getCurrentPosition(vm.onGeolocateSuccess, vm.onGeolocateError);
      }
    
      onGeolocateSuccess(coordinates) {
          console.log(coordinates);
        const { latitude, longitude } = coordinates.coords;
            vm._weatherService.getWeatherForecast(latitude + ',' + longitude)
            .subscribe(data => {
                vm.weatherForecastDataUser = data;
                console.log(data);
                }, 
                        error =>  vm.errorMessage = <any>error,            
        );
      vm.onResetControls();
      }
    
      onGeolocateError(error) {
        console.log(error.code, error.message);
    
        if (error.code === 1) {
          console.log('User declined geolocation');
        } else if (error.code === 2) {
          console.log('Geolocation position unavailable');
        } else if (error.code === 3) {
          console.log('Timeout determining geolocation');
        }
      }
    autoCompleteCallback1(selectedData: any) {
        const addr = selectedData.data.address_components;
        if (Number.isInteger(parseInt(addr[0].long_name))) {
          this.cityName = addr[3].long_name;
          this.disabledForecastButton = false;
        } else {
            if(addr.length <= 4){
                this.cityName = addr[0].long_name;
            } else {
                this.cityName = addr[2].long_name;
            }
          this.disabledForecastButton = false;
        }
        console.log(addr)
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