import { Component } from '@angular/core';
import { NavParams,ViewController,ModalController ,NavController,ActionSheetController,LoadingController,AlertController  } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private services:any;
	private count:any = 1;
  constructor(public navCtrl: NavController,
  	public actionSheetCtrl: ActionSheetController,
		public commonService:CommonService,
		// private menu: MenuController,
		private alertCtrl: AlertController,
		private loader:LoadingController,
		private modalCtrl:ModalController,) {
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