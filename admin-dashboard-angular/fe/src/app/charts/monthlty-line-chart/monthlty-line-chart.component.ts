import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { GetdatabaseapiService } from '../../getdatabaseapi.service';

@Component({
  selector: 'app-monthlty-line-chart',
  templateUrl: './monthlty-line-chart.component.html',
  styleUrls: ['./monthlty-line-chart.component.scss']
})
export class MonthltyLineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Number of Event' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.1)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private readonly apiService: GetdatabaseapiService) { }

  ngOnInit() {
    this.apiService.$shared.subscribe(data => {
      //console.log("From the api to chart", data)
      this.lineChartData[0].data = [];
      data.Linechartyearshowmonth.forEach(item => {
        this.lineChartData[0].data.push(item[0]);
      })
      console.log("line:  ", this.lineChartData)
      // console.log("catory number:  ", this.pieChartData)
    }) 
  }

}
