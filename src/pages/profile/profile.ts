import { Component } from '@angular/core';
import { NavController,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexPatterns } from '../../validators/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	public _profileForm:FormGroup;
	public country;
	public state;
	public profile={id:'',first_name:'',last_name:'',address:'',address2:'',city:'',state:'',country:'',email:'',password:'',zip:'',phone:'',country_id:1,state_id:1};
	public user;
	constructor(public commonService:CommonService,public globalVars:GlobalVars,public alertCtrl:AlertController,
		public loader:LoadingController,public _formBuilder:FormBuilder,public nav:NavController)
	{
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
		this.commonService.getProfileDetails(this.user.id).then((res)=>{
			let load = this.loader.create({
				content:'Please Wait...'
			});
			this.profile = res.data;
			load.present();
			setTimeout(()=>{
				load.dismiss();
				this.profileLoadForm();
			},3000);

		})
		.catch((err)=>{
			let error = this.alertCtrl.create({
				title:'Error',
				message:'Unable to fetch user profile',
				buttons:['OK']
			});
			error.present();
			return false;
		})
	}

	profileLoadForm()
	{
		this._profileForm = this._formBuilder.group({
			id:[this.profile.id],
			firstname:[this.profile.first_name, Validators.compose([Validators.required])],
			lastname:[this.profile.last_name, Validators.compose([Validators.required])],
			phone:[this.profile.phone, Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(9),])],
			email:[this.profile.email, Validators.compose([Validators.required,Validators.pattern(regexPatterns.email)])],
			password:[""],
			city:[this.profile.city,Validators.compose([Validators.required])],
			state:[this.profile.state_id, Validators.compose([Validators.required])],
			country:[this.profile.country_id, Validators.compose([Validators.required])],
			address1:[this.profile.address, Validators.compose([Validators.required])],
			address2:[this.profile.address2, Validators.compose([Validators.required])],
			zipcode:[this.profile.zip, Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(5),])],
		});
	}

	_saveProfile()
	{
		console.log(this._profileForm.value);
		let load = this.loader.create({
			content:'Please Wait...'
		});
		load.present();
		if(this._profileForm.valid)
		{
			this.commonService.saveProfile(this._profileForm.value).then((res)=>{
				load.dismiss();
				if(res.status=="success")
				{
					let success = this.alertCtrl.create({
						title:'Success',
						message:'Profile updated successfully.',
						buttons:[{
							text:'OK',
							handler:()=>{
								this.nav.setRoot(ProfilePage);
							}
						}]
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
}