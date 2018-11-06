webpackJsonp([10],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateclassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CreateclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateclassPage = /** @class */ (function () {
    function CreateclassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateclassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateclassPage');
    };
    CreateclassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createclass',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\createclass\createclass.html"*/'<!--\n\n  Generated template for the CreateclassPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>สร้างห้องเรียน</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="รหัสวิชา"></ion-input>\n\n                <br>\n\n                <ion-input type="text" placeholder="ชื่อวิชา"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-card-content>\n\n\n\n    </ion-card>\n\n    <br>\n\n    <div text-center align-items-center>\n\n        <button ion-button style="float:center">สร้างห้องเรียน</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\createclass\createclass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreateclassPage);
    return CreateclassPage;
}());

//# sourceMappingURL=createclass.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinclassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the JoinclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoinclassPage = /** @class */ (function () {
    function JoinclassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JoinclassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoinclassPage');
    };
    JoinclassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joinclass',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\joinclass\joinclass.html"*/'<!--\n\n  Generated template for the JoinclassPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>เข้าร่วมชั้นเรียน</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n\n\n\n\n\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="รหัสเข้าชั้นเรียน"></ion-input>\n\n            </ion-item>\n\n        </ion-card-content>\n\n\n\n    </ion-card>\n\n    <br>\n\n    <div text-center align-items-center>\n\n        <button ion-button style="float:center">เข้าร่วมชั้นเรียน</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\joinclass\joinclass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], JoinclassPage);
    return JoinclassPage;
}());

