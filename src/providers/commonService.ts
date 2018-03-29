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

  getCurrentCity()
  { 
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://api.ipdata.co',options).map(res => res.json()).toPromise();
  }
getWeather(data)
  { 
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    //http:api.openweathermap.org/data/2.5/weather?q=".$city.",".$country."&APPID=da7f37c0af468057b3501d021fbd6c0f
    return this.http.get( 'http://api.openweathermap.org/data/2.5/weather?lat='+ data.latitude + '&lon=' + data.longitude + '&appid=' + "da7f37c0af468057b3501d021fbd6c0f" + '&units=imperial',options).map(res => res.json()).toPromise();
   // return this.http.get('http://api.wunderground.com/api/c6dc8e785d943109/conditions/q/AZ/'+city+'.json',options).map(res => res.json()).toPromise();
  }

  getCategory()
  {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl+'users/category' ,options).map(res => res.json())
       .toPromise();
  }

  getSearchRecords(data)
  {
    console.log(data.keywords);
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl+'users/search_records?cat='+data.category+'&loc='+data.location+'&key='+data.keywords,options).map(res => res.json())
       .toPromise();
  }

   saveimage(imagedata) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/save_image',imagedata,options).map(res => res.json())
       .toPromise();
  }


}