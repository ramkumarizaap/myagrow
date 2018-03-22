import { Component } from '@angular/core';
import { MenuController,NavParams,ViewController,ModalController ,NavController,ActionSheetController,LoadingController,AlertController  } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import {  OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	private services:any;
	private count:any = 1;
  public city;
  public weather;
  public _searchForm:FormGroup;
  public category: any;
  constructor(public navCtrl: NavController,
  	public actionSheetCtrl: ActionSheetController,
		public commonService:CommonService,
		private menu: MenuController,
		private alertCtrl: AlertController,
		private loader:LoadingController,
		private modalCtrl:ModalController,
    private platform: Platform, 
    private geolocation: Geolocation) {
   
    this.commonService.getCurrentCity().then((result)=> {
     //console.log(result);
      this.city = result.city;
      this.commonService.getWeather(result).then((weather)=> {
      // console.log(weather);
        this.weather = (weather.main.temp-32)*5/9;
      });
    });
    this.menu.enable(true);
  	this.getServices();
   
  }

  getServices()
  {
  	let loading = this.loader.create({
        content: 'Loading...'
      });
  	loading.present();
		this.commonService.getServices().then((result) => {
  		loading.dismiss();
  		console.log(result);
  		this.services = result.data;
  		this.count = 1;
  		let alert = this.alertCtrl.create({
          title: result.status.toUpperCase(),
          message: result.message,
          buttons: ['Ok']          
        });
      if(result.status=="error")
  		alert.present();

  	},(err) => {
        loading.dismiss();
        console.log(err);
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'Something Wrong',
          buttons: ['Ok'],
        });
        alert.present();
        return false;
      });
  }
  openModal(service_id)
  {
  	var data = {id:service_id};
  	let modal = this.modalCtrl.create(ModalContentPage,data);
		modal.present();
  }
  doInfinite(infiniteScroll)
  {
  	this.count + 1;
  	for (let i = this.count; i < this.services.length; i++) {
        this.services.push( i );
      }
       infiniteScroll.complete();
  }
   
   ngOnInit() 
  {
     this.commonService.getCategory().then((result)=>{
         
        console.log(result.category);
      this.category = result.category;    
 
     }).catch((err)=>{
       let alert = this.alertCtrl.create({
          title:'Error',
          message: 'Failed to fetch data',
          buttons: ['Ok'],
          });
          alert.present();
     });

      this._searchForm = new FormGroup({
    category: new FormControl(''),
    location: new FormControl(''),
    keywords: new FormControl('')
    });
  }

    search_category()
   {
     let load=this.loader.create({
       content:"Please Wait"
     });
     load.present();
    //console.log(this._searchForm.value);
    this.commonService.getSearchRecords(this._searchForm.value).then((result)=>{
         
        console.log(result);
        setTimeout(()=>{
          load.dismiss();
        this.services = result.retdata;

        },3000);
       // this.viewCtrl.dismiss();

     }).catch((err)=>{
       load.dismiss();
       let alert = this.alertCtrl.create({
          title:'Error',
          message: 'Failed to fetch data',
          buttons: ['Ok'],
          });
          alert.present();
     });

  }

}

@Component({
	templateUrl: 'modal.html'
})
export class ModalContentPage{
		private service: any;
	  constructor(public params: NavParams,public viewCtrl: ViewController) {
			this.service = this.params.get('id');
			console.log(this.service);
  }

  dismiss() {
    this.viewCtrl.dismiss();
	}
}