import { Component } from '@angular/core';
import { NavController,MenuController,ActionSheetController,LoadingController,AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import {  OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { regexPatterns } from '../../validators/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {
	public _profileForm:FormGroup;
	public _profileForm2:FormGroup;
	public _profileForm3:FormGroup;
	public country;
	public count = 1;
	public user_photo:Array<any> = [];
	public state;
	public type:string='con_info';
	public profile={id:'',first_name:'',last_name:'',address:'',address2:'',city:'',state:'',country:'',email:'',password:'',zip:'',phone:'',country_id:1,state_id:1};
	public profile2={id:'',company_name:'',website:'',experience:'',primary_service_category:'',experience_type:'',qualification:'',cus_description:'',other_related_category:''};
	public profile3:any={id:'',seller_id:''};
	public user;
	constructor(public commonService:CommonService,public globalVars:GlobalVars,public alertCtrl:AlertController,
		public loader:LoadingController,public _formBuilder:FormBuilder,public nav:NavController,private camera: Camera,public actionSheetCtrl: ActionSheetController)
	{
      
   }

  ngOnInit() {
  	
		this.commonService.getCountry().then((res)=>{
	         this.country = res.country.data;
	         this.state = res.state.data;
	         console.log(res);
	     }).catch((err)=>{
	       let alert = this.alertCtrl.create({
	          title:'Error',
	          message: 'Failed to fetch data',
	          buttons: ['Ok'],
	          });
	          alert.present();
	     });

		this.user = this.globalVars.getUserdata();
		this.profileLoadForm();
		this.profileLoadForm2();
		this.profileLoadForm3();

		let load = this.loader.create({
				content:'Please Wait...'
		});

		load.present();

		this.commonService.getProfileDetails(this.user.id).then((res)=>{
			
			console.log(res);
			this.profile = res.profile;
			this.profile2 = res.services;
			this.profile3 = res.photos;
			this.profileLoadForm();
			this.profileLoadForm2();

			load.dismiss();

		})
		.catch((err)=>{
			let error = this.alertCtrl.create({
				title:'Error',
				message:'Unable to fetch user profile',
				buttons:['OK']
			});
			error.present();
			return false;
		});
	}

	profileLoadForm()
	{
		this._profileForm = this._formBuilder.group({
			id:[this.profile.id],
			firstname:[this.profile.first_name, Validators.compose([Validators.required])],
			lastname:[this.profile.last_name, Validators.compose([Validators.required])],
			phone:[this.profile.phone, Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9)])],
			email:[this.profile.email, Validators.compose([Validators.required,Validators.pattern(regexPatterns.email)])],
			password:[""],
			city:[this.profile.city,Validators.compose([Validators.required])],
			state:[this.profile.state_id, Validators.compose([Validators.required])],
			country:[this.profile.country_id, Validators.compose([Validators.required])],
			address1:[this.profile.address, Validators.compose([Validators.required])],
			address2:[this.profile.address2, Validators.compose([Validators.required])],
			zipcode:[this.profile.zip, Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(5)])],
		});
	}
     
