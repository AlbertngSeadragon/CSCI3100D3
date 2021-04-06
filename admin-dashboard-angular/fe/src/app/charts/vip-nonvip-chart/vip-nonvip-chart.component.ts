import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { GetdatabaseapiService } from '../../getdatabaseapi.service';

@Component({
  selector: 'app-vip-nonvip-chart',
  templateUrl: './vip-nonvip-chart.component.html',
  styleUrls: ['./vip-nonvip-chart.component.scss']
})
export class VipNonvipChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array<any> = [{
    backgroundColor: [],
  }];

  constructor(private readonly apiService: GetdatabaseapiService) { }


  ngOnInit() {
    this.apiService.$shared.subscribe(data => {
      //console.log("From the api to chart", data)
      this.pieChartData = [];
      this.pieChartLabels = [];
      data.typeofitem.forEach(item => {
        this.pieChartLabels.push(item[0].trim());
        this.pieChartData.push(item[1]);
        this.pieChartColors[0].backgroundColor.push("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")")
      })
      // console.log("catory:  ", this.pieChartLabels)
      // console.log("catory number:  ", this.pieChartData)
    })
  }

}
