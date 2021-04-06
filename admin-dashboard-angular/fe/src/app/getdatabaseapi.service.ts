import { HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GetdatabaseapiService {

  $shared = new EventEmitter();
  sharedData

  private api = 'http://127.0.0.1:5000/getchartdata'
  constructor(private http: HttpClient) { }

  // getdata(){
  //   let body = {
  //     "year": 2020,
  //     "month": "9",
  //     "day": "11"
  //   };

  //   this.http.post<any>(this.api, body).subscribe(res => {
  //     console.log(res);
  //   })
  // }
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
