webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(_formBuilder, navCtrl, commonService, alertCtrl, loader) {
        this._formBuilder = _formBuilder;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.formOne = false;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this._signupFormOne = _formBuilder.group({
            //FIRTSNAME
            firstname: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //FIRTSNAME
            lastname: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //EMAIL
            email: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //PASSWORD
            password: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //ADDRESS 1
            address1: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //ADDRESS 2
            address2: [""],
            //COUNTRY
            country: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //STATE
            state: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //CITY
            city: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //ZIPCODE
            zipcode: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5),
                ])
            ],
            //PHONE
            phone: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(9),
                ])
            ],
        });
        this._signupFormTwo = _formBuilder.group({
            //BUSINESS NAME
            businessname: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //WEBSITE
            website: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //WORK EXPERIENCE
            experience: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')
                ])
            ],
            //PRIMARY SERVICE
            primaryservice: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //TYPES OF EXPERIENCE
            typeexp: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')
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
    SignupPage.prototype._toggleViewPassword = function (event) {
        event.preventDefault();
        console.info("show password");
        if (this._passwordInputType === "password") {
            this._passwordInputType = "text";
            this._passwordIcon = "eye";
        }
        else {
            this._passwordIcon = "eye-off";
            this._passwordInputType = "password";
        }
        ;
    };
    ;
    SignupPage.prototype._goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype._nextStep = function () {
        this.formOne = true;
    };
    SignupPage.prototype._prevStep = function () {
        this.formOne = false;
    };
    SignupPage.prototype._onKeyup = function () {
        console.log(this._signupFormOne);
    };
    SignupPage.prototype._submitSignup = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        if (this._signupFormOne.valid && this._signupFormTwo.valid) {
            loading.present();
            this.commonService.signupData(this._signupFormOne.value, this._signupFormTwo.value).then(function (result) {
                console.log(result);
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: result.status.toUpperCase(),
                    message: result.msg,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            }
                        }],
                });
                alert.present();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Something Wrong',
                    buttons: ['Ok'],
                });
                alert.present();
                return false;
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\pages\signup\signup.html"*/'<ion-content>\n\n	<div class="logo">\n\n		<img src="../assets/imgs/logo.png">\n\n	</div>\n\n	<h4>Welcome to myAgrow Registration!</h4>\n\n	<form [formGroup]="_signupFormOne" method="post" novalidate [hidden]="formOne">\n\n		<div class="login-spacing">\n\n			<!--FIRSTNAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Firstname</ion-label>\n\n	      <ion-input formControlName="firstname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.firstname.hasError(\'required\') && _signupFormOne.controls.firstname.touched">\n\n				<p ion-text text-wrap>Please Enter Firstname</p>\n\n			</ion-item>\n\n	    <!--FIRSTNAME END-->\n\n	    <!--LASTNAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Lastname</ion-label>\n\n	      <ion-input formControlName="lastname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.lastname.hasError(\'required\') && _signupFormOne.controls.lastname.touched">\n\n				<p ion-text text-wrap>Please Enter Lastname</p>\n\n			</ion-item>\n\n	    <!--LASTNAME END-->\n\n			<!--EMAIL START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.email.hasError(\'required\') && _signupFormOne.controls.email.touched">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.email.invalid  && _signupFormOne.controls.email.dirty && _signupFormOne.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n			<!--EMAIL END-->\n\n			<!--PASSWORD START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" [type]="_passwordInputType"></ion-input>\n\n	    </ion-item>\n\n	    <ion-icon name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.password.hasError(\'required\') && _signupFormOne.controls.password.touched">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n	    <!--PASSWORD END-->\n\n	    <!--ADDRESS 1 START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Address 1</ion-label>\n\n	      <ion-input formControlName="address1" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.address1.hasError(\'required\') && _signupFormOne.controls.address1.touched">\n\n				<p ion-text text-wrap>Please Enter Address 1</p>\n\n			</ion-item>\n\n	    <!--ADDRESS 1 END-->\n\n	    <!--ADDRESS 2 START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Address 2</ion-label>\n\n	      <ion-input formControlName="address2" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--ADDRESS 2 END-->\n\n	    <!--COUNTRY START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Country</ion-label>\n\n	      <ion-input formControlName="country" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.country.hasError(\'required\') && _signupFormOne.controls.country.touched">\n\n				<p ion-text text-wrap>Please Enter Country</p>\n\n			</ion-item>\n\n	    <!--COUNTRY END-->\n\n	    <!--STATE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">State</ion-label>\n\n	      <ion-input formControlName="state" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.state.hasError(\'required\') && _signupFormOne.controls.state.touched">\n\n				<p ion-text text-wrap>Please Enter State</p>\n\n			</ion-item>\n\n	    <!--STATE END-->\n\n	    <!--CITY START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">City</ion-label>\n\n	      <ion-input formControlName="city" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.city.hasError(\'required\') && _signupFormOne.controls.city.touched">\n\n				<p ion-text text-wrap>Please Enter City</p>\n\n			</ion-item>\n\n	    <!--CITY END-->\n\n	    <!--PHONE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Phone</ion-label>\n\n	      <ion-input formControlName="phone" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'required\') && _signupFormOne.controls.phone.touched">\n\n				<p ion-text text-wrap>Please Enter Phone</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'pattern\') && _signupFormOne.controls.phone.dirty && _signupFormOne.controls.phone.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'minlength\') && _signupFormOne.controls.phone.touched">\n\n				<p ion-text text-wrap>Minimum 9 Characters</p>\n\n			</ion-item>\n\n	    <!--PHONE END-->\n\n	    <!--ZIPCODE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Zipcode</ion-label>\n\n	      <ion-input (keyup)="_onKeyup()" formControlName="zipcode" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'required\') && _signupFormOne.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Please Enter Zipcode</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'pattern\') && _signupFormOne.controls.zipcode.dirty && _signupFormOne.controls.zipcode.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'minlength\') && _signupFormOne.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Minimum 5 Characters</p>\n\n			</ion-item>\n\n	    <!--ZIPCODE END-->\n\n			<div class="submit-btn">\n\n				<button ion-button (click)="_goBack()" type="button">\n\n					<ion-icon name="md-arrow-back"></ion-icon>&nbsp;&nbsp;Back\n\n				</button>\n\n				<button color="danger" float-right ion-button (click)="_nextStep()" [disabled]="!_signupFormOne.valid" type="button">Next &nbsp;&nbsp;<ion-icon name="md-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	  </div>	  \n\n	</form>\n\n	<form method="post"  [formGroup]="_signupFormTwo" (submit)="_submitSignup()" novalidate [hidden]="!formOne">\n\n		<div class="login-spacing">\n\n			<!--BUSINESS NAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Business Name</ion-label>\n\n	      <ion-input formControlName="businessname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.businessname.hasError(\'required\') && _signupFormTwo.controls.businessname.touched">\n\n				<p ion-text text-wrap>Please Enter Business Name</p>\n\n			</ion-item>\n\n	    <!--BUSINESS NAME END-->\n\n	    <!--Website START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Website</ion-label>\n\n	      <ion-input formControlName="website" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.website.hasError(\'required\') && _signupFormTwo.controls.website.touched">\n\n				<p ion-text text-wrap>Please Enter Website</p>\n\n			</ion-item>\n\n	    <!--Website END-->\n\n	    <!--Work Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Work Experience</ion-label>\n\n	      <ion-input formControlName="experience" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Work Experience END-->\n\n	    <!--Primary Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Primary Services</ion-label>\n\n	      <ion-input formControlName="primaryservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.primaryservice.hasError(\'required\') && _signupFormTwo.controls.primaryservice.touched">\n\n				<p ion-text text-wrap>Please Enter Primary Service</p>\n\n			</ion-item>\n\n	    <!--Primary Services END-->\n\n	    <!--Types of Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Types of Experience</ion-label>\n\n	      <ion-input formControlName="typeexp" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.typeexp.hasError(\'required\') && _signupFormTwo.controls.typeexp.touched">\n\n				<p ion-text text-wrap>Please Enter Types of Experience</p>\n\n			</ion-item>\n\n	    <!--Types of Experience END-->\n\n	    <!--Qualification START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Qualification</ion-label>\n\n	      <ion-input formControlName="qualification" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Qualification END-->\n\n	    <!--Description START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Description</ion-label>\n\n	      <ion-input formControlName="description" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Description END-->\n\n	    <!--Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Other Related Services</ion-label>\n\n	      <ion-input formControlName="otherservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Services END-->\n\n	    <div class="submit-btn">\n\n				<button ion-button (click)="_prevStep()" type="button">\n\n					<ion-icon name="md-arrow-back"></ion-icon>&nbsp;&nbsp;Back</button>\n\n				<button color="danger" ion-button float-right type="submit">Create Account</button>\n\n			</div>\n\n	  </div>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, actionSheetCtrl, commonService, 
        // private menu: MenuController,
        alertCtrl, loader, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.count = 1;
        this.getServices();
    }
    HomePage.prototype.getServices = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        loading.present();
        this.commonService.getServices().then(function (result) {
            loading.dismiss();
            console.log(result);
            _this.services = result.data;
            _this.count = 1;
            var alert = _this.alertCtrl.create({
                title: result.status.toUpperCase(),
                message: result.message,
                buttons: ['Ok']
            });
            alert.present();
        }, function (err) {
            loading.dismiss();
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Something Wrong',
                buttons: ['Ok'],
            });
            alert.present();
            return false;
        });
    };
    HomePage.prototype.openModal = function (service_id) {
        var data = { id: service_id };
        var modal = this.modalCtrl.create(ModalContentPage, data);
        modal.present();
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        this.count + 1;
        for (var i = this.count; i < this.services.length; i++) {
            this.services.push(i);
        }
        infiniteScroll.complete();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Services</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card  *ngFor="let s of services" (click)="openModal(s)">\n    <img src="http://162.144.41.156/~izaapinn/agdemo/admin/uploads/services/{{s.image_name}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{s.title}}\n        </ion-card-title>\n      <p class="description">{{s.description}}</p>\n    </ion-card-content>\n    <ion-row padding>\n      <ion-col class="address">\n          <ion-icon name=\'ios-pin\'></ion-icon>\n          {{s.address}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button  clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          More Details\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)"  *ngIf="count < 2">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

var ModalContentPage = (function () {
    function ModalContentPage(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.service = this.params.get('id');
        console.log(this.service);
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\pages\home\modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      {{service.title}}\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary"  showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list padding>\n\n		<p><ion-icon name="pin"></ion-icon> {{service.address}}</p>\n\n		<img src="http://162.144.41.156/~izaapinn/agdemo/admin/uploads/services/{{service.image_name}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n		<button type="button" block ion-button color="secondary">Price : ${{service.price}}</button>\n\n		<p>{{service.description}}</p>\n\n		<ion-item>\n\n		  Phone\n\n		  <ion-badge color="dark" item-end>{{service.phone}}</ion-badge>\n\n		</ion-item>\n\n		<ion-item>\n\n		  Status\n\n		  <ion-badge item-end>{{service.status}}</ion-badge>\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n  <!--<ion-segment [(ngModel)]="desc">\n\n    <ion-segment-button value="add">\n\n      ADD. Info\n\n    </ion-segment-button>\n\n    <ion-segment-button value="products">\n\n      Related Products\n\n    </ion-segment-button>\n\n    <ion-segment-button value="reviews">\n\n      Reviews\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="desc">\n\n  <ion-list *ngSwitchCase="\'add\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-puppy-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Ruby</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'products\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-kitten-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Luna</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'reviews\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-kitten-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Luna</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>-->\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\pages\home\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsPage = (function () {
    function EventsPage(navCtrl, actionSheetCtrl, commonService, 
        // private menu: MenuController,
        alertCtrl, loader, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.getEvents();
    }
    EventsPage.prototype.getEvents = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        loading.present();
        this.commonService.getEvents().then(function (result) {
            loading.dismiss();
            console.log(result);
            _this.events = result.data;
        }, function (err) {
            loading.dismiss();
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Something Wrong',
                buttons: ['Ok'],
            });
            alert.present();
            return false;
        });
    };
    EventsPage.prototype.openModal = function (event_id) {
        var data = { id: event_id };
        var modal = this.modalCtrl.create(EventModalContentPage, data);
        modal.present();
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\pages\events\events.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Events</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n	  <ion-item *ngFor="let e of events" (click)="openModal(e)">\n\n	    <ion-thumbnail item-start>\n\n	      <img src="http://162.144.41.156/~izaapinn/agdemo/assets/img/events/{{e.event_image}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n	    </ion-thumbnail>\n\n	    <h2>{{e.title}}</h2>\n\n	    <p><ion-icon name="calendar"></ion-icon> {{e.event_start_date}}</p>\n\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\pages\events\events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], EventsPage);
    return EventsPage;
}());

