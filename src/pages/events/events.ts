import { Component } from '@angular/core';
import { Platform,MenuController,NavParams,ViewController,ModalController ,NavController,ActionSheetController,LoadingController,AlertController  } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleMaps, GoogleMap, GoogleMapOptions,GoogleMapsEvent} from '@ionic-native/google-maps';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
	private events:any;
  constructor(public navCtrl: NavController,
  	public actionSheetCtrl: ActionSheetController,
		public commonService:CommonService,
		private menu: MenuController,
		private alertCtrl: AlertController,
		private loader:LoadingController,
		private modalCtrl:ModalController) {
    this.navCtrl =  navCtrl;
    this.menu = menu;
    this.menu.enable(true, 'myMenu');
  	this.getEvents();
   
  }

  private getEvents():void
  {
  	let loading = this.loader.create({
        content: 'Loading...'
      });
  	loading.present();
  	this.commonService.getEvents().then((result) => {
  		loading.dismiss();
  		console.log(result);
  		this.events = result.data;
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
  openModal(event_id)
  {
  	var data = {id:event_id};
  	this.navCtrl.push(EventModalContentPage,data);
  }
  
 }

@Component({
	selector: 'page-events',
	templateUrl: 'modal.html'
})
export class EventModalContentPage{
		private event: any;
		private map: GoogleMap;
	  constructor(public platform: Platform,public params: NavParams,public viewCtrl: ViewController,private iab: InAppBrowser,
      private googleMaps: GoogleMaps) {
			this.event = this.params.get('id');
			console.log("Events: "+this.event);
      setTimeout(() => {
        this.loadMap(this.event);
      }, 2000);
  }
  loadMap(e)
  {
    console.log(e);
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: e.latitude,
          lng: e.longitude
        },
        zoom: 10,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        this.map.addMarker({
            title: e.title,
            icon: 'red',
            animation: 'DROP',
            position: {
              lat: e.latitude,
              lng: e.longitude
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                // alert('clicked');
              });
          });

      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
	}



	openCalendar(event)
	{
		var title = event.title;
		var desc = event.description;
		var from_date = event.from_date;
		var to_date = event.to_date;
		var location = event.location;
		from_date = from_date.replace(" 00:00:00","");
		to_date = to_date.replace(" 00:00:00","");
		console.log(from_date.replace("-",""));
		var url = "https://calendar.google.com/calendar/r/eventedit?text="+title.replace(/\s/g,"+");
		url +="&dates="+from_date.replace(/-/g,"")+"/"+to_date.replace(/-/g,"");
		url +="&details="+desc.replace(/\s/g,"+")+"!&location="+location.replace(/\s/g,"+")+"&sf=true&output=xml";
		console.log(url);
		this.iab.create(url);
		// browser.open();
	}
}