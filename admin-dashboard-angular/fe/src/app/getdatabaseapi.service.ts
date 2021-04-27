import { HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';


// API end pot for the event register to get the api and past to the chart
@Injectable({
  providedIn: 'root'
})
export class GetdatabaseapiService {

  $shared = new EventEmitter();
  sharedData

  private api = 'http://34.207.154.183/getchartdata'
  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post<any>(this.api, input).pipe(
      map(
        (response) => {
          if (response) {
            this.sharedData = response
            // console.log("from getdatabaseapi service", this.sharedData)
            this.$shared.emit(this.sharedData);
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