var EventModalContentPage = (function () {
    function EventModalContentPage(params, viewCtrl, iab) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.event = this.params.get('id');
        console.log(this.event);
        var mapOptions = {
            camera: {
                target: {
                    lat: 13.0827,
                    lng: 80.2707
                },
                zoom: 18,
                tilt: 30
            }
        };
        var element = document.getElementById('map');
        this.map = __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */].create(element, mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            // Now you can use all methods safely.
            _this.map.addMarker({
                icon: 'red',
                visible: true,
                title: _this.event.location,
                animation: 'DROP',
                position: {
                    lat: 13.0827,
                    lng: 80.2707
                }
            })
                .then(function (marker) {
            });
        });
    }
    EventModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EventModalContentPage.prototype.openCalendar = function (event) {
        var title = event.title;
        var desc = event.description;
        var from_date = event.from_date;
        var to_date = event.to_date;
        var location = event.location;
        from_date = from_date.replace(" 00:00:00", "");
        to_date = to_date.replace(" 00:00:00", "");
        console.log(from_date.replace("-", ""));
        var url = "https://calendar.google.com/calendar/r/eventedit?text=" + title.replace(/\s/g, "+");
        url += "&dates=" + from_date.replace(/-/g, "") + "/" + to_date.replace(/-/g, "");
        url += "&details=" + desc.replace(/\s/g, "+") + "!&location=" + location.replace(/\s/g, "+") + "&sf=true&output=xml";
        console.log(url);
        this.iab.create(url);
        // browser.open();
    };
    EventModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\pages\events\modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      {{event.title}}\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary"  showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n\n    <p><ion-icon name="pin"></ion-icon> {{event.location}}</p>\n\n    <img src="http://162.144.41.156/~izaapinn/agdemo/assets/img/events/{{event.event_image}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n    <p>{{event.description}}</p>\n\n    <p>From Date <span class="float-right bold">{{event.event_start_date}}</span></p>\n\n    <p>To Date <span class="float-right bold">{{event.event_end_date}}</span></p>\n\n    <button color="danger" ion-button block type="button" (click)="openCalendar(event)">Add to Calendar</button>\n\n  </ion-list>\n\n  <div #map id="map" style="width: 100%;height: 30%;"></div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\pages\events\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], EventModalContentPage);
    return EventModalContentPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexPatterns; });
