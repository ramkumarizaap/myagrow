webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(278);
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
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=commonService.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(100);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(279);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_commonService__ = __webpack_require__(100);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["b" /* ModalContentPage */],
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
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventModalContentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_commonService__["a" /* CommonService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_events_events__ = __webpack_require__(200);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_events_events__["b" /* EventsPage */];
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "http://162.144.41.156/~izaapinn/agdemo/Webservice/";
//# sourceMappingURL=config.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map