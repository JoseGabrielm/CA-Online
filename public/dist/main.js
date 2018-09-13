(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n   /*This fills the remaining space, by using flexbox.  \r\n  Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.nav{\r\n    color:white;\r\n    \r\n    /* background-color: rgba(0, 128, 0, 0.753); */\r\n    background-color: #00d1b2;\r\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\r\n    height: auto;\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n    letter-spacing: .3px;\r\n}\r\n\r\n.footer{\r\n\r\n\r\n    background-color:#00d1b2bb;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar class='nav' color=\"primary\">\r\n    <div >\r\n\r\n        <button mat-button routerLink=\"/\" style=\"margin-top:5px\">\r\n            <!-- <mat-icon>home</mat-icon>  -->\r\n            <img width=\"60px\" height=\"60px\" src='imagens/logo.png'>\r\n            <h3> \r\n                {{title}}\r\n            </h3>\r\n        </button>\r\n    </div>\r\n\r\n    <span class=\"fill-remaining-space\"></span>\r\n\r\n    <div fxLayout=\"row\" fxHide fxShow.gt-sm>\r\n        <div *ngFor=\"let item of menuRoutes\"> \r\n            <button mat-button routerLink=\"{{item.route}}\">{{item.name}}</button>\r\n        \r\n        </div>\r\n        \r\n  \r\n<!-- \r\n        <button mat-button routerLink=\"/login\">Entrar</button>\r\n  \r\n        <button mat-button routerLink=\"/dashboard\">Dashboard</button> -->\r\n    </div>\r\n    <button mat-button [mat-menu-trigger-for]=\"menu\" fxShow fxHide.gt-sm>\r\n     <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n</mat-toolbar>\r\n<mat-menu x-position=\"before\" #menu>\r\n    <!-- <button mat-menu-item routerLink=\"/login\">Entrar</button>\r\n    <button mat-menu-item routerLink=\"/dashboard\">Dashboard</button> -->\r\n    <div *ngFor=\"let item of menuRoutes\"> \r\n        <button mat-menu-item routerLink=\"{{item.route}}\">{{item.name}}</button>\r\n    \r\n    </div>\r\n</mat-menu>\r\n\r\n<router-outlet>\r\n    \r\n</router-outlet>\r\n<ngx-loading-bar></ngx-loading-bar>\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<mat-toolbar class='footer' color=\"primary\"></mat-toolbar>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CA Online';
        this.menuRoutes = [
            { name: 'Login', route: '/login' },
            { name: 'Registrar', route: '/register' },
            { name: 'Sobre', route: '/register' },
        ];
        var a = 1;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_main_routes_main_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/main-routes/main-routes.module */ "./src/app/routes/main-routes/main-routes.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/esm5/ngx-loading-bar-router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _design_e_header_e_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./design/e-header/e-header.component */ "./src/app/design/e-header/e-header.component.ts");
/* harmony import */ var _design_e_header_e_header_title_e_header_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./design/e-header/e-header-title/e-header-title.component */ "./src/app/design/e-header/e-header-title/e-header-title.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _design_e_header_e_header_component__WEBPACK_IMPORTED_MODULE_12__["EHeaderComponent"],
                _design_e_header_e_header_title_e_header_title_component__WEBPACK_IMPORTED_MODULE_13__["EHeaderTitleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _routes_main_routes_main_routes_module__WEBPACK_IMPORTED_MODULE_4__["MainRoutesModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_8__["LoadingBarRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n.login-full-width{\r\n\r\n    width: 100%;\r\n}\r\n.login-content-lg{\r\n    margin: 20px;\r\n\r\n    margin-right: 400px;\r\n    margin-left: 400px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-e-header>\r\n        <app-e-header-title>Entrar</app-e-header-title>\r\n        </app-e-header>\r\n        <mat-sidenav-container class=\"example-container\" >\r\n\r\n<div [ngClass.lg]=\"'login-content-lg'\" >\r\n    <mat-card>\r\n        <mat-card-title></mat-card-title>\r\n        <mat-card-subtitle>Preencha as lacunas abaixo para acessar sua carteira online de vacinação</mat-card-subtitle>\r\n        <form class=\"login-form\">\r\n            <mat-form-field class=\"login-full-width\">\r\n                <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\r\n                [errorStateMatcher]=\"matcher\">\r\n                <mat-hint>Errors appear instantly!</mat-hint>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                </mat-error>\r\n                \r\n            </mat-form-field>\r\n            \r\n            \r\n            <mat-form-field class=\"login-full-width\">\r\n                <input matInput placeholder=\"Senha\" [formControl]=\"passwordFormControl\"\r\n                [errorStateMatcher]=\"matcher\"  [type]=\"hide ? 'password' : 'text'\">\r\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                \r\n                <mat-hint>Errors appear instantly!</mat-hint>\r\n                <mat-error *ngIf=\"passwordFormControl.hasError('email') && !passwordFormControl.hasError('required')\">\r\n                    Please enter a valid password address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                    Password is <strong>required</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n            \r\n            <mat-grid-list cols=\"4\" > \r\n                <mat-grid-tile >\r\n                    <button mat-raised-button color=\"primary\">Entrar</button>    \r\n                </mat-grid-tile>\r\n                <mat-grid-tile >  \r\n                    <button mat-raised-button color=\"accent\">Esqueci Minha senha</button>    \r\n                </mat-grid-tile>\r\n                \r\n            </mat-grid-list>\r\n            \r\n        </form>\r\n    </mat-card>\r\n</div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.hide = true;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n.login-full-width{\r\n\r\n    width: 100%;\r\n}\r\n.login-content-lg{\r\n    margin: 20px;\r\n\r\n     margin-right: 400px;\r\n    margin-left: 400px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-e-header>\r\n        <app-e-header-title>\r\n            Criar conta\r\n        </app-e-header-title>\r\n     \r\n    </app-e-header>\r\n    <mat-sidenav-container class=\"example-container\" >\r\n\r\n    <div  [ngClass.lg]=\"'login-content-lg'\" >\r\n        <mat-card>\r\n            <mat-card-title></mat-card-title>\r\n            <mat-card-subtitle>Preencha as lacunas abaixo para criar sua carteira online de vacinação</mat-card-subtitle>\r\n            <form class=\"login-form\">\r\n                <mat-form-field class=\"login-full-width\">\r\n                    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\r\n                    [errorStateMatcher]=\"matcher\">\r\n                    <mat-hint>Errors appear instantly!</mat-hint>\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                        Email is <strong>required</strong>\r\n                    </mat-error>\r\n                    \r\n                </mat-form-field>\r\n                \r\n                \r\n                <mat-form-field class=\"login-full-width\">\r\n                    <input matInput placeholder=\"Senha\" [formControl]=\"passwordFormControl\"\r\n                    [errorStateMatcher]=\"matcher\"  [type]=\"hide ? 'password' : 'text'\">\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                    \r\n                    <mat-hint>Errors appear instantly!</mat-hint>\r\n                    <mat-error *ngIf=\"passwordFormControl.hasError('email') && !passwordFormControl.hasError('required')\">\r\n                        Please enter a valid password address\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                        Password is <strong>required</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"login-full-width\">\r\n                        <input matInput placeholder=\"Senha\" [formControl]=\"passwordFormControl\"\r\n                        [errorStateMatcher]=\"matcher\"  [type]=\"hide ? 'password' : 'text'\">\r\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                        \r\n                        <mat-hint>Errors appear instantly!</mat-hint>\r\n                        <mat-error *ngIf=\"passwordFormControl.hasError('email') && !passwordFormControl.hasError('required')\">\r\n                            Please enter a valid password address\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                            Password is <strong>required</strong>\r\n                        </mat-error>\r\n                </mat-form-field>\r\n\r\n\r\n                <mat-form-field>\r\n                        <input placeholder=\"Data de nascimento\" matInput [matDatepicker]=\"myDatepicker\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #myDatepicker></mat-datepicker>\r\n                        <!-- <mat-hint>Data de nascimento!</mat-hint> -->\r\n\r\n                </mat-form-field>\r\n                <div >\r\n                    \r\n                    <mat-form-field>\r\n                        <mat-select placeholder='Estado' [(value)]=\"selected\">\r\n                            <mat-option>None</mat-option>\r\n                            <mat-option value=\"option1\">Option 1</mat-option>\r\n                            <mat-option value=\"option2\">Option 2</mat-option>\r\n                            <mat-option value=\"option3\">Option 3</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-select placeholder='Cidade' [(value)]=\"selected\">\r\n                            <mat-option>None</mat-option>\r\n                            <mat-option value=\"option1\">Option 1</mat-option>\r\n                            <mat-option value=\"option2\">Option 2</mat-option>\r\n                            <mat-option value=\"option3\">Option 3</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <mat-grid-list cols=\"4\" > \r\n                    <mat-grid-tile >\r\n                        <button mat-raised-button color=\"primary\">Entrar</button>    \r\n                    </mat-grid-tile>\r\n                    <mat-grid-tile >\r\n\r\n  \r\n                        <a  routerLink=''> Esqueci Minha Senha</a>\r\n                    </mat-grid-tile>\r\n                    \r\n                </mat-grid-list>\r\n                \r\n            </form>\r\n        </mat-card>\r\n</div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.hide = true;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/design/e-header/e-header-title/e-header-title.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/design/e-header/e-header-title/e-header-title.component.ts ***!
  \****************************************************************************/
/*! exports provided: EHeaderTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EHeaderTitleComponent", function() { return EHeaderTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EHeaderTitleComponent = /** @class */ (function () {
    function EHeaderTitleComponent() {
    }
    EHeaderTitleComponent.prototype.ngOnInit = function () {
    };
    EHeaderTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-e-header-title',
            template: "\n    <p class='e-header-title'>\n        <ng-content></ng-content>\n    </p>\n  ",
            styles: [
                "\n\n.e-header-title{\n    margin:0;\n    padding:0;\n    color:white;\n    padding:1em;\n}\n\n"
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EHeaderTitleComponent);
    return EHeaderTitleComponent;
}());



/***/ }),

/***/ "./src/app/design/e-header/e-header.component.css":
/*!********************************************************!*\
  !*** ./src/app/design/e-header/e-header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".e-header{\r\n\r\n    /* background-color: rgba(0, 128, 0, 0.753); */\r\n    background-color: #00d1b2;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/design/e-header/e-header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/design/e-header/e-header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='e-header'>\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/design/e-header/e-header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/design/e-header/e-header.component.ts ***!
  \*******************************************************/
/*! exports provided: EHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EHeaderComponent", function() { return EHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EHeaderComponent = /** @class */ (function () {
    function EHeaderComponent() {
    }
    EHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EHeaderComponent.prototype, "contents", void 0);
    EHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-e-header',
            template: __webpack_require__(/*! ./e-header.component.html */ "./src/app/design/e-header/e-header.component.html"),
            styles: [__webpack_require__(/*! ./e-header.component.css */ "./src/app/design/e-header/e-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EHeaderComponent);
    return EHeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.home-content{\r\n    margin:3em;\r\n    padding:2em;\r\n\r\n}\r\n\r\n.gtile{\r\n    margin:30px;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-e-header>\r\n    <app-e-header-title>\r\n            <div style='text-align: center; font-weight: 300;padding:50px;'>\r\n                    <h1 style='font-size:56px!important;\r\n                        font: 400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;\r\n                        ' >\r\n        \r\n                            Carteira de Vacinação Online\r\n                        </h1>\r\n                        <h2 style='font-size: 18px;\r\n                        font-weight: 300;\r\n                        line-height: 28px;' > \r\n                                Saia do passado, tenha acesso a sua carterinha de vacinação a qualquer monento!\r\n                        </h2>\r\n       \r\n                \r\n                        <button mat-raised-button routerLink='/login' > Começar a aventura!</button>   \r\n                    </div>\r\n        \r\n      \r\n\r\n    </app-e-header-title>\r\n\r\n        \r\n</app-e-header>\r\n<mat-sidenav-container class=\"example-container\">\r\n\r\n  \r\n    <mat-grid-list class='gtile' cols=\"2\" rowHeight=\"2:1\">\r\n        <mat-grid-tile>\r\n\r\n                <img \r\n                src='/imagens/o-medico-de-ontem-de-hoje-e-do-futuro-media.png'\r\n                >\r\n        </mat-grid-tile>\r\n        \r\n        <mat-grid-tile>\r\n            <mat-card>\r\n                <mat-card-content>\r\n\r\n\r\n                    \r\n                    Perdeu a carterinha de vacinação e precisa tomar a vacina da febre amarela? A orientação da Anvisa (Agência Nacional de Vigilância\r\n                    Sanitária) é que a pessoa entre em contato com o local onde foi realizada a vacinação para o resgate da 2ª\r\n                    via. Em caso de dúvida ou impossibilidade de adquirir a carteira de vacinação, vale procurar o Programa Nacional\r\n                    de Imunização/ Ministério da Saúde. Esse setor é o responsável para avaliação e encaminhamento dos questionamentos\r\n                    das atividades de vacinação das unidades de saúde. Muita gente também não se lembra se já tomou ou não a\r\n                    vacina da febre amarela. Na dúvida, a recomendação é se imunizar novamente. Vale destacar que a campanha\r\n                    de febre amarela é preventiva e voltada aos moradores da zona norte de São Paulo. A ação começou no dia 21\r\n                    de outubro, após um macaco ser encontrado morto no Horto Florestal vítima de febre amarela. Dose única para\r\n                    toda a vida A vacina contra a febre amarela é a melhor forma de se prevenir da doença, e uma única dose é\r\n                    o suficiente para se proteger por toda a vida. Mas nem todos devem tomar. O imunizante não é indicado para\r\n                    gestantes, mulheres amamentando crianças com até 6 meses e pessoas imunodeprimidas, como pacientes em tratamento\r\n                    quimioterápico, radioterápico ou com corticoides em doses elevadas (portadores de Lúpus, por exemplo). Mais\r\n                    de 500 mil se imunizaram Na quarta-feira (1º), a meta da primeira etapa da campanha, que era de vacinar moradores\r\n                    da região do entorno dos parques do Horto, Cantareira e Anhanguera, foi batida. Somente na quinta-feira (2),\r\n                    feriado de Finados, 34.222 pessoas se vacinaram nas 37 UBSs (Unidades Básicas de Saúde), que atenderam até\r\n                    as 14h. Até agora, 539.949 moradores da zona norte foram vacinados, segundo a secretaria de saúde. Vale ressaltar\r\n                    que as ações de rotina — vacinação para pessoas que precisam viajar para áreas de risco, seguem nos demais\r\n                    postos da cidade. Veja a lista completa aqui\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n        \r\n        <br><br><br>\r\n\r\n        <mat-grid-tile>\r\n            <mat-card>\r\n                <mat-card-content>\r\n\r\n\r\n                    \r\n                    Perdeu a carterinha de vacinação e precisa tomar a vacina da febre amarela? A orientação da Anvisa (Agência Nacional de Vigilância\r\n                    Sanitária) é que a pessoa entre em contato com o local onde foi realizada a vacinação para o resgate da 2ª\r\n                    via. Em caso de dúvida ou impossibilidade de adquirir a carteira de vacinação, vale procurar o Programa Nacional\r\n                    de Imunização/ Ministério da Saúde. Esse setor é o responsável para avaliação e encaminhamento dos questionamentos\r\n                    das atividades de vacinação das unidades de saúde. Muita gente também não se lembra se já tomou ou não a\r\n                    vacina da febre amarela. Na dúvida, a recomendação é se imunizar novamente. Vale destacar que a campanha\r\n                    de febre amarela é preventiva e voltada aos moradores da zona norte de São Paulo. A ação começou no dia 21\r\n                    de outubro, após um macaco ser encontrado morto no Horto Florestal vítima de febre amarela. Dose única para\r\n                    toda a vida A vacina contra a febre amarela é a melhor forma de se prevenir da doença, e uma única dose é\r\n                    o suficiente para se proteger por toda a vida. Mas nem todos devem tomar. O imunizante não é indicado para\r\n                    gestantes, mulheres amamentando crianças com até 6 meses e pessoas imunodeprimidas, como pacientes em tratamento\r\n                    quimioterápico, radioterápico ou com corticoides em doses elevadas (portadores de Lúpus, por exemplo). Mais\r\n                    de 500 mil se imunizaram Na quarta-feira (1º), a meta da primeira etapa da campanha, que era de vacinar moradores\r\n                    da região do entorno dos parques do Horto, Cantareira e Anhanguera, foi batida. Somente na quinta-feira (2),\r\n                    feriado de Finados, 34.222 pessoas se vacinaram nas 37 UBSs (Unidades Básicas de Saúde), que atenderam até\r\n                    as 14h. Até agora, 539.949 moradores da zona norte foram vacinados, segundo a secretaria de saúde. Vale ressaltar\r\n                    que as ações de rotina — vacinação para pessoas que precisam viajar para áreas de risco, seguem nos demais\r\n                    postos da cidade. Veja a lista completa aqui\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile>\r\n\r\n                <img \r\n                src='/imagens/o-medico-de-ontem-de-hoje-e-do-futuro-media.png'\r\n                >\r\n        </mat-grid-tile>\r\n        \r\n    </mat-grid-list>\r\n\r\n    <mat-card class='home-content'>\r\n\r\n\r\n        <mat-card-title>\r\n                Alguma coisa\r\n\r\n\r\n\r\n            <!-- This fills the remaining space of the current row -->\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n                blblavbl\r\n        </mat-card-subtitle>\r\n        <mat-card-content>\r\n                <div >\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n            </div>\r\n\r\n        </mat-card-content>\r\n\r\n    </mat-card>\r\n\r\n\r\n    \r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routes/main-routes/main-routes.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/main-routes/main-routes.module.ts ***!
  \**********************************************************/
/*! exports provided: MainRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutesModule", function() { return MainRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'teste', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];
var MainRoutesModule = /** @class */ (function () {
    function MainRoutesModule() {
    }
    MainRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], MainRoutesModule);
    return MainRoutesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\manager\Desktop\tcc\ca-online\resources\assets\src\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map