var regexPatterns = {
    nameStrings: /^[a-zA-Z]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/,
    numbersOnly: /^\d+$/
};

/* nameStrings Regex - Accepts english characters only, lowercase and uppercase
For all unicode characters use - /\p{L}/
Source: https://stackoverflow.com/questions/3617797/regex-to-match-only-letters */
/* email Regex
Source: http://emailregex.com/  - Javascript example*/
/* password Regex - Restrict passwords to:
https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
Characters: 1 Upper, 1 Lower, 1 Digit at minimum
Length: 6 characters
Start : Any
*/
/* phoneNumber - numbers Only
 */ 
//# sourceMappingURL=regexPatterns.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_regexPatterns__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CommonService } from '../../providers/commonService';



var LoginPage = (function () {
    function LoginPage(_formBuilder, navCtrl) {
        this._formBuilder = _formBuilder;
        this.navCtrl = navCtrl;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this._loginForm = _formBuilder.group({
            //EMAIL
            email: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__validators_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //PASSWORD
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    // ,Validators.pattern(regexPatterns.password),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)
                ])
            ]
        });
    }
    LoginPage.prototype._toggleViewPassword = function (event) {
        event.preventDefault();
        console.info("show password");
        if (this._passwordInputType === "password") {
            this._passwordInputType = "text";
            this._passwordIcon = "eye";
        }
        else {
            this._passwordIcon = "eye-off";
            this._passwordInputType = "password";
        }
        ;
    };
    ;
    LoginPage.prototype._gotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    ;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\pages\login\login.html"*/'<ion-content>\n\n	<div class="logo">\n\n		<img src="../assets/imgs/logo.png">\n\n	</div>\n\n	<form [formGroup]="_loginForm" method="post" novalidate>\n\n		<div class="login-spacing">\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email" [class.invalid]="_loginForm.controls.email.invalid && _loginForm.controls.dirty"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.hasError(\'required\') && _loginForm.controls.email.touched">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.invalid  && _loginForm.controls.email.dirty && _loginForm.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" [type]="_passwordInputType" ></ion-input>\n\n	    </ion-item>\n\n	    <ion-icon name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.hasError(\'required\') && _loginForm.controls.password.touched">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.invalid  && _loginForm.controls.password.dirty && _loginForm.controls.password.value!=\'\'">\n\n				<p ion-text text-wrap>Please enter atleast 6 characters.</p>\n\n			</ion-item>\n\n	    <p text-right>Forgot Password?</p>\n\n	    <div class="submit-btn">\n\n				<button color="danger" ion-button block [disabled]="!_loginForm.valid" type="submit">Login</button>\n\n			</div>\n\n			<div class="submit-btn">\n\n				<button color="dark" ion-button block (click)="_gotoSignup()" type="button">Signup</button>\n\n			</div>\n\n	  </div>\n\n	</form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_commonService__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["b" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventModalContentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["b" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventModalContentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_commonService__["a" /* CommonService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_events_events__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-cog' },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_6__pages_events_events__["b" /* EventsPage */], icon: 'ios-flag' },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'ios-log-in' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'ios-power' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\myagrow\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src="../assets/imgs/logo.png">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\myagrow\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "http://162.144.41.156/~izaapinn/agdemo/Webservice/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var apiUrl = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */];
var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.getServices = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'users/services', options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.getEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'users/events', options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.signupData = function (form1, form2) {
        var data = { form1: form1, form2: form2 };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/signup', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=commonService.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map