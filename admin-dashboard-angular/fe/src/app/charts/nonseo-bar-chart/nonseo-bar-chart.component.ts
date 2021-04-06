import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GetdatabaseapiService } from '../../getdatabaseapi.service';

@Component({
  selector: 'app-nonseo-bar-chart',
  templateUrl: './nonseo-bar-chart.component.html',
  styleUrls: ['./nonseo-bar-chart.component.scss']
})
export class NonseoBarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Name Event Month' },
  ];
  public barChartColors: Array<any> = [{
    backgroundColor: [],
  }];

  constructor(private readonly apiService: GetdatabaseapiService) { }

  ngOnInit() {
    this.apiService.$shared.subscribe(data => {
      //console.log("From the api to chart", data)
      this.barChartLabels = [];
      this.barChartData[0].data = [];
      data.Month.forEach(item => {
        this.barChartLabels.push(item[0].trim());
        this.barChartData[0].data.push(item[1]);
        this.barChartColors[0].backgroundColor.push('red')
      })
      // console.log("catory:  ", this.pieChartLabels)
      // console.log("catory number:  ", this.pieChartData)
    }) 
  }

}
