import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'search-city',
  templateUrl: './searchCity.component.html',
  styleUrls: ['./searchCity.component.css']
})

export class SearchCityComponent {
  constructor(private http: HttpClient) {
  }

  @Output()eventEmitter: EventEmitter <object> = new EventEmitter<object>();

  errorFind: boolean=false;

  findCity(cityName: string) {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=40&appid=9018307f9e86eb34c646ae0328ec1924&units=metric`;
    if(cityName===''){return null}
    this.http.get(url).subscribe(
      (data) => {
        this.eventEmitter.emit(data);
        this.errorFind=false;
      },
      (error) => {
        console.log("Oops, findCity", error);
        this.errorFind=true;
      }
    )
  }
}
