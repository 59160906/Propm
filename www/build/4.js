webpackJsonp([4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTPageModule", function() { return RegisterTPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_t__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterTPageModule = /** @class */ (function () {
    function RegisterTPageModule() {
    }
    RegisterTPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_t__["a" /* RegisterTPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_t__["a" /* RegisterTPage */]),
            ],
        })
    ], RegisterTPageModule);
    return RegisterTPageModule;
}());

//# sourceMappingURL=register-t.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterTPage = /** @class */ (function () {
    function RegisterTPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterTPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterTPage');
    };
    RegisterTPage.prototype.goTeacher = function () {
        this.navCtrl.setRoot("TeacherHomePage");
    };
    RegisterTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-t',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\register-t\register-t.html"*/'<!--\n  Generated template for the RegisterTPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Register</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label>ชื่อนำ</ion-label>\n        <ion-select>\n            <ion-option value="m">นาย</ion-option>\n            <ion-option value="mr">นาง</ion-option>\n            <ion-option value="miss">นางสาว</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>ชื่อ</ion-label>\n        <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label fixed>คณะ</ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="Email" value="xxx@xxxx.xxx"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label fixed>confirm Password</ion-label>\n        <ion-input type="password"></ion-input>\n    </ion-item>\n    <div text-center align-items-center>\n        <button ion-button style="float:center" (click)="goTeacher()">ok</button>\n    </div>\n    <div padding>\n        <button ion-button color="primary" block>back</button>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\register-t\register-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterTPage);
    return RegisterTPage;
}());

//# sourceMappingURL=register-t.js.map

/***/ })

});
//# sourceMappingURL=4.js.map