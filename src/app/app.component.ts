import {Component} from '@angular/core';
import {InfoFiveDays} from "./services/findWeather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fiveDay: InfoFiveDays;
  nameCity: string;

  findCity(obj: InfoFiveDays): void {
    if (obj) {
      this.fiveDay = obj;
      this.nameCity = obj.city.name;
    }
  }
}
