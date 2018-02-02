import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
let apiUrl = SERVER_URL;

@Injectable()
export class CommonService {

  constructor(public http : Http) {
  }
 getServices() {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl+'users/services' ,options).map(res => res.json())
       .toPromise();
  }
  getEvents() {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl+'users/events' ,options).map(res => res.json())
       .toPromise();
  }
}