//# sourceMappingURL=joinclass.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_home_teacher_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_checklist_service_checklist_service__ = __webpack_require__(40);
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
 * Generated class for the LoginTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginTPage = /** @class */ (function () {
    function LoginTPage(navCtrl, navParams, checklistsevice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checklistsevice = checklistsevice;
        this.alertCtrl = alertCtrl;
    }
    LoginTPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginTPage');
    };
    LoginTPage.prototype.Home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginTPage.prototype.login = function (id, password) {
        var _this = this;
        this.checklistsevice.loginteacher(id, password).subscribe(function (response) {
            if (response.data != null)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__teacher_home_teacher_home__["a" /* TeacherHomePage */]);
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Can not sign in',
                    message: 'email or password incorrect',
                    buttons: [
                        {
                            text: 'ok',
                            role: 'cancel',
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    LoginTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-t',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\login-t\login-t.html"*/'<!--\n\n  Generated template for the LoginTPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Login</ion-title>\n\n        <button ion-button style="float:right" (click)="Home()">close</button>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input type="text" [value]="id" [(ngModel)]="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [value]="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n        <button ion-button color="primary" block (click)="login(id,password);">Sign In</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\login-t\login-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_checklist_service_checklist_service__["a" /* ChecklistServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginTPage);
    return LoginTPage;
}());

//# sourceMappingURL=login-t.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(108);
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
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentPage = /** @class */ (function () {
    function StudentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentPage');
    };
    StudentPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    StudentPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    StudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\student\student.html"*/'<!--\n\n  Generated template for the StudentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Student</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div text-center align-items-center>\n\n        <button ion-button (click)="login()">Login</button>\n\n    </div>\n\n    <div text-center align-items-center>\n\n        <button ion-button (click)="register()">Register</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\student\student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StudentPage);
    return StudentPage;
}());

//# sourceMappingURL=student.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_home_student_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_checklist_service_checklist_service__ = __webpack_require__(40);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, checklistsevice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checklistsevice = checklistsevice;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.loginStudent = function (id, password) {
        var _this = this;
        console.log(id);
        console.log(password);
        this.checklistsevice.loginstudent(id, password).subscribe(function (response) {
            if (response.data != null)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__student_home_student_home__["a" /* StudentHomePage */]);
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Can not sign in',
                    message: 'email or password incorrect',
                    buttons: [
                        {
                            text: 'ok',
                            role: 'cancel',
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Login</ion-title>\n\n        <button ion-button style="float:right" (click)="Home()">close</button>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input type="text" [value]="id" [(ngModel)]="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [value]="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n        <button ion-button color="primary" block (click)="loginStudent(id,password);">Sign In</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_checklist_service_checklist_service__["a" /* ChecklistServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_home_student_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_checklist_service_checklist_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, checklistservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.checklistservice = checklistservice;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (m, id, name, fauclty, major, email, password, confirmPassword) {
        var _this = this;
        if (m == null || id == null || name == null || fauclty == null || major == null || email == null || password == null || confirmPassword == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Can not Register',
                message: 'Please input information agian',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                    }
                ]
            });
            alert_1.present();
        }
        else if (password != confirmPassword) {
            var alert_2 = this.alertCtrl.create({
                title: 'Can not Register',
                message: 'Enter the password synchronization',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                    }
                ]
            });
            alert_2.present();
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'สมัครใช้งานสำเร็จ',
                message: 'เราจะนำคุณเข้าสู่หน้า เข้าสู่ระบบ',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                        handler: function () {
                            _this.addUser(m, id, name, fauclty, major, email, password);
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    RegisterPage.prototype.addUser = function (m, id, name, fauclty, major, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checklistservice.createUserStudent(m, id, name, fauclty, major, email, password)];
                    case 1:
                        _a.sent();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__student_home_student_home__["a" /* StudentHomePage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Register</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label>ชื่อนำ</ion-label>\n\n        <ion-select [(ngModel)]="m">\n\n            <ion-option value="นาย">นาย</ion-option>\n\n            <ion-option value="นางสาว">นางสาว</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label fixed>รหัสนิสิต</ion-label>\n\n        <ion-input type="text" [value]="id" [(ngModel)]="id"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label fixed>ชื่อ</ion-label>\n\n        <ion-input type="text" [value]="name" [(ngModel)]="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>คณะ</ion-label>\n\n        <ion-input type="text" [value]="fauclty" [(ngModel)]="fauclty"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label fixed>สาขา</ion-label>\n\n        <ion-input type="text" [value]="major" [(ngModel)]="major"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="Email" placeholder="xxx@xxxx.xxx" [value]="email" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>รหัสผ่าน</ion-label>\n\n        <ion-input type="password" [value]="password" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>ยืนยันรหัสผ่าน </ion-label>\n\n        <ion-input type="password" [value]="confirmPassword" [(ngModel)]="confirmPassword"></ion-input>\n\n    </ion-item>\n\n\n\n    <div text-center align-items-center>\n\n        <button ion-button style="float:center" (click)="register(m,id,name,fauclty,major,email,password,confirmPassword)">ok</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_checklist_service_checklist_service__["a" /* ChecklistServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_t_login_t__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_t_register_t__ = __webpack_require__(110);
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
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherPage = /** @class */ (function () {
    function TeacherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeacherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherPage');
    };
    TeacherPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_t_login_t__["a" /* LoginTPage */]);
    };
    TeacherPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_t_register_t__["a" /* RegisterTPage */]);
    };
    TeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\teacher\teacher.html"*/'<!--\n\n  Generated template for the TeacherPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Teacher</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div text-center align-items-center>\n\n        <button ion-button (click)="login()">Login</button>\n\n    </div>\n\n    <div text-center align-items-center>\n\n        <button ion-button (click)="register()">Register</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\teacher\teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TeacherPage);
    return TeacherPage;
}());

//# sourceMappingURL=teacher.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_home_teacher_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_checklist_service_checklist_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the RegisterTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterTPage = /** @class */ (function () {
    function RegisterTPage(navCtrl, navParams, alertCtrl, checklistservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.checklistservice = checklistservice;
    }
    RegisterTPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterTPage');
    };
    RegisterTPage.prototype.resigterTeacher = function (m, name, fauclty, email, password, confirmPassword) {
        var _this = this;
        if (m == null || name == null || fauclty == null || email == null || password == null || confirmPassword == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Can not Register',
                message: 'Please input information agian',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                    }
                ]
            });
            alert_1.present();
        }
        else if (password != confirmPassword) {
            var alert_2 = this.alertCtrl.create({
                title: 'Can not Register',
                message: 'Enter the password synchronization',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                    }
                ]
            });
            alert_2.present();
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'สมัครใช้งานสำเร็จ',
                message: 'เราจะนำคุณเข้าสู่หน้า เข้าสู่ระบบ',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                        handler: function () {
                            _this.addUser(m, name, fauclty, email, password);
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    RegisterTPage.prototype.addUser = function (m, name, fauclty, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checklistservice.createUserTeacher(m, name, fauclty, email, password)];
                    case 1:
                        _a.sent();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__teacher_home_teacher_home__["a" /* TeacherHomePage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-t',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\register-t\register-t.html"*/'<!--\n\n  Generated template for the RegisterTPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Register</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label>ชื่อนำ</ion-label>\n\n        <ion-select [(ngModel)]="m">\n\n            <ion-option value="นาย">นาย</ion-option>\n\n            <ion-option value="นาง">นาง</ion-option>\n\n            <ion-option value="นางสาว">นางสาว</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>ชื่อ</ion-label>\n\n        <ion-input type="text" [value]="name" [(ngModel)]="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>คณะ</ion-label>\n\n        <ion-input type="text" [value]="faculty" [(ngModel)]="faculty"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="Email" placeholder="xxx@xxxx.xxx" [value]="email" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>รหัสผ่าน</ion-label>\n\n        <ion-input type="password" [value]="password" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>ยืนยันรหัสผ่าน </ion-label>\n\n        <ion-input type="password" [value]="confirmPassword" [(ngModel)]="confirmPassword"></ion-input>\n\n    </ion-item>\n\n    <div text-center align-items-center>x\n\n        <button ion-button style="float:center" (click)="resigterTeacher(m,name,fauclty,email,password,confirmPassword)">ok</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\register-t\register-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_checklist_service_checklist_service__["a" /* ChecklistServiceProvider */]])
    ], RegisterTPage);
    return RegisterTPage;
}());

