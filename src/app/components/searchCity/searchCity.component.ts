import {Component, EventEmitter, Output} from '@angular/core';
import {FindWeatherService} from "../../services/findWeather.service";


@Component({
  selector: 'search-city',
  templateUrl: './searchCity.component.html',
  styleUrls: ['./searchCity.component.css']
})

export class SearchCityComponent {
  constructor(private findWeatherService: FindWeatherService) {
  }

  @Output() eventEmitter: EventEmitter<object> = new EventEmitter<object>();

  errorFind: boolean = false;

  findCity(cityName: string) {
    this.findWeatherService.fiveDay(cityName).subscribe(
      (data) => {
        this.eventEmitter.emit(data);
        this.errorFind = false;
      },
      (error) => {
        console.log("Oops, findCity", error);
        this.errorFind = true;
      });
  }
}
