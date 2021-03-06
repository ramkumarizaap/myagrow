webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(202);
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
    function HomePage(navCtrl, actionSheetCtrl, commonService, menu, alertCtrl, loader, modalCtrl, platform, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.commonService = commonService;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.commonService.getCurrentCity().then(function (result) {
            //console.log(result);
            _this.city = result.city;
            _this.commonService.getWeather(result).then(function (weather) {
                //console.log(weather);
                _this.weather = Math.round((weather.main.temp - 32) * 5 / 9);
            });
        });
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
            _this.count = result.count;
            var alert = _this.alertCtrl.create({
                title: result.status.toUpperCase(),
                message: result.message,
                buttons: ['Ok']
            });
            if (result.status == "error")
                alert.present();
        }, function (err) {
            loading.dismiss();
            console.log(JSON.stringify(err));
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
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getCategory().then(function (result) {
            // console.log(result.category);
            _this.category = result.category;
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Failed to fetch data',
                buttons: ['Ok'],
            });
            alert.present();
        });
        this._searchForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            category: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            location: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            keywords: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('')
        });
    };
    HomePage.prototype.search_category = function (type) {
        var _this = this;
        //alert(type);
        var param = this._searchForm.value;
        console.log(param);
        if (param.category == '' && param.location == '' && param.keywords == '')
            return false;
        var load = this.loader.create({
            content: "Please Wait"
        });
        load.present();
        this.commonService.getSearchRecords(param).then(function (result) {
            console.log(result);
            setTimeout(function () {
                load.dismiss();
                console.log(result);
                _this.services = result.retdata.data;
                _this.count = result.retdata.count;
            }, 3000);
            // this.viewCtrl.dismiss();
        }).catch(function (err) {
            load.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'Failed to fetch data',
                buttons: ['Ok'],
            });
            alert.present();
        });
    };
    HomePage.prototype._clearSearch = function () {
        var param = this._searchForm.value;
        //console.log(param);
        if (param.category == '' && param.location == '' && param.keywords == '')
            return false;
        this.ngOnInit();
        this.getServices();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title float-left>Services</ion-title>\n     <ion-item class="bg-weather" float-right>\n      {{this.city}}&nbsp;&nbsp;<span style="font-size: 18px;">{{this.weather}}&deg;C</span>\n    </ion-item>\n   <!-- <img src="assets/imgs/weather.jpg"><div>{{this.city}}&nbsp;&nbsp;{{this.weather}}&deg;C</div> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <div class="service-search">\n    <form method="post" [formGroup]="_searchForm" novalidate (submit)="search_category()">\n      <div class="login-spacing">\n        <ion-grid>\n          <ion-row class="search-box">\n            <ion-col col-6>\n              <ion-item>\n                <ion-label stacked color="transparent">Select Category</ion-label>\n                <ion-select formControlName="category">\n                   <ion-option *ngFor="let c of category" [value]="c.id">{{c.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n              <!--  <ion-label stacked color="transparent">Enter Location</ion-label> -->\n                <ion-input type="text" formControlName="location" placeholder="Enter Location"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row  class="search-box">\n            <ion-col col-6>\n             <ion-item>\n             <!-- <ion-label stacked color="transparent">Enter Keyword</ion-label> -->\n            <ion-input  type="text" formControlName="keywords" placeholder="Enter Keyword"></ion-input>\n             </ion-item>\n              </ion-col>\n              \n              <ion-col col-6>\n                  <div class="submit-btn">\n                    <button ion-button icon-only color="secondary" (click)="search_category()"> <ion-icon name="search"></ion-icon></button>\n                    <button ion-button icon-only color="danger" (click)="_clearSearch()"> <ion-icon name="md-close"></ion-icon></button>\n                    \n                 </div>\n              </ion-col> \n            </ion-row>\n      </ion-grid>\n      </div>\n    </form>\n  </div>\n  <div class="service-result">\n    <ion-card  *ngFor="let s of services" (click)="openModal(s)">\n    <img src="http://162.144.41.156/~izaapinn/agdemo/admin/uploads/services/{{s.image_name}}" onError="this.src=\'assets/imgs/dummy_img.jpg\';"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{s.title}}\n        </ion-card-title>\n      <p class="description">{{s.description}}</p>\n    </ion-card-content>\n    <ion-row padding>\n      <ion-col class="address">\n          <ion-icon name=\'ios-pin\'></ion-icon>\n          {{s.address}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button  clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          More Details\n        </button>\n      </ion-col>\n    </ion-row>\n    </ion-card>\n  </div>\n  <ion-row *ngIf="count <= 0" style="margin-top:140px;">\n    <ion-item >No Records Found.</ion-item>\n    </ion-row>\n  <!-- <ion-item *ngIf="services==null || count <= 0 ">No Records Found.</ion-item> -->\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)"  *ngIf="count < 2">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\home\modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      {{service.title}}\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary"  showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list padding>\n\n		<p><ion-icon name="pin"></ion-icon> {{service.address}}</p>\n\n		<img src="http://162.144.41.156/~izaapinn/agdemo/admin/uploads/services/{{service.image_name}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n		<button type="button" block ion-button color="secondary">Price : ${{service.price}}</button>\n\n		<p>{{service.description}}</p>\n\n		<ion-item>\n\n		  Phone\n\n		  <ion-badge color="dark" item-end>{{service.phone}}</ion-badge>\n\n		</ion-item>\n\n		<ion-item>\n\n		  Status\n\n		  <ion-badge item-end>{{service.status}}</ion-badge>\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n  <!--<ion-segment [(ngModel)]="desc">\n\n    <ion-segment-button value="add">\n\n      ADD. Info\n\n    </ion-segment-button>\n\n    <ion-segment-button value="products">\n\n      Related Products\n\n    </ion-segment-button>\n\n    <ion-segment-button value="reviews">\n\n      Reviews\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="desc">\n\n  <ion-list *ngSwitchCase="\'add\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-puppy-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Ruby</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'products\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-kitten-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Luna</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'reviews\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-kitten-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Luna</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>-->\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\home\modal.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(206);
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
        //this.menu.enable(false, 'myMenu');
        if (this.globalvars.getUserdata())
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        this._loginForm = _formBuilder.group({
            //EMAIL
            email: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //PASSWORD
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    // ,Validators.pattern(regexPatterns.password),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(6)
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
    LoginPage.prototype._gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\login\login.html"*/'<ion-content>\n\n	<button login-pge ion-button menuToggle> \n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n	<div class="logo">\n\n		<img src="assets/imgs/logo.png">\n\n	</div>\n\n	<form [formGroup]="_loginForm" (submit)="_login()" method="post" novalidate>\n\n		<div class="login-spacing">\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email" [class.invalid]="_loginForm.controls.email.invalid && _loginForm.controls.dirty"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.hasError(\'required\') && _loginForm.controls.email.touched">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.email.invalid  && _loginForm.controls.email.dirty && _loginForm.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" [type]="_passwordInputType" ></ion-input>\n\n	    </ion-item>\n\n	    <ion-icon name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.hasError(\'required\') && _loginForm.controls.password.touched">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_loginForm.controls.password.invalid  && _loginForm.controls.password.dirty && _loginForm.controls.password.value!=\'\'">\n\n				<p ion-text text-wrap>Please enter atleast 6 characters.</p>\n\n			</ion-item>\n\n	    <p text-right>Forgot Password?</p>\n\n	    <div class="submit-btn">\n\n				<button ion-button block [disabled]="!_loginForm.valid" type="submit">Login</button>\n\n			</div>\n\n			<div class="submit-btn">\n\n				<button color="dark" ion-button block (click)="_gotoSignup()" type="button">Signup</button>\n\n			</div>\n\n			<!-- <div class="submit-btn">\n\n				<button color="danger" ion-button block (click)="_gotoHome()" type="button">Back to Home</button>\n\n			</div> -->\n\n	  </div>\n\n	</form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\login\login.html"*/
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(205);
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
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\events\events.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Events</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n	  <ion-item *ngFor="let e of events" (click)="openModal(e)">\n\n	    <ion-thumbnail item-start>\n\n	      <img src="http://162.144.41.156/~izaapinn/agdemo/assets/img/events/{{e.event_image}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n	    </ion-thumbnail>\n\n	    <h2>{{e.title}}</h2>\n\n	    <p><ion-icon name="calendar"></ion-icon> {{e.event_start_date}}</p>\n\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\events\events.html"*/
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
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\events\modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{event.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n\n    <p><ion-icon name="pin"></ion-icon> {{event.location}}</p>\n\n    <img src="http://162.144.41.156/~izaapinn/agdemo/assets/img/events/{{event.event_image}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';"/>\n\n    <p>{{event.description}}</p>\n\n    <p>From Date <span class="float-right bold">{{event.event_start_date}}</span></p>\n\n    <p>To Date <span class="float-right bold">{{event.event_end_date}}</span></p>\n\n    <button color="danger" ion-button block type="button" (click)="openCalendar(event)">Add to Calendar</button>\n\n  </ion-list>\n\n  <div #map_canvas id="map_canvas" style="width: 100%;height: 50%;"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\events\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], EventModalContentPage);
    return EventModalContentPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(33);
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
        this.check = false;
        this.commonService.getCountry().then(function (res) {
            _this.check = true;
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //FIRTSNAME
            lastname: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //EMAIL
            email: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //PASSWORD
            password: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //ADDRESS 1
            address1: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //ADDRESS 2
            address2: [""],
            //COUNTRY
            country: ["231",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //STATE
            state: ["3924",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //CITY
            city: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //ZIPCODE
            zipcode: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(5),
                ])
            ],
            //PHONE
            phone: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(9),
                ])
            ],
        });
        this._signupFormTwo = _formBuilder.group({
            //BUSINESS NAME
            businessname: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //WEBSITE
            website: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //WORK EXPERIENCE
            experience: [""],
            //PRIMARY SERVICE
            primaryservice: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                ])
            ],
            //TYPES OF EXPERIENCE
            typeexp: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\signup\signup.html"*/'<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/imgs/logo.png">\n\n	</div>\n\n	<h4>Welcome to myAgrow Registration!</h4>\n\n	<form [formGroup]="_signupFormOne" method="post" novalidate [hidden]="formOne">\n\n		<div class="login-spacing">\n\n			<!--FIRSTNAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Firstname</ion-label>\n\n	      <ion-input formControlName="firstname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.firstname.hasError(\'required\') && _signupFormOne.controls.firstname.touched">\n\n				<p ion-text text-wrap>Please Enter Firstname</p>\n\n			</ion-item>\n\n	    <!--FIRSTNAME END-->\n\n	    <!--LASTNAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Lastname</ion-label>\n\n	      <ion-input formControlName="lastname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.lastname.hasError(\'required\') && _signupFormOne.controls.lastname.touched">\n\n				<p ion-text text-wrap>Please Enter Lastname</p>\n\n			</ion-item>\n\n	    <!--LASTNAME END-->\n\n			<!--EMAIL START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.email.hasError(\'required\') && _signupFormOne.controls.email.touched">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.email.invalid  && _signupFormOne.controls.email.dirty && _signupFormOne.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n			<!--EMAIL END-->\n\n			<!--PASSWORD START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" [type]="_passwordInputType"></ion-input>\n\n	    </ion-item>\n\n	    <ion-icon name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.password.hasError(\'required\') && _signupFormOne.controls.password.touched">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n	    <!--PASSWORD END-->\n\n	    <!--ADDRESS 1 START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Address 1</ion-label>\n\n	      <ion-input formControlName="address1" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.address1.hasError(\'required\') && _signupFormOne.controls.address1.touched">\n\n				<p ion-text text-wrap>Please Enter Address 1</p>\n\n			</ion-item>\n\n	    <!--ADDRESS 1 END-->\n\n	    <!--ADDRESS 2 START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Address 2</ion-label>\n\n	      <ion-input formControlName="address2" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--ADDRESS 2 END-->\n\n	    <!--COUNTRY START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Country</ion-label>\n\n	      <ion-select formControlName="country">\n\n	      	<ion-option *ngFor="let c of country" [value]="c.id">{{c.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.country.hasError(\'required\') && _signupFormOne.controls.country.touched">\n\n				<p ion-text text-wrap>Please Enter Country</p>\n\n			</ion-item>\n\n	    <!--COUNTRY END-->\n\n	    <!--STATE START-->\n\n	    <div *ngIf = "check">\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">State</ion-label>\n\n	      <ion-select formControlName="state">\n\n	      	<ion-option *ngFor="let s of state" [value]="s.id">{{s.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.state.hasError(\'required\') && _signupFormOne.controls.state.touched">\n\n				<p ion-text text-wrap>Please Enter State</p>\n\n			</ion-item>\n\n	    <!--STATE END-->\n\n	    <!--CITY START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">City</ion-label>\n\n	      <ion-input formControlName="city" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.city.hasError(\'required\') && _signupFormOne.controls.city.touched">\n\n				<p ion-text text-wrap>Please Enter City</p>\n\n			</ion-item>\n\n		</div>\n\n	    <!--CITY END-->\n\n	    <!--PHONE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Phone</ion-label>\n\n	      <ion-input formControlName="phone" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'required\') && _signupFormOne.controls.phone.touched">\n\n				<p ion-text text-wrap>Please Enter Phone</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'pattern\') && _signupFormOne.controls.phone.dirty && _signupFormOne.controls.phone.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.phone.hasError(\'minlength\') && _signupFormOne.controls.phone.touched">\n\n				<p ion-text text-wrap>Minimum 9 Characters</p>\n\n			</ion-item>\n\n	    <!--PHONE END-->\n\n	    <!--ZIPCODE START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Zipcode</ion-label>\n\n	      <ion-input (keyup)="_onKeyup()" formControlName="zipcode" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'required\') && _signupFormOne.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Please Enter Zipcode</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'pattern\') && _signupFormOne.controls.zipcode.dirty && _signupFormOne.controls.zipcode.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_signupFormOne.controls.zipcode.hasError(\'minlength\') && _signupFormOne.controls.zipcode.touched">\n\n				<p ion-text text-wrap>Minimum 5 Characters</p>\n\n			</ion-item>\n\n	    <!--ZIPCODE END-->\n\n			<div class="submit-btn">\n\n				<button ion-button (click)="_goBack()" type="button">\n\n					<ion-icon name="md-arrow-back"></ion-icon>&nbsp;&nbsp;Back\n\n				</button>\n\n				<button color="danger" float-right ion-button (click)="_nextStep()" [disabled]="!_signupFormOne.valid" type="button">Next &nbsp;&nbsp;<ion-icon name="md-arrow-forward"></ion-icon></button>\n\n			</div>\n\n	  </div>	  \n\n	</form>\n\n	<form method="post"  [formGroup]="_signupFormTwo" (submit)="_submitSignup()" novalidate [hidden]="!formOne">\n\n		<div class="login-spacing">\n\n			<!--BUSINESS NAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Business Name</ion-label>\n\n	      <ion-input formControlName="businessname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.businessname.hasError(\'required\') && _signupFormTwo.controls.businessname.touched">\n\n				<p ion-text text-wrap>Please Enter Business Name</p>\n\n			</ion-item>\n\n	    <!--BUSINESS NAME END-->\n\n	    <!--Website START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Website</ion-label>\n\n	      <ion-input formControlName="website" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.website.hasError(\'required\') && _signupFormTwo.controls.website.touched">\n\n				<p ion-text text-wrap>Please Enter Website</p>\n\n			</ion-item>\n\n	    <!--Website END-->\n\n	    <!--Work Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Work Experience</ion-label>\n\n	      <ion-input formControlName="experience" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Work Experience END-->\n\n	    <!--Primary Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Primary Services</ion-label>\n\n	      <ion-input formControlName="primaryservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.primaryservice.hasError(\'required\') && _signupFormTwo.controls.primaryservice.touched">\n\n				<p ion-text text-wrap>Please Enter Primary Service</p>\n\n			</ion-item>\n\n	    <!--Primary Services END-->\n\n	    <!--Types of Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Types of Experience</ion-label>\n\n	      <ion-input formControlName="typeexp" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_signupFormTwo.controls.typeexp.hasError(\'required\') && _signupFormTwo.controls.typeexp.touched">\n\n				<p ion-text text-wrap>Please Enter Types of Experience</p>\n\n			</ion-item>\n\n	    <!--Types of Experience END-->\n\n	    <!--Qualification START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Qualification</ion-label>\n\n	      <ion-input formControlName="qualification" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Qualification END-->\n\n	    <!--Description START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Description</ion-label>\n\n	      <ion-input formControlName="description" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Description END-->\n\n	    <!--Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Other Related Services</ion-label>\n\n	      <ion-input formControlName="otherservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Services END-->\n\n	    <div class="submit-btn">\n\n				<button ion-button (click)="_prevStep()" type="button">\n\n					<ion-icon name="md-arrow-back"></ion-icon>&nbsp;&nbsp;Back</button>\n\n				<button color="danger" ion-button float-right type="submit">Create Account</button>\n\n			</div>\n\n	  </div>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(208);
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
    function ProfilePage(commonService, globalVars, alertCtrl, loader, _formBuilder, nav, camera, actionSheetCtrl) {
        this.commonService = commonService;
        this.globalVars = globalVars;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this._formBuilder = _formBuilder;
        this.nav = nav;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.count = 1;
        this.user_photo = [];
        this.type = 'con_info';
        this.profile = { id: '', first_name: '', last_name: '', address: '', address2: '', city: '', state: '', country: '', email: '', password: '', zip: '', phone: '', country_id: 1, state_id: 1 };
        this.profile2 = { id: '', company_name: '', website: '', experience: '', primary_service_category: '', experience_type: '', qualification: '', cus_description: '', other_related_category: '' };
        this.profile3 = { id: '', seller_id: '' };
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
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
        this.profileLoadForm2();
        this.profileLoadForm3();
        var load = this.loader.create({
            content: 'Please Wait...'
        });
        load.present();
        this.commonService.getProfileDetails(this.user.id).then(function (res) {
            console.log(res);
            _this.profile = res.profile;
            _this.profile2 = res.services;
            _this.profile3 = res.photos;
            _this.profileLoadForm();
            _this.profileLoadForm2();
            load.dismiss();
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
    };
    ProfilePage.prototype.profileLoadForm = function () {
        this._profileForm = this._formBuilder.group({
            id: [this.profile.id],
            firstname: [this.profile.first_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            lastname: [this.profile.last_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            phone: [this.profile.phone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(9)])],
            email: [this.profile.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__validators_regexPatterns__["a" /* regexPatterns */].email)])],
            password: [""],
            city: [this.profile.city, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            state: [this.profile.state_id, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            country: [this.profile.country_id, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            address1: [this.profile.address, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            address2: [this.profile.address2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            zipcode: [this.profile.zip, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(5)])],
        });
    };
    ProfilePage.prototype.profileLoadForm2 = function () {
        this._profileForm2 = this._formBuilder.group({
            seller_id: [this.profile2.id],
            businessname: [this.profile2.company_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            website: [this.profile2.website, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            experience: [this.profile2.experience, ""],
            primaryservice: [this.profile2.primary_service_category, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            typeexp: [this.profile2.experience_type, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            qualification: [this.profile2.qualification, ""],
            description: [this.profile2.cus_description, ""],
            otherservice: [this.profile2.other_related_category, ""],
        });
    };
    ProfilePage.prototype.profileLoadForm3 = function () {
        this._profileForm3 = this._formBuilder.group({
            seller_id: [this.profile2.id],
            photo: this._formBuilder.array([])
        });
    };
    ProfilePage.prototype._saveProfile = function (type) {
        var _this = this;
        var formdata;
        if (type == 'profile')
            formdata = this._profileForm;
        if (type == 'service')
            formdata = this._profileForm2;
        // if(type=='photo')
        // 	formdata = this._profileForm3;
        if (formdata.valid) {
            var load_1 = this.loader.create({
                content: 'Please Wait...'
            });
            load_1.present();
            formdata.value['type'] = type;
            this.commonService.saveProfile(formdata.value).then(function (res) {
                load_1.dismiss();
                if (res.status == "success") {
                    var success = _this.alertCtrl.create({
                        title: 'Success',
                        message: 'Profile updated successfully.',
                        buttons: ['OK']
                    });
                    success.present();
                }
            })
                .catch(function (err) {
                load_1.dismiss();
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
    ProfilePage.prototype.CaptureImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose your profile photo',
            buttons: [
                {
                    text: 'Take a Picture',
                    handler: function () {
                        // this.updateURI();
                        _this._gotoCamera(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: 'Choose from Album',
                    handler: function () {
                        _this._gotoCamera(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype._removePhoto = function (i) {
        this.user_photo.splice(i, 1);
        this._profileForm3.value.photo.splice(i, 1);
    };
    ProfilePage.prototype._gotoCamera = function (type) {
        var _this = this;
        var options = {
            quality: 70,
            // targetWidth: 300,
            // targetHeight: 300,
            sourceType: type,
            // allowEdit: false,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.updateURI(imageData);
        })
            .catch(function (err) {
            var error = _this.alertCtrl.create({
                title: 'Error',
                message: err,
                buttons: ['OK']
            });
            error.present();
            return false;
        });
    };
    ProfilePage.prototype.updateURI = function (imageData) {
        if (imageData === void 0) { imageData = ''; }
        // this.count++;
        // this._profileForm3.value.photo.push(this.count);
        //  this.user_photo.push(this.count);
        this._profileForm3.value.photo.push('data:image/jpeg;base64,' + imageData);
        this.user_photo.push('data:image/jpeg;base64,' + imageData);
        // alert("Img :" + JSON.stringify(this._profileForm3.value));
        // console.log(this._profileForm3.value);
    };
    ProfilePage.prototype.uploadImage = function (imageData) {
        var _this = this;
        if (this._profileForm3.value.photo == '') {
            return false;
        }
        var load = this.loader.create({
            content: 'Please Wait...'
        });
        load.present();
        this.commonService.saveimage(this._profileForm3.value).then(function (res) {
            //console.log(res);
            //  alert("Res :"+JSON.stringify(res));
            load.dismiss();
            if (res.status == "success") {
                var success = _this.alertCtrl.create({
                    title: 'Success',
                    message: 'Image uploaded successfully.',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                _this.nav.setRoot(ProfilePage_1);
                            }
                        }],
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
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n    <div padding>\n\n  <ion-segment [(ngModel)]="type">\n\n    <ion-segment-button value="con_info">\n\n      Contact\n\n    </ion-segment-button>\n\n    <ion-segment-button value="sel_ser">\n\n     Services\n\n    </ion-segment-button>\n\n     <ion-segment-button value="photos">\n\n      Photos\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n\n   <div [ngSwitch]="type">\n\n   	<ion-list *ngSwitchCase="\'con_info\'">\n\n	<form  [formGroup]="_profileForm" method="post" novalidate (submit)="_saveProfile(\'profile\')">\n\n		<ion-input formControlName="id" type="hidden"></ion-input>\n\n		<div class="login-spacing">\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Firstname</ion-label>\n\n	      <ion-input formControlName="firstname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.firstname.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Firstname</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Lastname</ion-label>\n\n	      <ion-input formControlName="lastname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.lastname.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Lastname</p>\n\n			</ion-item>\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Phone</ion-label>\n\n	      <ion-input formControlName="phone" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.phone.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Phone</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.phone.hasError(\'pattern\') && _profileForm.controls.phone.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.phone.hasError(\'minlength\')">\n\n				<p ion-text text-wrap>Minimum 9 Characters</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Email</ion-label>\n\n	      <ion-input formControlName="email" type="email"></ion-input>\n\n	    </ion-item>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.email.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Email-ID</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.email.invalid && _profileForm.controls.email.value!=\'\'">\n\n				<p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Password</ion-label>\n\n	      <ion-input formControlName="password" type="password"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.password.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Password</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Address 1</ion-label>\n\n	      <ion-input formControlName="address1" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.address1.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Address 1</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Address 2</ion-label>\n\n	      <ion-input formControlName="address2" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">City</ion-label>\n\n	      <ion-input formControlName="city" type="text"></ion-input>\n\n	    </ion-item>\n\n	     <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.city.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter City</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">State</ion-label>\n\n	      <ion-select formControlName="state">\n\n	      	<ion-option *ngFor="let s of state" [value]="s.id">{{s.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.state.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter State</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Country</ion-label>\n\n	      <ion-select formControlName="country">\n\n	      	<ion-option *ngFor="let c of country" [value]="c.id">{{c.name}}</ion-option>\n\n	      </ion-select>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.country.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Country</p>\n\n			</ion-item>\n\n	    <ion-item>\n\n	      <ion-label stacked color="transparent">Zipcode</ion-label>\n\n	      <ion-input type="number" formControlName="zipcode"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.zipcode.hasError(\'required\')">\n\n				<p ion-text text-wrap>Please Enter Zipcode</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.zipcode.hasError(\'pattern\') && _profileForm.controls.zipcode.value!=\'\'">\n\n				<p ion-text text-wrap>Please Enter Numbers Only</p>\n\n			</ion-item>\n\n			<ion-item class="login-error" no-lines no-padding *ngIf="_profileForm.controls.zipcode.hasError(\'minlength\')">\n\n				<p ion-text text-wrap>Minimum 5 Characters</p>\n\n			</ion-item>\n\n	  </div>\n\n	  <div class="submit-btn">\n\n			<button color="dark" ion-button block [disabled]="!_profileForm.valid"  type="submit">Save</button>\n\n		</div>\n\n	</form>\n\n</ion-list>\n\n\n\n <ion-list *ngSwitchCase="\'sel_ser\'">\n\n   <form method="post" [formGroup]="_profileForm2" (submit)="_saveProfile(\'service\')">\n\n   	<ion-input formControlName="seller_id" type="hidden"></ion-input>\n\n		<div class="login-spacing">\n\n			<!--BUSINESS NAME START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Business Name</ion-label>\n\n	      <ion-input formControlName="businessname" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm2.controls.businessname.hasError(\'required\') && _profileForm2.controls.businessname.touched">\n\n				<p ion-text text-wrap>Please Enter Business Name</p>\n\n			</ion-item>\n\n	    <!--BUSINESS NAME END-->\n\n	    <!--Website START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Website</ion-label>\n\n	      <ion-input formControlName="website" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm2.controls.website.hasError(\'required\') && _profileForm2.controls.website.touched">\n\n				<p ion-text text-wrap>Please Enter Website</p>\n\n			</ion-item>\n\n	    <!--Website END-->\n\n	    <!--Work Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Work Experience</ion-label>\n\n	      <ion-input formControlName="experience" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Work Experience END-->\n\n	    <!--Primary Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Primary Services</ion-label>\n\n	      <ion-input formControlName="primaryservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	  <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm2.controls.primaryservice.hasError(\'required\') && _profileForm2.controls.primaryservice.touched">\n\n				<p ion-text text-wrap>Please Enter Primary Service</p>\n\n			</ion-item>\n\n	    <!--Primary Services END-->\n\n	    <!--Types of Experience START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Types of Experience</ion-label>\n\n	      <ion-input formControlName="typeexp" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <ion-item class="login-error" no-lines no-padding *ngIf="_profileForm2.controls.typeexp.hasError(\'required\') && _profileForm2.controls.typeexp.touched">\n\n				<p ion-text text-wrap>Please Enter Types of Experience</p>\n\n			</ion-item>\n\n	    <!--Types of Experience END-->\n\n	    <!--Qualification START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Qualification</ion-label>\n\n	      <ion-input formControlName="qualification" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Qualification END-->\n\n	    <!--Description START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Description</ion-label>\n\n	      <ion-input formControlName="description" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Description END-->\n\n	    <!--Services START-->\n\n			<ion-item>\n\n	      <ion-label stacked color="transparent">Other Related Services</ion-label>\n\n	      <ion-input formControlName="otherservice" type="text"></ion-input>\n\n	    </ion-item>\n\n	    <!--Services END-->\n\n	    <div class="submit-btn">\n\n				<button color="dark" ion-button block  type="submit" [disabled]="_profileForm2.invalid">Save</button>\n\n			</div>\n\n	  </div>\n\n	   </form>\n\n  </ion-list>\n\n  <ion-grid *ngSwitchCase="\'photos\'">\n\n  	<ion-row>\n\n  		<button ion-button block (click)="CaptureImage()" color="secondary">\n\n  			<ion-icon name="ios-cloud-upload"></ion-icon>&nbsp;&nbsp;\n\n  			Upload Photos\n\n  		</button>\n\n  	</ion-row>\n\n	  <form method="post" [formGroup]="_profileForm3" (submit)="uploadImage()">\n\n		 	<ion-row>\n\n		    <ion-col col-6 *ngFor="let profile_images of profile3">\n\n		    	<ion-input type="hidden" formControlName="seller_id" value={{profile_images.seller_id}}></ion-input>\n\n	          <img src="http://162.144.41.156/~izaapinn/agdemo/admin/uploads/seller/{{profile_images.image_name}}" onError="this.src=\'../assets/imgs/dummy_img.jpg\';" />\n\n	      </ion-col>\n\n	    </ion-row>\n\n	    <ion-row class="upload-images">\n\n		  	<ion-col class="images" col-6 *ngFor="let img of user_photo;let i = index;">\n\n		  		<button (click)="_removePhoto(i)" ion-button color="danger"><ion-icon name="trash"></ion-icon></button>\n\n		  		<img src="{{img}}" style="height:100px;width:100%">	  		\n\n		  	</ion-col>\n\n		  </ion-row>\n\n		  <ion-row>\n\n		  	<button ion-button block color="dark" type="submit">Save</button>\n\n		  </ion-row>\n\n	  </form>\n\n	</ion-grid>\n\n </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_events_events__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_commonService__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_globalVars__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import { Platform } from 'ionic-angular';
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
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
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
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__providers_globalVars__["a" /* GlobalVars */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__providers_commonService__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                //Platform,
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_events_events__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(207);
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
        this.app.viewWillEnter.subscribe(function () {
            _this.user = _this.globalvars.getUserdata();
            console.log(_this.user);
            if (_this.user != null) {
                _this.pages = [
                    { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-cog' },
                    { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_5__pages_events_events__["b" /* EventsPage */], icon: 'ios-flag' },
                    { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */], icon: 'ios-person' },
                    { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'ios-power' }
                ];
            }
            else {
                _this.pages = [
                    { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-cog' },
                    { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_5__pages_events_events__["b" /* EventsPage */], icon: 'ios-flag' },
                    { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'ios-power' }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src="assets/imgs/logo.png">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <div *ngFor="let p of pages" >\n        <button menuClose ion-item *ngIf="p.title!=\'Logout\'" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n        </button>\n        <button menuClose ion-item *ngIf="p.title==\'Logout\'" (click)="_logout()">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n        </button>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_globalVars__["a" /* GlobalVars */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "http://162.144.41.156/~izaapinn/agdemo/Webservice/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\IZ-Nirmal\myagrow\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IZ-Nirmal\myagrow\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(285);
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
    CommonService.prototype.getCurrentCity = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get('https://api.ipdata.co', options).map(function (res) { return res.json(); }).toPromise();
    };
    CommonService.prototype.getWeather = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //http:api.openweathermap.org/data/2.5/weather?q=".$city.",".$country."&APPID=da7f37c0af468057b3501d021fbd6c0f
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + data.latitude + '&lon=' + data.longitude + '&appid=' + "da7f37c0af468057b3501d021fbd6c0f" + '&units=imperial', options).map(function (res) { return res.json(); }).toPromise();
        // return this.http.get('http://api.wunderground.com/api/c6dc8e785d943109/conditions/q/AZ/'+city+'.json',options).map(res => res.json()).toPromise();
    };
    CommonService.prototype.getCategory = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'users/category', options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.getSearchRecords = function (data) {
        console.log(data.keywords);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'users/search_records?cat=' + data.category + '&loc=' + data.location + '&key=' + data.keywords, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService.prototype.saveimage = function (imagedata) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(apiUrl + 'users/save_image', imagedata, options).map(function (res) { return res.json(); })
            .toPromise();
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
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

},[209]);
//# sourceMappingURL=main.js.map