profileLoadForm2() 
{
   this._profileForm2 = this._formBuilder.group({
      seller_id:[this.profile2.id],
	  businessname:[this.profile2.company_name, Validators.compose([Validators.required])],
      website:[this.profile2.website, Validators.compose([Validators.required])],
      experience:[this.profile2.experience,""],
      primaryservice:[this.profile2.primary_service_category, Validators.compose([Validators.required])],
      typeexp:[this.profile2.experience_type, Validators.compose([Validators.required])],
      qualification:[this.profile2.qualification,""],
      description:[this.profile2.cus_description,""],
      otherservice:[this.profile2.other_related_category,""],
    });
    
}
profileLoadForm3() 
{
   this._profileForm3 = this._formBuilder.group({
   	  seller_id:[this.profile2.id],
      photo:this._formBuilder.array([])
    });
    
}

	_saveProfile(type)
	{
		let formdata:any;

		if(type=='profile')
			formdata = this._profileForm;

		if(type=='service')
			formdata = this._profileForm2;

		// if(type=='photo')
		// 	formdata = this._profileForm3;
		
		if(formdata.valid)
		{

			let load = this.loader.create({
				content:'Please Wait...'
			});

			load.present();

			formdata.value['type'] = type;

			this.commonService.saveProfile(formdata.value).then((res)=>{
				load.dismiss();
				if(res.status=="success")
				{
					let success = this.alertCtrl.create({
						title:'Success',
						message:'Profile updated successfully.',
						buttons:['OK']
					});
					success.present();
				}
			})
			.catch((err) => {
				load.dismiss();
				let error = this.alertCtrl.create({
				title:'Error',
				message:err,
				buttons:['OK']
			});
			error.present();
			return false;
			});
		}
	}

  // services_update()
  // {
  // 	if(this._profileForm2.valid)
		// {
		// 	console.log(this._profileForm2.value);
		// 		let load = this.loader.create({
		// 			content:'Please Wait...'
		// 		});
		// 		load.present();
		// 	this.commonService.saveProfileServices(this._profileForm2.value).then((res)=>{
		// 		load.dismiss();
		// 		if(res.status=="success")
		// 		{
		// 			let success = this.alertCtrl.create({
		// 				title:'Success',
		// 				message:'Profile updated successfully.',
		// 				buttons:['OK']
		// 			});
		// 			success.present();
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		load.dismiss();
		// 		let error = this.alertCtrl.create({
		// 		title:'Error',
		// 		message:err,
		// 		buttons:['OK']
		// 	});
		// 	error.present();
		// 	return false;
		// 	});
		// }
  // }


  CaptureImage()
  {
  	let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose your profile photo',
      buttons: [
        {
          text: 'Take a Picture',
          handler: () => {
          	// this.updateURI();
           this._gotoCamera(this.camera.PictureSourceType.CAMERA);
          }
        },{
          text: 'Choose from Album',
          handler: () => {
            this._gotoCamera(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  _removePhoto(i)
  {
  	this.user_photo.splice(i,1);
  	this._profileForm3.value.photo.splice(i,1);
  }


  _gotoCamera(type)
  {
    const options: CameraOptions = {
        quality: 70,
        // targetWidth: 300,
        // targetHeight: 300,
        sourceType: type,
        // allowEdit: false,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: false
      }
      this.camera.getPicture(options).then((imageData) => {
      	console.log(imageData);
          this.updateURI(imageData);
        })
      .catch((err) => {
        let error = this.alertCtrl.create({
          title:'Error',
          message:err,
          buttons:['OK']
        });
        error.present();
        return false;
      });
  }
  updateURI(imageData:any='')
  {
  	// this.count++;
  	// this._profileForm3.value.photo.push(this.count);
   //  this.user_photo.push(this.count);
    this._profileForm3.value.photo.push('data:image/jpeg;base64,' + imageData);
    this.user_photo.push('data:image/jpeg;base64,' + imageData);
  	// alert("Img :" + JSON.stringify(this._profileForm3.value));
   // console.log(this._profileForm3.value);
  }

 uploadImage(imageData)
 {
    
    if(this._profileForm3.value.photo=='')
    {
    	return false;
    }
 	
 	let load = this.loader.create({
				content:'Please Wait...'
			});

			load.present();

   this.commonService.saveimage(this._profileForm3.value).then((res)=>{
   	            //console.log(res);
   	          //  alert("Res :"+JSON.stringify(res));
				load.dismiss();
				if(res.status=="success")
				{
                  let success = this.alertCtrl.create({
		          title: 'Success',
		          message: 'Image uploaded successfully.',
		          buttons: [{
		              text:'Ok',
		              handler:()=>{
		                this.nav.setRoot(ProfilePage);
		              }
		            }],
		          });
		          success.present();

				// 	let success = this.alertCtrl.create({

				// 		title:'Success',
				// 		message:'Image uploaded successfully.',
				// 		buttons:['OK']
				// 	});
				// 	success.present();
				// this.profileLoadForm3();
				}
			})
			.catch((err) => {
				load.dismiss();
				let error = this.alertCtrl.create({
				title:'Error',
				message:err,
				buttons:['OK']
			});
			error.present();
			return false;
			});
  
 }

}