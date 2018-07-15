import { Component, Input } from '@angular/core';
import { Weather } from './weather';

@Component({
	selector: 'weather-item',
  templateUrl: './weather-item.component.html'   

})
export class WeatherItemComponent {
    @Input('WeatherItem') weather: Weather;

}