//# sourceMappingURL=register-t.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/createclass/createclass.module": [
		281,
		9
	],
	"../pages/joinclass/joinclass.module": [
		282,
		8
	],
	"../pages/login-t/login-t.module": [
		283,
		7
	],
	"../pages/login/login.module": [
		284,
		6
	],
	"../pages/register-t/register-t.module": [
		285,
		5
	],
	"../pages/register/register.module": [
		286,
		4
	],
	"../pages/student-home/student-home.module": [
		287,
		3
	],
	"../pages/student/student.module": [
		288,
		2
	],
	"../pages/teacher-home/teacher-home.module": [
		289,
		1
	],
	"../pages/teacher/teacher.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_teacher_home_teacher_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_t_login_t__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_createclass_createclass__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_joinclass_joinclass__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_t_register_t__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_student_student__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_student_home_student_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_teacher_teacher__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_checklist_service_checklist_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_teacher_home_teacher_home__["a" /* TeacherHomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_t_login_t__["a" /* LoginTPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_createclass_createclass__["a" /* CreateclassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_joinclass_joinclass__["a" /* JoinclassPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_t_register_t__["a" /* RegisterTPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_student_home_student_home__["a" /* StudentHomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_teacher_teacher__["a" /* TeacherPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/createclass/createclass.module#CreateclassPageModule', name: 'CreateclassPage', segment: 'createclass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joinclass/joinclass.module#JoinclassPageModule', name: 'JoinclassPage', segment: 'joinclass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-t/login-t.module#LoginTPageModule', name: 'LoginTPage', segment: 'login-t', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-t/register-t.module#RegisterTPageModule', name: 'RegisterTPage', segment: 'register-t', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-home/student-home.module#StudentHomePageModule', name: 'StudentHomePage', segment: 'student-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student.module#StudentPageModule', name: 'StudentPage', segment: 'student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-home/teacher-home.module#TeacherHomePageModule', name: 'TeacherHomePage', segment: 'teacher-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher/teacher.module#TeacherPageModule', name: 'TeacherPage', segment: 'teacher', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_teacher_home_teacher_home__["a" /* TeacherHomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_t_login_t__["a" /* LoginTPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_createclass_createclass__["a" /* CreateclassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_joinclass_joinclass__["a" /* JoinclassPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_t_register_t__["a" /* RegisterTPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_student_home_student_home__["a" /* StudentHomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_teacher_teacher__["a" /* TeacherPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_checklist_service_checklist_service__["a" /* ChecklistServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';



