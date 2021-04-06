import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { GetdatabaseapiService } from '../../getdatabaseapi.service';

@Component({
  selector: 'app-catergory-doughnut-chart',
  templateUrl: './catergory-doughnut-chart.component.html',
  styleUrls: ['./catergory-doughnut-chart.component.scss']
})
export class CatergoryDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private readonly apiService: GetdatabaseapiService) { }

  // getdata(){
  //   let body = {
  //     "year": 2020,
  //     "month": "9",
  //     "day": "11"
  //   };
  //   let url = "http://127.0.0.1:5000/getchartdata";

  //   this.http.post<any>(url, body).subscribe(res => {
  //     console.log(res);
  //   })
  // }
  ngOnInit() {
    // this.getdata()
    this.apiService.$shared.subscribe(data => {
      //console.log("From the api to chart", data)
      this.doughnutChartData = [];
      this.doughnutChartLabels = [];
      data.NonSEOYearMonthDay.forEach(item => {
        this.doughnutChartLabels.push(item[0].trim());
        this.doughnutChartData.push(item[1]);
      })
      // console.log("catory:  ", this.pieChartLabels)
      // console.log("catory number:  ", this.pieChartData)
    }) 
  }

}
