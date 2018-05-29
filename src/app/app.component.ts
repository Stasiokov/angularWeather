import {Component} from '@angular/core';

export interface InformationCity {
  city:{
    id:number,
    name:string
  }
  coord:{
    lon:number,
    lat:number
  }
  country:string,
  cod:number,
  message:number,
  cnt:number,
  list:[{
    dt:number,
    main:{
      temp:number,
      temp_min:number,
      temp_max:number,
      pressure:number,
      sea_level:number,
      grnd_level:number,
      humidity:number,
      temp_kf:number},
    weather:[{id:number,main:string,description:string,icon:string}],
    clouds:{all:number},
    wind:{speed:string,deg:number},
    sys:{pod:string},
    dt_txt:string}
    ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  information: InformationCity = <InformationCity> {};
  nameCity: string = '';

  findCity(obj: InformationCity): void{
    this.information=obj;
    this.nameCity = obj.city.name;
  }
}
