webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(32);
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
    function HomePage(navCtrl, actionSheetCtrl, commonService, menu, alertCtrl, loader, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.commonService = commonService;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.count = 1;
        this.menu.enable(true);
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
            if (result.status == "error")
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Services</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card  *ngFor="let s of services" (click)="openModal(s)">\n    <img src="http://162.144.41.156/~izaapinn/agdemo/admin/uploads/services/{{s.image_name}}" onError="this.src=\'assets/imgs/dummy_img.jpg\';"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{s.title}}\n        </ion-card-title>\n      <p class="description">{{s.description}}</p>\n    </ion-card-content>\n    <ion-row padding>\n      <ion-col class="address">\n          <ion-icon name=\'ios-pin\'></ion-icon>\n          {{s.address}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button  clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          More Details\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)"  *ngIf="count < 2">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\home\modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      {{service.title}}\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary"  showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list padding>\n\n		<p><ion-icon name="pin"></ion-icon> {{service.address}}</p>\n\n		<img src="http://162.144.41.156/~izaapinn/agdemo/admin/uploads/services/{{service.image_name}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n		<button type="button" block ion-button color="secondary">Price : ${{service.price}}</button>\n\n		<p>{{service.description}}</p>\n\n		<ion-item>\n\n		  Phone\n\n		  <ion-badge color="dark" item-end>{{service.phone}}</ion-badge>\n\n		</ion-item>\n\n		<ion-item>\n\n		  Status\n\n		  <ion-badge item-end>{{service.status}}</ion-badge>\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n  <!--<ion-segment [(ngModel)]="desc">\n\n    <ion-segment-button value="add">\n\n      ADD. Info\n\n    </ion-segment-button>\n\n    <ion-segment-button value="products">\n\n      Related Products\n\n    </ion-segment-button>\n\n    <ion-segment-button value="reviews">\n\n      Reviews\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="desc">\n\n  <ion-list *ngSwitchCase="\'add\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-puppy-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Ruby</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'products\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-kitten-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Luna</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'reviews\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-kitten-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Luna</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>-->\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\home\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(_formBuilder, navCtrl, menu, alertCtrl, loader, globalvars, commonService) {
        this._formBuilder = _formBuilder;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.globalvars = globalvars;
        this.commonService = commonService;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.menu.enable(false, 'myMenu');
        if (this.globalvars.getUserdata())
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        this._loginForm = _formBuilder.group({
            //EMAIL
            email: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //PASSWORD
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    // ,Validators.pattern(regexPatterns.password),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    ;
    LoginPage.prototype._login = function () {
        var _this = this;
        if (this._loginForm.valid) {
            var loading_1 = this.loader.create({
                content: 'Loading...'
            });
            loading_1.present();
            this.commonService.login(this._loginForm.value).then(function (result) {
                console.log(result);
                loading_1.dismiss();
                if (result.status == 'success') {
                    _this.globalvars.setUserdata(JSON.stringify(result.data));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        message: result.msg,
                        buttons: ['Ok'],
                    });
                    alert_1.present();
                    return false;
                }
            }, function (err) {
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\login\login.html"*/'<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/imgs/logo.png">\n\n	</div>\n\n	<form [formGroup]="_loginForm" (submit)="_login()" method="post" novalidate>\n\n		<div class="login-spacing">\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email" [class.invalid]="_loginForm.controls.email.invalid && _loginForm.controls.dirty"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.hasError(\'required\') && _loginForm.controls.email.touched">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.invalid  && _loginForm.controls.email.dirty && _loginForm.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" [type]="_passwordInputType" ></ion-input>\n\n	    </ion-item>\n\n	    <ion-icon name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.hasError(\'required\') && _loginForm.controls.password.touched">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.invalid  && _loginForm.controls.password.dirty && _loginForm.controls.password.value!=\'\'">\n\n				<p ion-text text-wrap>Please enter atleast 6 characters.</p>\n\n			</ion-item>\n\n	    <p text-right>Forgot Password?</p>\n\n	    <div class="submit-btn">\n\n				<button color="danger" ion-button block [disabled]="!_loginForm.valid" type="submit">Login</button>\n\n			</div>\n\n			<div class="submit-btn">\n\n				<button color="dark" ion-button block (click)="_gotoSignup()" type="button">Signup</button>\n\n			</div>\n\n	  </div>\n\n	</form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
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

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(204);
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
    function EventsPage(navCtrl, actionSheetCtrl, commonService, menu, alertCtrl, loader, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.commonService = commonService;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
        this.getEvents();
    }
    EventsPage.prototype.getEvents = function () {
        var _this = this;
        var loading = this.loader.create({
            content: 'Loading...'
        });
        loading.present();
        this.commonService.getEvents().then(function (result) {
            console.log(result);
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
        this.navCtrl.push(EventModalContentPage, data);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\events\events.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Events</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n	  <ion-item *ngFor="let e of events" (click)="openModal(e)">\n\n	    <ion-thumbnail item-start>\n\n	      <img src="http://162.144.41.156/~izaapinn/agdemo/assets/img/events/{{e.event_image}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n	    </ion-thumbnail>\n\n	    <h2>{{e.title}}</h2>\n\n	    <p><ion-icon name="calendar"></ion-icon> {{e.event_start_date}}</p>\n\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\events\events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], EventsPage);
    return EventsPage;
}());

var EventModalContentPage = (function () {
    function EventModalContentPage(platform, params, viewCtrl, iab, googleMaps) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.googleMaps = googleMaps;
        this.event = this.params.get('id');
        console.log("Events: " + this.event);
        setTimeout(function () {
            _this.loadMap(_this.event);
        }, 2000);
    }
    EventModalContentPage.prototype.loadMap = function (e) {
        var _this = this;
        console.log(e);
        var mapOptions = {
            camera: {
                target: {
                    lat: e.latitude,
                    lng: e.longitude
                },
                zoom: 10,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            _this.map.addMarker({
                title: e.title,
                icon: 'red',
                animation: 'DROP',
                position: {
                    lat: e.latitude,
                    lng: e.longitude
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    // alert('clicked');
                });
            });
        });
    };
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
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\events\modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{event.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n\n    <p><ion-icon name="pin"></ion-icon> {{event.location}}</p>\n\n    <img src="http://162.144.41.156/~izaapinn/agdemo/assets/img/events/{{event.event_image}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n    <p>{{event.description}}</p>\n\n    <p>From Date <span class="float-right bold">{{event.event_start_date}}</span></p>\n\n    <p>To Date <span class="float-right bold">{{event.event_end_date}}</span></p>\n\n    <button color="danger" ion-button block type="button" (click)="openCalendar(event)">Add to Calendar</button>\n\n  </ion-list>\n\n  <div #map_canvas id="map_canvas" style="width: 100%;height: 50%;"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\events\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], EventModalContentPage);
    return EventModalContentPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(103);
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
        var _this = this;
        this._formBuilder = _formBuilder;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.formOne = false;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this.commonService.getCountry().then(function (res) {
            _this.country = res.country.data;
            _this.state = res.state.data;
            console.log(res);
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Failed to fetch data',
                buttons: ['Ok'],
            });
            alert.present();
        });
        this._signupFormOne = this._formBuilder.group({
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
            experience: [""],
            //PRIMARY SERVICE
            primaryservice: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            //TYPES OF EXPERIENCE
            typeexp: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
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
        console.log(this._signupFormTwo.valid);
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\signup\signup.html"*/'<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/imgs/logo.png">\n\n	</div>\n\n	<h4>Welcome to myAgrow Registration!</h4>\n\n	<form [formGroup]="_signupFormOne" method="post" novalidate [hidden]="formOne">\n\n		<div class="login-spacing">\n\n			<!--FIRSTNAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Firstname</ion-label>\n\n	      <ion-input formControlName="firstname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.firstname.hasError(\'required\') && _signupFormOne.controls.firstname.touched">\n\n				<p ion-text text-wrap>Please Enter Firstname</p>\n\n			</ion-item>\n\n	    <!--FIRSTNAME END-->\n\n	    <!--LASTNAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Lastname</ion-label>\n\n	      <ion-input formControlName="lastname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.lastname.hasError(\'required\') && _signupFormOne.controls.lastname.touched">\n\n				<p ion-text text-wrap>Please Enter Lastname</p>\n\n			</ion-item>\n\n	    <!--LASTNAME END-->\n\n			<!--EMAIL START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.email.hasError(\'required\') && _signupFormOne.controls.email.touched">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.email.invalid  && _signupFormOne.controls.email.dirty && _signupFormOne.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n			<!--EMAIL END-->\n\n			<!--PASSWORD START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" [type]="_passwordInputType"></ion-input>\n\n	    </ion-item>\n\n	    <ion-icon name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.password.hasError(\'required\') && _signupFormOne.controls.password.touched">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n	    <!--PASSWORD END-->\n\n	    <!--ADDRESS 1 START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Address 1</ion-label>\n\n	      <ion-input formControlName="address1" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.address1.hasError(\'required\') && _signupFormOne.controls.address1.touched">\n\n				<p ion-text text-wrap>Please Enter Address 1</p>\n\n			</ion-item>\n\n	    <!--ADDRESS 1 END-->\n\n	    <!--ADDRESS 2 START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Address 2</ion-label>\n\n	      <ion-input formControlName="address2" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--ADDRESS 2 END-->\n\n	    <!--COUNTRY START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Country</ion-label>\n\n	      <ion-select formControlName="country">\n\n	      	<ion-option *ngFor="let c of country" [selected]="c.id==\'1\'" [value]="c.id">{{c.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.country.hasError(\'required\') && _signupFormOne.controls.country.touched">\n\n				<p ion-text text-wrap>Please Enter Country</p>\n\n			</ion-item>\n\n	    <!--COUNTRY END-->\n\n	    <!--STATE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">State</ion-label>\n\n	      <ion-select formControlName="state">\n\n	      	<ion-option *ngFor="let s of state" [selected]="s.id==\'1\'" [value]="s.id">{{s.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.state.hasError(\'required\') && _signupFormOne.controls.state.touched">\n\n				<p ion-text text-wrap>Please Enter State</p>\n\n			</ion-item>\n\n	    <!--STATE END-->\n\n	    <!--CITY START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">City</ion-label>\n\n	      <ion-input formControlName="city" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.city.hasError(\'required\') && _signupFormOne.controls.city.touched">\n\n				<p ion-text text-wrap>Please Enter City</p>\n\n			</ion-item>\n\n	    <!--CITY END-->\n\n	    <!--PHONE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Phone</ion-label>\n\n	      <ion-input formControlName="phone" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'required\') && _signupFormOne.controls.phone.touched">\n\n				<p ion-text text-wrap>Please Enter Phone</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'pattern\') && _signupFormOne.controls.phone.dirty && _signupFormOne.controls.phone.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'minlength\') && _signupFormOne.controls.phone.touched">\n\n				<p ion-text text-wrap>Minimum 9 Characters</p>\n\n			</ion-item>\n\n	    <!--PHONE END-->\n\n	    <!--ZIPCODE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Zipcode</ion-label>\n\n	      <ion-input (keyup)="_onKeyup()" formControlName="zipcode" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'required\') && _signupFormOne.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Please Enter Zipcode</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'pattern\') && _signupFormOne.controls.zipcode.dirty && _signupFormOne.controls.zipcode.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'minlength\') && _signupFormOne.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Minimum 5 Characters</p>\n\n			</ion-item>\n\n	    <!--ZIPCODE END-->\n\n			<div class="submit-btn">\n\n				<button ion-button (click)="_goBack()" type="button">\n\n					<ion-icon name="md-arrow-back"></ion-icon>&nbsp;&nbsp;Back\n\n				</button>\n\n				<button color="danger" float-right ion-button (click)="_nextStep()" [disabled]="!_signupFormOne.valid" type="button">Next &nbsp;&nbsp;<ion-icon name="md-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	  </div>	  \n\n	</form>\n\n	<form method="post"  [formGroup]="_signupFormTwo" (submit)="_submitSignup()" novalidate [hidden]="!formOne">\n\n		<div class="login-spacing">\n\n			<!--BUSINESS NAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Business Name</ion-label>\n\n	      <ion-input formControlName="businessname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.businessname.hasError(\'required\') && _signupFormTwo.controls.businessname.touched">\n\n				<p ion-text text-wrap>Please Enter Business Name</p>\n\n			</ion-item>\n\n	    <!--BUSINESS NAME END-->\n\n	    <!--Website START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Website</ion-label>\n\n	      <ion-input formControlName="website" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.website.hasError(\'required\') && _signupFormTwo.controls.website.touched">\n\n				<p ion-text text-wrap>Please Enter Website</p>\n\n			</ion-item>\n\n	    <!--Website END-->\n\n	    <!--Work Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Work Experience</ion-label>\n\n	      <ion-input formControlName="experience" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Work Experience END-->\n\n	    <!--Primary Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Primary Services</ion-label>\n\n	      <ion-input formControlName="primaryservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.primaryservice.hasError(\'required\') && _signupFormTwo.controls.primaryservice.touched">\n\n				<p ion-text text-wrap>Please Enter Primary Service</p>\n\n			</ion-item>\n\n	    <!--Primary Services END-->\n\n	    <!--Types of Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Types of Experience</ion-label>\n\n	      <ion-input formControlName="typeexp" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.typeexp.hasError(\'required\') && _signupFormTwo.controls.typeexp.touched">\n\n				<p ion-text text-wrap>Please Enter Types of Experience</p>\n\n			</ion-item>\n\n	    <!--Types of Experience END-->\n\n	    <!--Qualification START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Qualification</ion-label>\n\n	      <ion-input formControlName="qualification" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Qualification END-->\n\n	    <!--Description START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Description</ion-label>\n\n	      <ion-input formControlName="description" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Description END-->\n\n	    <!--Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Other Related Services</ion-label>\n\n	      <ion-input formControlName="otherservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Services END-->\n\n	    <div class="submit-btn">\n\n				<button ion-button (click)="_prevStep()" type="button">\n\n					<ion-icon name="md-arrow-back"></ion-icon>&nbsp;&nbsp;Back</button>\n\n				<button color="danger" ion-button float-right type="submit">Create Account</button>\n\n			</div>\n\n	  </div>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(commonService, globalVars, alertCtrl, loader, _formBuilder, nav) {
        var _this = this;
        this.commonService = commonService;
        this.globalVars = globalVars;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this._formBuilder = _formBuilder;
        this.nav = nav;
        this.profile = { id: '', first_name: '', last_name: '', address: '', address2: '', city: '', state: '', country: '', email: '', password: '', zip: '', phone: '', country_id: 1, state_id: 1 };
        this.commonService.getCountry().then(function (res) {
            _this.country = res.country.data;
            _this.state = res.state.data;
            console.log(res);
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Failed to fetch data',
                buttons: ['Ok'],
            });
            alert.present();
        });
        this.user = this.globalVars.getUserdata();
        this.profileLoadForm();
        this.commonService.getProfileDetails(this.user.id).then(function (res) {
            var load = _this.loader.create({
                content: 'Please Wait...'
            });
            _this.profile = res.data;
            load.present();
            setTimeout(function () {
                load.dismiss();
                _this.profileLoadForm();
            }, 3000);
        })
            .catch(function (err) {
            var error = _this.alertCtrl.create({
                title: 'Error',
                message: 'Unable to fetch user profile',
                buttons: ['OK']
            });
            error.present();
            return false;
        });
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.profileLoadForm = function () {
        this._profileForm = this._formBuilder.group({
            id: [this.profile.id],
            firstname: [this.profile.first_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            lastname: [this.profile.last_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            phone: [this.profile.phone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(9),])],
            email: [this.profile.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__["a" /* regexPatterns */].email)])],
            password: [""],
            city: [this.profile.city, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            state: [this.profile.state_id, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            country: [this.profile.country_id, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            address1: [this.profile.address, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            address2: [this.profile.address2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            zipcode: [this.profile.zip, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5),])],
        });
    };
    ProfilePage.prototype._saveProfile = function () {
        var _this = this;
        console.log(this._profileForm.value);
        var load = this.loader.create({
            content: 'Please Wait...'
        });
        load.present();
        if (this._profileForm.valid) {
            this.commonService.saveProfile(this._profileForm.value).then(function (res) {
                load.dismiss();
                if (res.status == "success") {
                    var success = _this.alertCtrl.create({
                        title: 'Success',
                        message: 'Profile updated successfully.',
                        buttons: [{
                                text: 'OK',
                                handler: function () {
                                    _this.nav.setRoot(ProfilePage_1);
                                }
                            }]
                    });
                    success.present();
                }
            })
                .catch(function (err) {
                load.dismiss();
                var error = _this.alertCtrl.create({
                    title: 'Error',
                    message: err,
                    buttons: ['OK']
                });
                error.present();
                return false;
            });
        }
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<form  [formGroup]="_profileForm" method="post" novalidate (submit)="_saveProfile()">\n\n		<ion-input formControlName="id" type="hidden"></ion-input>\n\n		<div class="login-spacing">\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Firstname</ion-label>\n\n	      <ion-input formControlName="firstname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.firstname.hasError(\'required\') && _profileForm.controls.firstname.touched">\n\n				<p ion-text text-wrap>Please Enter Firstname</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Lastname</ion-label>\n\n	      <ion-input formControlName="lastname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.lastname.hasError(\'required\') && _profileForm.controls.lastname.touched">\n\n				<p ion-text text-wrap>Please Enter Lastname</p>\n\n			</ion-item>\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Phone</ion-label>\n\n	      <ion-input formControlName="phone" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.phone.hasError(\'required\') && _profileForm.controls.phone.touched">\n\n				<p ion-text text-wrap>Please Enter Phone</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.phone.hasError(\'pattern\') && _profileForm.controls.phone.dirty && _profileForm.controls.phone.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.phone.hasError(\'minlength\') && _profileForm.controls.phone.touched">\n\n				<p ion-text text-wrap>Minimum 9 Characters</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email"></ion-input>\n\n	    </ion-item>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.email.hasError(\'required\') && _profileForm.controls.email.touched">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.email.invalid  && _profileForm.controls.email.dirty && _profileForm.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" type="password"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.password.hasError(\'required\') && _profileForm.controls.password.touched">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Address 1</ion-label>\n\n	      <ion-input formControlName="address1" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.address1.hasError(\'required\') && _profileForm.controls.address1.touched">\n\n				<p ion-text text-wrap>Please Enter Address 1</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Address 2</ion-label>\n\n	      <ion-input formControlName="address2" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">City</ion-label>\n\n	      <ion-input formControlName="city" type="text"></ion-input>\n\n	    </ion-item>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.city.hasError(\'required\') && _profileForm.controls.city.touched">\n\n				<p ion-text text-wrap>Please Enter City</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">State</ion-label>\n\n	      <ion-select formControlName="state">\n\n	      	<ion-option *ngFor="let s of state" [value]="s.id">{{s.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.state.hasError(\'required\') && _profileForm.controls.state.touched">\n\n				<p ion-text text-wrap>Please Enter State</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Country</ion-label>\n\n	      <ion-select formControlName="country">\n\n	      	<ion-option *ngFor="let c of country" [value]="c.id">{{c.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.country.hasError(\'required\') && _profileForm.controls.country.touched">\n\n				<p ion-text text-wrap>Please Enter Country</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Zipcode</ion-label>\n\n	      <ion-input type="number" formControlName="zipcode"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.zipcode.hasError(\'required\') && _profileForm.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Please Enter Zipcode</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.zipcode.hasError(\'pattern\') && _profileForm.controls.zipcode.dirty && _profileForm.controls.zipcode.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.zipcode.hasError(\'minlength\') && _profileForm.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Minimum 5 Characters</p>\n\n			</ion-item>\n\n	  </div>\n\n	  <div class="submit-btn">\n\n			<button color="dark" ion-button block [disabled]="!_profileForm.valid"  type="submit">Save</button>\n\n		</div>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_events_events__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_commonService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_globalVars__ = __webpack_require__(52);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["b" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["a" /* EventModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["b" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["a" /* EventModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__providers_globalVars__["a" /* GlobalVars */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__providers_commonService__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_events_events__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globalVars__ = __webpack_require__(52);
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
    function MyApp(app, platform, statusBar, splashScreen, globalvars) {
        var _this = this;
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.globalvars = globalvars;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-cog' },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_5__pages_events_events__["b" /* EventsPage */], icon: 'ios-flag' },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'ios-power' }
        ];
        this.app.viewWillEnter.subscribe(function () {
            _this.user = _this.globalvars.getUserdata();
            if (_this.user) {
                _this.pages = [
                    { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-cog' },
                    { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_5__pages_events_events__["b" /* EventsPage */], icon: 'ios-flag' },
                    { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */], icon: 'ios-person' },
                    { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'ios-power' }
                ];
            }
        });
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
    MyApp.prototype._logout = function (page) {
        this.globalvars.deleteUserdata();
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src="assets/imgs/logo.png">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <div *ngFor="let p of pages" >\n        <button menuClose ion-item *ngIf="p.title!=\'Logout\'" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n        </button>\n        <button menuClose ion-item *ngIf="p.title==\'Logout\'" (click)="_logout()">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n        </button>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_globalVars__["a" /* GlobalVars */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "http://162.144.41.156/~izaapinn/agdemo/Webservice/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\IZ-Sathish\myagrow\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IZ-Sathish\myagrow\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(283);
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
    CommonService.prototype.getCountry = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'users/country', options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.signupData = function (form1, form2) {
        var data = { form1: form1, form2: form2 };
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/signup', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.login = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/login', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.getProfileDetails = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'users/select_profile?id=' + id, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.saveProfile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/profile', data, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CommonService);
    return CommonService;
    var _a;
}());

//# sourceMappingURL=commonService.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalVars = (function () {
    function GlobalVars() {
    }
    GlobalVars.prototype.setUserdata = function (value) {
        this.myGlobalVar = localStorage.setItem('userData', value);
    };
    GlobalVars.prototype.deleteUserdata = function () {
        this.myGlobalVar = localStorage.removeItem('userData');
    };
    GlobalVars.prototype.getUserdata = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar;
    };
    GlobalVars.prototype.getId = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar.id;
    };
    GlobalVars.prototype.getUserRole = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar.role;
    };
    GlobalVars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalVars);
    return GlobalVars;
}());

//# sourceMappingURL=globalVars.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map