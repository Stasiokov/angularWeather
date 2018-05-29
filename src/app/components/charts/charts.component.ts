import {Component, Input} from "@angular/core";
import {InformationCity} from "../../app.component";

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  loadData: any;
  activeBtn = [false, false, false, false];

  @Input()
  set weatherData(data: InformationCity) {
    this.loadData = data;
    if(this.loadData.city){
      this.onTemperature();
    }
  };

  chart = {
    barChartLabels:[],
    barChartOptions: {
      scaleShowVerticalLines: false,
      responsive: true
    },
    barChartType: 'bar',
    barChartLegend: false,
    barChartData: [
      {data: [], label: ''}
    ]
  };

  public onWind(): void {
    this.showInformation(this.loadData.list.map((elem) => {
      return {elem:elem.wind.speed,dt:elem.dt_txt}
    }), "Wind", 0)
  }

  public onTemperature(): void {
    this.showInformation(this.loadData.list.map((elem) => {
      return {elem:elem.main.temp,dt:elem.dt_txt}
    }), "Temperature", 1)
  }

  public onPresure(): void {
    this.showInformation(this.loadData.list.map((elem) => {
      return {elem:elem.main.pressure,dt:elem.dt_txt}
    }), "Presure", 2)
  }

  public onHumidity(): void {
    this.showInformation(this.loadData.list.map((elem) => {
      return {elem:elem.main.humidity,dt:elem.dt_txt}
    }), "Humidity", 3)
  }

  private showInformation(list: any, name: string, num): void {
    let _barChartData = {
      data: new Array(list.length),
      label: name
    };
    let _barChartLabels = [];
    for (let i = 0; i < list.length; i++) {
      _barChartData.data[i] = list[i].elem;
      _barChartLabels.push(list[i].dt.slice(8,16))
    }
    this.loadchart(_barChartLabels,_barChartData.data);
    this.activeBtn = [false, false, false, false];
    this.activeBtn[num] = true;
  }
  private loadchart(arr,arr2): void {
    this.chart.barChartLabels=arr;
    this.chart.barChartData[0].data = arr2;
  }

}
