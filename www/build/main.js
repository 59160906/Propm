webpackJsonp([10],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/createclass/createclass.module": [
		270,
		7
	],
	"../pages/joinclass/joinclass.module": [
		271,
		6
	],
	"../pages/login-t/login-t.module": [
		272,
		9
	],
	"../pages/login/login.module": [
		273,
		5
	],
	"../pages/register-t/register-t.module": [
		274,
		4
	],
	"../pages/register/register.module": [
		275,
		3
	],
	"../pages/student-home/student-home.module": [
		276,
		2
	],
	"../pages/student/student.module": [
		277,
		1
	],
	"../pages/teacher-home/teacher-home.module": [
		278,
		8
	],
	"../pages/teacher/teacher.module": [
		279,
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
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.Student = function () {
        this.navCtrl.push("StudentPage");
    };
    HomePage.prototype.teacher = function () {
        this.navCtrl.push("TeacherPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            ระบบเช็คชื่อ\n        </ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item (click)="Student()">\n            <img item-start src="assets/imgs/11.png">\n\n        </ion-item>\n        <div text-center>\n            <h2>Student</h2>\n        </div>\n    </ion-list><br>\n    <ion-list>\n\n        <ion-item (click)="teacher()">\n\n            <img item-start src="assets/imgs/22.png">\n\n        </ion-item>\n        <div text-center>\n            <h2>Teacher</h2>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginTPage; });
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
 * Generated class for the LoginTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginTPage = /** @class */ (function () {
    function LoginTPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginTPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginTPage');
    };
    LoginTPage.prototype.goTeacherhome = function () {
        this.navCtrl.setRoot("TeacherHomePage");
    };
    LoginTPage.prototype.Home = function () {
        this.navCtrl.push("HomePage");
    };
    LoginTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-t',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\login-t\login-t.html"*/'<!--\n  Generated template for the LoginTPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n        <button ion-button style="float:right" (click)="Home()">close</button>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n    </ion-list>\n    <div padding>\n        <button ion-button color="primary" (click)="goTeacherhome()" block>Sign In</button>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\login-t\login-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginTPage);
    return LoginTPage;
}());

//# sourceMappingURL=login-t.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherHomePage; });
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
        this.navCtrl.push("CreateclassPage");
    };
    TeacherHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher-home',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\teacher-home\teacher-home.html"*/'<!--\n  Generated template for the TeacherHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button style="float:left">ข้อมูล</button>\n        <ion-title>\n            Teacher\n        </ion-title>\n        <button ion-button style="float:right" (click)="gocreateclass()"><ion-icon name="add-circle"></ion-icon></button>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h3>รายวิชา</h3>\n    <div text-center align-items-center>\n        <button ion-button style="float:center">ok</button>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\teacher-home\teacher-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TeacherHomePage);
    return TeacherHomePage;
}());

//# sourceMappingURL=teacher-home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_teacher_home_teacher_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_t_login_t__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_createclass_createclass__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_joinclass_joinclass__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(284);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_teacher_home_teacher_home__["a" /* TeacherHomePage */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_t_login_t__["a" /* LoginTPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_createclass_createclass__["a" /* CreateclassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_joinclass_joinclass__["a" /* JoinclassPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
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
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__pages_teacher_home_teacher_home__["a" /* TeacherHomePage */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_t_login_t__["a" /* LoginTPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_createclass_createclass__["a" /* CreateclassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_joinclass_joinclass__["a" /* JoinclassPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateclassPage; });
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
            selector: 'page-createclass',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\createclass\createclass.html"*/'<!--\n  Generated template for the CreateclassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>สร้างห้องเรียน</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-content>\n            <ion-item>\n                <ion-input type="text" placeholder="รหัสวิชา"></ion-input>\n                <br>\n                <ion-input type="text" placeholder="ชื่อวิชา"></ion-input>\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n    <br>\n    <div text-center align-items-center>\n        <button ion-button style="float:center">สร้างห้องเรียน</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\createclass\createclass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CreateclassPage);
    return CreateclassPage;
}());

//# sourceMappingURL=createclass.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinclassPage; });
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
            selector: 'page-joinclass',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\joinclass\joinclass.html"*/'<!--\n  Generated template for the JoinclassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>เข้าร่วมชั้นเรียน</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n\n\n        <ion-card-content>\n            <ion-item>\n                <ion-input type="text" placeholder="รหัสเข้าชั้นเรียน"></ion-input>\n            </ion-item>\n        </ion-card-content>\n\n    </ion-card>\n    <br>\n    <div text-center align-items-center>\n        <button ion-button style="float:center">เข้าร่วมชั้นเรียน</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\joinclass\joinclass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], JoinclassPage);
    return JoinclassPage;
}());

//# sourceMappingURL=joinclass.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Home = function () {
        this.navCtrl.push("HomePage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n        <button ion-button style="float:right" (click)="Home()">close</button>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n    </ion-list>\n    <div padding>\n        <button ion-button color="primary" block>Sign In</button>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goStudent = function () {
        this.navCtrl.setRoot("StudentHomePage");
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Register</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label>ชื่อนำ</ion-label>\n        <ion-select>\n            <ion-option value="m">นาย</ion-option>\n            <ion-option value="miss">นางสาว</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>ชื่อ</ion-label>\n        <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label fixed>คณะ</ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>สาขา</ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="Email" value="xxx@xxxx.xxx"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label fixed>confirm Password</ion-label>\n        <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <div text-center align-items-center>\n        <button ion-button style="float:center" (click)="goStudent()">ok</button>\n    </div>\n    <div padding>\n        <button ion-button color="primary" block>back</button>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MONAZA555\Desktop\NextflowApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map