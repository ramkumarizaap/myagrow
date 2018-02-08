import { Component } from '@angular/core';
import { NavController,LoadingController,AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexPatterns } from '../../validators/regexPatterns';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
	private _signupFormOne:FormGroup;
	private _signupForm:any;
	private _signupFormTwo:FormGroup;
	private formOne:boolean = false;
	private _passwordInputType: string = "password";
  private _passwordIcon : string = "eye-off";
	 constructor(
	 		private _formBuilder: FormBuilder,public navCtrl: NavController,
	 		public commonService: CommonService,private alertCtrl: AlertController,
		private loader:LoadingController) {
	 	this._signupFormOne = _formBuilder.group({
	 		//FIRTSNAME
      firstname: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //FIRTSNAME
      lastname: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //EMAIL
      email: ["",
        Validators.compose([
          Validators.required,Validators.pattern(regexPatterns.email)
        ])
      ],
      //PASSWORD
      password: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //ADDRESS 1
      address1: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //ADDRESS 2
      address2: [""],
      //COUNTRY
      country: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //STATE
      state: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //CITY
      city: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //ZIPCODE
      zipcode: ["",
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(5),
        ])
      ],
      //PHONE
      phone: ["",
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(9),
        ])
      ],
    });
    this._signupFormTwo = _formBuilder.group({
	 		//BUSINESS NAME
      businessname: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //WEBSITE
      website: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //WORK EXPERIENCE
      experience: ["",
      	Validators.compose([
      		Validators.pattern('[0-9]*')
      	])
      ],
      //PRIMARY SERVICE
      primaryservice: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      //TYPES OF EXPERIENCE
      typeexp: ["",
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*')
        ])
      ],
      //QUALIFICATON
      qualification: [""],
      //DESCRIPTION
      description: [""],
      //OTHER RELATED SERVICE
      otherservice: [""]
    });
	 }

	 private _toggleViewPassword(event: MouseEvent) {
    event.preventDefault();
    console.info("show password");
    if (this._passwordInputType === "password") {
      this._passwordInputType = "text";
      this._passwordIcon = "eye";
    } else {
      this._passwordIcon = "eye-off";
      this._passwordInputType = "password";
    };
  };
	 
	  private _goBack():void{
	 	this.navCtrl.push(LoginPage);
	 }
	 private _nextStep():void{
	 	this.formOne = true;
	 }
	 private _prevStep():void{
	 	this.formOne = false;
	 }

	 private _onKeyup():void{
	 	console.log(this._signupFormOne);
	 }

	 _submitSignup(){
	 	let loading = this.loader.create({
        content: 'Loading...'
      });
	 	if(this._signupFormOne.valid && this._signupFormTwo.valid)
	 	{
	  	loading.present();
		 	this.commonService.signupData(this._signupFormOne.value,this._signupFormTwo.value).then((result) => {
		 		console.log(result);
		 		loading.dismiss();
		 			let alert = this.alertCtrl.create({
          title: result.status.toUpperCase(),
          message: result.msg,
          buttons: [{
          		text:'Ok',
          		handler:()=>{
          			this.navCtrl.push(LoginPage);
          		}
          	}],
	        });
	        alert.present();
	  	},(err) => {
	  		console.log(err);
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
	 }
}