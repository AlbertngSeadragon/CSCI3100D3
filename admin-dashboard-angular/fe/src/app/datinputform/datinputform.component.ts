import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetdatabaseapiService } from '../getdatabaseapi.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-datinputform',
  templateUrl: './datinputform.component.html',
  styleUrls: ['./datinputform.component.scss']
})
export class DatinputformComponent implements OnInit {

  subscription: Subscription;

  Currentyear: number = new Date().getFullYear();
  Currentmonth: number = new Date().getMonth();
  Currentday: number = new Date().getUTCDate();
  yearmonthday;
  constructor(private formBuilder: FormBuilder, private apiService: GetdatabaseapiService) {
    this.yearmonthday = this.formBuilder.group({
      year: this.Currentyear,
      month: this.Currentmonth + 1, // Since getMonth() returns month from 0-11 not 1-12
      day: this.Currentday
    });
  }

  onSubmit(dateData) {
    console.warn('Your date has been submitted', dateData);
    if (dateData.month == "" || dateData.month == null) {
      dateData.month = '%'
    }
    if (dateData.day == "" || dateData.day == null) {
      dateData.day = '%'
    }
    console.warn('Update', dateData);
    // Process checkout data here
    this.apiService.PostMessage(dateData).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error);
    })
    // this.yearmonthday.reset({
    //   year: this.Currentyear,
    //   month: '',
    //   day: ''
    // })
  }
  reset() {
    this.yearmonthday = this.formBuilder.group({
      year: this.Currentyear,
      month: this.Currentmonth + 1, // Since getMonth() returns month from 0-11 not 1-12
      day: this.Currentday
      // month: '%', // Since getMonth() returns month from 0-11 not 1-12
      // day: '%'
    });
  }

  ngOnInit(): void {
    const source = interval(60000);
    this.subscription = source.subscribe(val => {
      this.apiService.PostMessage({
        year: this.Currentyear,
        month: this.Currentmonth + 1, // Since getMonth() returns month from 0-11 not 1-12
        day: this.Currentday
        // month: '%', // Since getMonth() returns month from 0-11 not 1-12
        // day: '%'
      }).subscribe(response => {
        console.log(response)
      }, error => {
        console.log(error);
      });
      this.reset()
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
