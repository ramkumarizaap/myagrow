import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { CommonService } from '../../providers/commonService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexPatterns } from '../../validators/regexPatterns';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	private _loginForm: FormGroup;
	private _passwordInputType: string = "password";
  private _passwordIcon : string = "eye-off";
  constructor(private _formBuilder: FormBuilder,public navCtrl: NavController) {
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
}