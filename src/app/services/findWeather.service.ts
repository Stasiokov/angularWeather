import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

export interface InfoOneDay {
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

export interface InfoFiveDays {
  city: {
    id: number,
    name: string
  }
  coord: {
    lon: number,
    lat: number
  }
  country: string,
  cod: number,
  message: number,
  cnt: number,
  list: [{
    dt: number,
    main: {
      temp: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      sea_level: number,
      grnd_level: number,
      humidity: number,
      temp_kf: number
    },
    weather: [{ id: number, main: string, description: string, icon: string }],
    clouds: { all: number },
    wind: { speed: string, deg: number },
    sys: { pod: string },
    dt_txt: string
  }
    ]
}

@Injectable()
export class FindWeatherService {
  constructor(private httpClient: HttpClient) {
  }

  oneDay(cityName): Observable<InfoOneDay> {
    if (cityName === '') return;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9018307f9e86eb34c646ae0328ec1924&units=metric`;
    return this.httpClient.get<InfoOneDay>(url);
  }

  fiveDay(cityName): Observable<InfoFiveDays> {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=40&appid=9018307f9e86eb34c646ae0328ec1924&units=metric`;
    return this.httpClient.get<InfoFiveDays>(url);
  }
}
