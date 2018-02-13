import { Component } from '@angular/core';
import { NavController,MenuController,LoadingController,AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexPatterns } from '../../validators/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { SignupPage } from '../signup/signup';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	private _loginForm: FormGroup;
	private _passwordInputType: string = "password";
  private _passwordIcon : string = "eye-off";
  constructor(
      private _formBuilder: FormBuilder,
      public navCtrl: NavController,
      private menu: MenuController,
      private alertCtrl: AlertController,
      private loader:LoadingController,
      public globalvars:GlobalVars,
      public commonService:CommonService) {
        this.navCtrl =  navCtrl;
        this.menu = menu;
        this.menu.enable(false, 'myMenu');
      if(this.globalvars.getUserdata())
        this.navCtrl.setRoot(EventsPage);

  	this._loginForm = _formBuilder.group({
      //EMAIL
      email: ["",
        Validators.compose([
          Validators.required,Validators.pattern(regexPatterns.email)
        ])
      ],
      //PASSWORD
      password: ["", Validators.compose([
          // ,Validators.pattern(regexPatterns.password),
          Validators.required,
          Validators.minLength(6)
        ])
      ]
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

  private _gotoSignup():void{
    this.navCtrl.push(SignupPage);
  };

  private _login():void
  {
    if(this._loginForm.valid)
    {
      let loading = this.loader.create({
        content: 'Loading...'
      });
      loading.present();
      this.commonService.login(this._loginForm.value).then((result) => {
        console.log(result);
        loading.dismiss();
        if(result.status=='success')
        {
          this.globalvars.setUserdata(JSON.stringify(result.data));
          this.navCtrl.setRoot(EventsPage);
        }
        else{
          let alert = this.alertCtrl.create({
          title: 'Error',
          message: result.msg,
          buttons: ['Ok'],
        });
        alert.present();
        return false;
        }
      },(err) => {
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
