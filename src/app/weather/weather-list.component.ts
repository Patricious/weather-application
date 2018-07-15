import { Component, OnInit, Input} from '@angular/core';
import { Weather } from './weather';

import { WeatherService } from './weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  _weathers: any;
  errorMessage: string;


  constructor(private _weatherService: WeatherService,
              private router: Router){

  }

  ngOnInit():any {
    this._weathers = JSON.parse(sessionStorage.getItem('weather'));

    }

    gotoDetailpage(id: number): any {
      this.router.navigate(['/detail-page', id]);
    }

}
