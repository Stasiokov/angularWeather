import {Component, Input, OnInit} from "@angular/core";
import {FindWeatherService, InfoOneDay} from "../../services/findWeather.service";

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['today.component.css']
})
export class TodayComponent implements OnInit {
  constructor(private findWeather: FindWeatherService) {
  }

  private months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  private days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  todayWeather: InfoOneDay;
  message: string = "Enter city";
  todayDate: string;
  roundTemp: number;

  @Input()
  set todayNameCity(cityName: string) {
    if (cityName !== '') {
      this.findWeather.oneDay(cityName).subscribe(
        data => {
          this.todayWeather = data;
          this.roundTemp = Math.round(data.main.temp);
          this.message = "";
        },
        error => {
          console.log("Oops!", error);
        }
      )
    }
  };

  ngOnInit() {
    const temp = new Date();
    this.todayDate = this.days[temp.getDay()] + ", " + temp.getDate() + " " + this.months[temp.getMonth()] + "   " + temp.getFullYear();
  }

}
