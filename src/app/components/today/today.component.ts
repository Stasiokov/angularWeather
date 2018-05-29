import {Component, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface oneCity {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
    ],
  base: string,
  main: {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
    sea_level: number,
    grnd_level: number
  },
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  id: number,
  name: string,
  cod: number
}

@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['today.component.css']
})
export class TodayComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  private months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  private days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  todayWeather: oneCity = <oneCity>{};
  message: string = "Enter city";
  todayDate: string;
  roundTemp: number;

  @Input()
  set todayNameCity(cityName: string) {
    if (cityName === '') return;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9018307f9e86eb34c646ae0328ec1924&units=metric`;
    this.http.get(url).subscribe(
      (data: oneCity) => {
        this.todayWeather = data;
        this.roundTemp = Math.round(data.main.temp);
        this.message = "";
      },
      (error) => {
        console.log("Oops, todayNameCity", error);
      })
  };

  ngOnInit() {
    let temp = new Date();
    this.todayDate = this.days[temp.getDay()] + ", " + temp.getDate() + " " + this.months[temp.getMonth()]+"   "+temp.getFullYear();
  }

}