/*
  Generated class for the ChecklistServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChecklistServiceProvider = /** @class */ (function () {
    function ChecklistServiceProvider(http) {
        this.http = http;
        console.log('Hello ChecklistServiceProvider Provider');
    }
    ChecklistServiceProvider.prototype.loginstudent = function (id, password) {
        return this.http.get("http://localhost:8000/student/" + id + "/" + password).map(function (res) { return res.json(); });
    };
    ChecklistServiceProvider.prototype.loginteacher = function (id, password) {
        return this.http.get("http://localhost:8000/teacher/" + id + "/" + password).map(function (res) { return res.json(); });
    };
    ChecklistServiceProvider.prototype.createUserStudent = function (m, id, name, fauclty, major, email, password) {
        var data = {
            student_id: id,
            student_name: m + name,
            fauctly: fauclty,
            major: major,
            email: email,
            password: password
        };
        return this.http.post("http://localhost:8000/student/add", data).toPromise();
    };
    ChecklistServiceProvider.prototype.createUserTeacher = function (m, name, fauclty, email, password) {
        var data = {
            teacher_name: m + name,
            fauclty: fauclty,
            email: email,
            password: password,
        };
        return this.http.post("http://localhost:8000/teacher/add", data).toPromise();
    };
    ChecklistServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ChecklistServiceProvider);
    return ChecklistServiceProvider;
}());

//# sourceMappingURL=checklist-service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_student__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacher_teacher__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.Student = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_student__["a" /* StudentPage */]);
    };
    HomePage.prototype.teacher = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacher_teacher__["a" /* TeacherPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <div text-center>\n\n                <h1>ระบบเช็คชื่อ</h1>\n\n            </div>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item (click)="Student()">\n\n\n\n            <ion-card>\n\n                <img src="http://www.kobe11achillesheel.com/reviews/img/girl-21.png">\n\n            </ion-card>\n\n\n\n            <div text-center>\n\n                <h2>Student</h2>\n\n            </div>\n\n\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n        <ion-item (click)="teacher()">\n\n\n\n            <ion-card>\n\n                <img src="https://images.vexels.com/media/users/3/141633/isolated/preview/a2bf2ebaf3f1c560e74eaca740ff1918-curly-hair-woman-teacher-by-vexels.png">\n\n            </ion-card>\n\n\n\n            <div text-center>\n\n                <h2>Teacher</h2>\n\n            </div>\n\n\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createclass_createclass__ = __webpack_require__(103);
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
 * Generated class for the TeacherHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherHomePage = /** @class */ (function () {
    function TeacherHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeacherHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherHomePage');
    };
    TeacherHomePage.prototype.gocreateclass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createclass_createclass__["a" /* CreateclassPage */]);
    };
    TeacherHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher-home',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\teacher-home\teacher-home.html"*/'<!--\n\n  Generated template for the TeacherHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button style="float:left">ข้อมูล</button>\n\n        <ion-title>\n\n            Teacher\n\n        </ion-title>\n\n        <button ion-button style="float:right" (click)="gocreateclass()"><ion-icon name="add-circle"></ion-icon></button>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h3>รายวิชา</h3>\n\n    <div text-center align-items-center>\n\n        <button ion-button style="float:center">ok</button>\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\teacher-home\teacher-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TeacherHomePage);
    return TeacherHomePage;
}());

//# sourceMappingURL=teacher-home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joinclass_joinclass__ = __webpack_require__(104);
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
 * Generated class for the StudentHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentHomePage = /** @class */ (function () {
    function StudentHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudentHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentHomePage');
    };
    StudentHomePage.prototype.gojoinclass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__joinclass_joinclass__["a" /* JoinclassPage */]);
    };
    StudentHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student-home',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\student-home\student-home.html"*/'<!--\n\n  Generated template for the StudentHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button style="float:left">ข้อมูล</button>\n\n        <ion-title>\n\n            Student\n\n        </ion-title>\n\n        <button ion-button style="float:right" (click)="gojoinclass()"><ion-icon name="add-circle"></ion-icon></button>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>รายวิชา</h3>\n\n    <div text-center align-items-center>\n\n        <button ion-button style="float:center">ok</button>\n\n    </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\cc\checklistapplication\src\pages\student-home\student-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StudentHomePage);
    return StudentHomePage;
}());

//# sourceMappingURL=student-home.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map