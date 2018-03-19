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
  getCountry() {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl+'users/country' ,options).map(res => res.json())
       .toPromise();
  }
  signupData(form1,form2) {
    var data = {form1:form1,form2:form2};
    console.log(data);
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/signup',data ,options).map(res => res.json())
       .toPromise();
  }
  login(data) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/login',data ,options).map(res => res.json())
       .toPromise();
  }
  getProfileDetails(id) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl+'users/select_profile?id='+id ,options).map(res => res.json())
       .toPromise();
  }
  saveProfile(data) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/profile',data ,options).map(res => res.json())
       .toPromise();
  }
}