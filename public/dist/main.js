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

/***/ "./src/app/Tools/city.pipe.ts":
/*!************************************!*\
  !*** ./src/app/Tools/city.pipe.ts ***!
  \************************************/
/*! exports provided: CityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityPipe", function() { return CityPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CityPipe = /** @class */ (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (cidades, EstadoID) {
        if (cidades)
            return cidades.filter(function (cidade) { return cidade.Estado == EstadoID; });
    };
    CityPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterByState'
        })
    ], CityPipe);
    return CityPipe;
}());



/***/ }),

/***/ "./src/app/Tools/city.service.ts":
/*!***************************************!*\
  !*** ./src/app/Tools/city.service.ts ***!
  \***************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.module */ "./src/app/api/api.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getEstados = function () {
        return this.http.get(_api_api_module__WEBPACK_IMPORTED_MODULE_2__["API_DEFAULT_URL"] + 'data/Estados.json');
    };
    CityService.prototype.getCidades = function () {
        return this.http.get(_api_api_module__WEBPACK_IMPORTED_MODULE_2__["API_DEFAULT_URL"] + 'data/Cidades.json');
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/api/api.module.ts":
/*!***********************************!*\
  !*** ./src/app/api/api.module.ts ***!
  \***********************************/
/*! exports provided: API_BASE_URL, API_DEFAULT_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DEFAULT_URL", function() { return API_DEFAULT_URL; });
var API_BASE_URL = 'http://localhost:8000/api/';
var API_DEFAULT_URL = 'http://localhost:8000/';


/***/ }),

/***/ "./src/app/api/interceptor/interceptor.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/api/interceptor/interceptor.module.ts ***!
  \*******************************************************/
/*! exports provided: HttpsRequestInterceptor, InterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorModule", function() { return InterceptorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor(meta) {
        this.meta = meta;
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var token = this.meta.getTag('name=csrf-token').content;
        var token2 = 'NOT FOUND';
        if (localStorage.getItem('token')) {
            token2 = 'Bearer ' + localStorage.getItem('token');
        }
        var dupReq = req.clone({
            headers: req.headers.set('X-Csrf-Token', token).
                set('Authorization', token2)
        });
        return next.handle(dupReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: HttpsRequestInterceptor,
                    multi: true,
                },
            ],
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "./src/app/api/services/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/api/services/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.module */ "./src/app/api/api.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function () {
        return this.http.get(_api_module__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"] + 'user');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n   /*This fills the remaining space, by using flexbox.  \n  Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.nav{\n    color:white;\n    \n    /* background-color: rgba(0, 128, 0, 0.753); */\n    background-color: #00d1b2;\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\n    height: auto;\n    text-transform: uppercase;\n    font-size: 18px;\n    letter-spacing: .3px;\n}\n\n.active{\n  /* /  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12); */\n   padding:1em;\n    background-color:rgba(0, 0, 0, 0.473);\n    border-bottom: 0.1em solid black;\n}\n\n.footer{\n\n\n    background-color:#00d1b2bb;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar class='nav' color=\"primary\">\n    <div >\n\n        <button  routerLinkActive=\"active\"  mat-button routerLink=\"/home\" style=\"margin-top:5px\">\n            <!-- <mat-icon>home</mat-icon>  -->\n            <img width=\"60px\" height=\"60px\" src='imagens/logo.png'>\n            <h3> \n                {{title}}\n            </h3>\n        </button>\n    </div>\n\n    <span class=\"fill-remaining-space\"></span>\n\n    <div fxLayout=\"row\" fxHide fxShow.gt-sm>\n        <div *ngIf=\"loginService.loggedIn|async ; else loggedOut\" >\n            <button mat-button routerLink=\"/logout\"> Sair </button>\n            <button mat-button routerLink=\"/dashboard\"> Dashboard </button>\n\n        </div>\n        <ng-template #loggedOut>\n                <button  routerLinkActive=\"active\" mat-button routerLink=\"/login\"> Login </button>\n            \n                <button  routerLinkActive=\"active\" mat-button routerLink=\"/register\"> Registrar </button>             \n        </ng-template>\n\n    </div>     \n  \n<!-- \n        <button mat-button routerLink=\"/login\">Entrar</button>\n  \n        <button mat-button routerLink=\"/dashboard\">Dashboard</button> -->\n    <button mat-button [mat-menu-trigger-for]=\"menu\" fxShow fxHide.gt-sm>\n     <mat-icon>menu</mat-icon>\n    </button>\n\n</mat-toolbar>\n<mat-menu x-position=\"before\" #menu>\n    <!-- <button mat-menu-item routerLink=\"/login\">Entrar</button>\n    <button mat-menu-item routerLink=\"/dashboard\">Dashboard</button> -->\n\n</mat-menu>\n\n<router-outlet>\n    \n</router-outlet>\n<ngx-loading-bar></ngx-loading-bar>\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<mat-toolbar class='footer' color=\"primary\"></mat-toolbar>"

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
/* harmony import */ var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/services/login.service */ "./src/app/auth/services/login.service.ts");
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
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.title = 'CA Online';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loginService.isLoggedIn();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _Tools_city_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Tools/city.pipe */ "./src/app/Tools/city.pipe.ts");
/* harmony import */ var _api_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./api/interceptor/interceptor.module */ "./src/app/api/interceptor/interceptor.module.ts");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard-admin/dashboard-admin.component */ "./src/app/dashboard/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var _dashboard_dashboard_applicator_dashboard_applicator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard-applicator/dashboard-applicator.component */ "./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.ts");
/* harmony import */ var _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/dashboard-user/dashboard-user.component */ "./src/app/dashboard/dashboard-user/dashboard-user.component.ts");
/* harmony import */ var _dashboard_dashboard_user_minha_carterinha_minha_carterinha_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard-user/minha-carterinha/minha-carterinha.component */ "./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.ts");
/* harmony import */ var _dashboard_dashboard_user_historico_historico_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard-user/historico/historico.component */ "./src/app/dashboard/dashboard-user/historico/historico.component.ts");
/* harmony import */ var _dashboard_dashboard_user_dados_dados_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard-user/dados/dados.component */ "./src/app/dashboard/dashboard-user/dados/dados.component.ts");
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
                _design_e_header_e_header_title_e_header_title_component__WEBPACK_IMPORTED_MODULE_13__["EHeaderTitleComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _Tools_city_pipe__WEBPACK_IMPORTED_MODULE_17__["CityPipe"],
                _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _dashboard_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_21__["DashboardAdminComponent"],
                _dashboard_dashboard_applicator_dashboard_applicator_component__WEBPACK_IMPORTED_MODULE_22__["DashboardApplicatorComponent"],
                _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_23__["DashboardUserComponent"],
                _dashboard_dashboard_user_minha_carterinha_minha_carterinha_component__WEBPACK_IMPORTED_MODULE_24__["MinhaCarterinhaComponent"],
                _dashboard_dashboard_user_historico_historico_component__WEBPACK_IMPORTED_MODULE_25__["HistoricoComponent"],
                _dashboard_dashboard_user_dados_dados_component__WEBPACK_IMPORTED_MODULE_26__["DadosComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _routes_main_routes_main_routes_module__WEBPACK_IMPORTED_MODULE_4__["MainRoutesModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_8__["LoadingBarRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderModule"],
                _api_interceptor_interceptor_module__WEBPACK_IMPORTED_MODULE_18__["InterceptorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-admin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-admin.guard.ts ***!
  \******************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(userService) {
        this.userService = userService;
    }
    AuthAdminGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AuthAdminGuard.prototype.check = function () {
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.nivel_acesso == 2; }));
    };
    AuthAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-applicator.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/auth-applicator.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthApplicatorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthApplicatorGuard", function() { return AuthApplicatorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthApplicatorGuard = /** @class */ (function () {
    function AuthApplicatorGuard(userService) {
        this.userService = userService;
    }
    AuthApplicatorGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AuthApplicatorGuard.prototype.check = function () {
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.nivel_acesso == 1; }));
    };
    AuthApplicatorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AuthApplicatorGuard);
    return AuthApplicatorGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/auth/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AuthGuard.prototype.check = function () {
        if (this.loginService.isLoggedIn())
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/guest.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/guest.guard.ts ***!
  \*************************************/
/*! exports provided: GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return GuestGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/auth/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestGuard = /** @class */ (function () {
    function GuestGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    GuestGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    GuestGuard.prototype.check = function () {
        if (this.loginService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        return true;
    };
    GuestGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GuestGuard);
    return GuestGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.login-form{\n    display: flex;\n    flex-direction: column;\n\n}\n.login-full-width{\n\n    width: 100%;\n}\n.login-content-lg{\n    margin: 20px;\n\n    margin-right: 400px;\n    margin-left: 400px;\n\n}"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-e-header>\n    <app-e-header-title>Entrar</app-e-header-title>\n</app-e-header>\n<mat-sidenav-container  [ngClass.lg]=\"'login-content-lg'\" class=\"example-container\">\n\n\n    <div >\n        <mat-card>\n            <mat-error *ngIf=\"formSubmitError.length > 0\">\n                {{formSubmitError}}\n            </mat-error>\n            <mat-card-title></mat-card-title>\n            <mat-card-subtitle>Preencha as lacunas abaixo para acessar sua carteira online de vacinação</mat-card-subtitle>\n            <form class=\"login-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\" #formDir=\"ngForm\">\n                <mat-form-field class=\"login-full-width\">\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n                    <mat-hint>Errors appear instantly!</mat-hint>\n                    <mat-error *ngIf=\"email.hasError('email') && !email.hasError('required')\">\n                        Please enter a valid email address\n                    </mat-error>\n                    <mat-error *ngIf=\"email.hasError('required')\">\n                        Email is <strong>required</strong>\n                    </mat-error>\n\n                </mat-form-field>\n\n\n                <mat-form-field class=\"login-full-width\">\n                    <input matInput placeholder=\"Senha\" formControlName=\"password\" [errorStateMatcher]=\"matcher\" [type]=\"hide ? 'password' : 'text'\">\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n                    <mat-hint>Errors appear instantly!</mat-hint>\n                    <mat-error *ngIf=\"password.hasError('email') && !password.hasError('required')\">\n                        Please enter a valid password address\n                    </mat-error>\n                    <mat-error *ngIf=\"password.hasError('required')\">\n                        Password is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-grid-list cols=\"3\">\n                    <mat-grid-tile>\n\n                        <button [disabled]=\"loginForm.invalid\" type='submit' mat-raised-button color=\"primary\">Entrar</button>\n                    </mat-grid-tile>\n                    <mat-grid-tile>\n                        <button routerLink='/home' mat-raised-button color=\"accent\">Esqueci Minha senha</button>\n                    </mat-grid-tile>\n\n                </mat-grid-list>\n\n            </form>\n        </mat-card>\n    </div>\n</mat-sidenav-container>"

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
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/auth/services/login.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // Import NgxUiLoaderService



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
    function LoginComponent(service, ngxService, router) {
        this.service = service;
        this.ngxService = ngxService;
        this.router = router;
        this.hide = true;
        this.matcher = new MyErrorStateMatcher();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formSubmitError = "";
        this.LoginData = {
            email: '',
            password: ''
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('user@gmail.com', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('user', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.loginForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.loginSucessful = function () {
    };
    LoginComponent.prototype.loginUnauthorized = function () {
        this.formSubmitError = "Email ou senha incorretos";
    };
    LoginComponent.prototype.onDestroy = function () {
        console.log('destroy);');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        this.LoginData = {
            email: this.email.value,
            password: this.password.value
        };
        this.service.doLogin(this.LoginData).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('token', data['token']);
            _this.service.isLoggedIn();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 1000 * 60).subscribe(function () {
                var _this = this;
                this.loginService.logout()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                    localStorage.removeItem('token');
                    console.log('tokken removed');
                    _this.loginService.isLoggedIn();
                }));
            });
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.error = error;
            switch (error.status) {
                case 401:
                    _this.loginUnauthorized();
                    break;
                default:
                    break;
            }
        });
        this.ngxService.stop();
        // TODO: Use EventEmitter with form value
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/logout/logout.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-e-header>\n  <app-e-header-title>Sair</app-e-header-title>\n</app-e-header>\n<mat-sidenav-container class=\"example-container\">\n\n\n  <div [ngClass.lg]=\"'login-content-lg'\">\n      <mat-card>\n        \n          <mat-card-content>\n\n            <div *ngIf='logoutMsg.length>0'>\n                <h3> {{logoutMsg}}</h3>\n            </div>\n          </mat-card-content>\n          \n      </mat-card>\n  </div>\n"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/auth/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(loginService) {
        this.loginService = loginService;
        this.logoutMsg = '';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginObs = this.loginService.logout()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            localStorage.removeItem('token');
            _this.loginService.isLoggedIn();
        })).
            subscribe(function (data) {
            console.log('logout ok');
            _this.logoutMsg = data['message'];
            //      localStorage.removeItem('token'); 
            //       this.loginService.isLoggedIn();
        }, function (errors) {
            _this.logoutMsg = errors['error']['message'];
            //      localStorage.removeItem('token');
            //     this.loginService.isLoggedIn();
            //        console.error('logout error: ' + errors);
        }, function () {
        });
    };
    LogoutComponent.prototype.ngOnDestroy = function () {
        this.loginObs.unsubscribe();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form{\n    display: flex;\n    flex-direction: column;\n\n}\n.login-full-width{\n\n    width: 100%;\n}\n.login-content-lg{\n    margin: 20px;\n\n     margin-right: 400px;\n    margin-left: 400px;\n\n}"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-e-header>\n    <app-e-header-title>\n        Criar conta\n    </app-e-header-title>\n\n</app-e-header>\n<mat-sidenav-container  [ngClass.lg]=\"'login-content-lg'\" class=\"example-container\">\n    <div >\n        <mat-card>\n            <mat-card-title></mat-card-title>\n            <mat-card-subtitle>Preencha as lacunas abaixo para criar sua carteira online de vacinação</mat-card-subtitle>\n            <form class=\"login-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\" #formDir=\"ngForm\">\n            \n                <div *ngIf='errors'>\n                    <mat-error *ngFor=\"let error of errors\"> \n                            {{error}}\n                        </mat-error>\n                </div>\n     \n                <mat-form-field class=\"login-full-width\">\n                    <input matInput placeholder=\"Nome\" formControlName=\"name\" [errorStateMatcher]=\"matcher\">\n                    <mat-hint>Errors appear instantly!</mat-hint>\n           \n                    <mat-error *ngIf=\"name.hasError('required')\">\n                        Email is <strong>required</strong>\n                    </mat-error>\n\n                </mat-form-field>\n\n                <mat-form-field class=\"login-full-width\">\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n                    <mat-hint>Errors appear instantly!</mat-hint>\n                    <mat-error *ngIf=\"email.hasError('email') && !email.hasError('required')\">\n                        Please enter a valid email address\n                    </mat-error>\n                    <mat-error *ngIf=\"email.hasError('required')\">\n                        Email is <strong>required</strong>\n                    </mat-error>\n\n                </mat-form-field>\n\n                <div formGroupName=\"passGroup\">\n\n                    <mat-form-field class=\"login-full-width\">\n                        <input matInput placeholder=\"Senha\" formControlName=\"password\" [errorStateMatcher]=\"matcher\" [type]=\"hide ? 'password' : 'text'\">\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n                        <mat-hint>Errors appear instantly!</mat-hint>\n\n                        <mat-error *ngIf=\"password.hasError('required')\">\n                            Password is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"login-full-width\">\n                        <input matInput placeholder=\"Confirmar Senha\" formControlName=\"confirmPassword\" [errorStateMatcher]=\"matcher\" [type]=\"hide ? 'password' : 'text'\">\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n                        <mat-hint>Errors appear instantly!</mat-hint>\n\n                        <mat-error *ngIf=\"confirmPassword.hasError('required')\">\n                            Password is <strong>required</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"confirmPassword.hasError('MatchPassword')\">\n                            Password doesnt <strong>match</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <mat-form-field>\n                    <input formControlName='data' placeholder=\"Data de nascimento\" matInput [matDatepicker]=\"myDatepicker\">\n                    <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #myDatepicker></mat-datepicker>\n                    <!-- <mat-hint>Data de nascimento!</mat-hint> -->\n\n                </mat-form-field>\n                <div>\n\n                    <mat-form-field>\n                        <mat-select  formControlName='estado' placeholder='Estado'>\n                            <mat-option *ngFor=\"let estado of estados | async\" value=\"{{estado['ID']}}\">{{estado['Nome']}}</mat-option>\n\n                        </mat-select>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-select formControlName='cidade' placeholder='Cidade' >\n                    \n                            <div *ngIf='currentEstadoID.length > 0'>\n\n                                <mat-option *ngFor=\"let cidade of cidades | async |  filterByState: currentEstadoID\" value=\"{{cidade['ID']}}\">{{cidade['Nome']}}</mat-option>\n                            </div>    \n\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <mat-grid-list cols=\"4\">\n                    <mat-grid-tile>\n                        <button [disabled]=\"registerForm.invalid\" type='submit' mat-raised-button color=\"primary\">Criar</button>\n                    </mat-grid-tile>\n\n\n                </mat-grid-list>\n\n            </form>\n        </mat-card>\n    </div>\n\n</mat-sidenav-container>"

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
/* harmony import */ var _Tools_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tools/city.service */ "./src/app/Tools/city.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/register.service */ "./src/app/auth/services/register.service.ts");
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
    function RegisterComponent(cityService, registerService) {
        this.cityService = cityService;
        this.registerService = registerService;
        this.hide = true;
        this.matcher = new MyErrorStateMatcher();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.currentEstadoID = '2';
        this.estados = this.cityService.getEstados();
        this.cidades = this.cityService.getCidades();
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('vitor', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('vitor@vitor.com', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            'passGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('123456789', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]),
                'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('123456789', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ])
            }, [this.MatchPassword]),
            'estado': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('2', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('3', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'data': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('10-10-2000', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
        });
        this.onChanges();
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('passGroup.password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () { return this.registerForm.get('passGroup.confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "estado", {
        get: function () { return this.registerForm.get('estado'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "cidade", {
        get: function () { return this.registerForm.get('cidade'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "data", {
        get: function () { return this.registerForm.get('data'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () { return this.registerForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var registerParams = {
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
            data_nascimento: this.data.value,
            id_cidade: this.cidade.value,
            id_estado: this.estado.value
        };
        this.registerService.doRegister(registerParams).subscribe(function (res) {
            _this.done = Object.values(res);
        }, function (errors) {
            console.log(errors.error);
            _this.errors = Object.values(errors.error);
        });
    };
    RegisterComponent.prototype.onChanges = function () {
        var _this = this;
        this.estado.valueChanges.subscribe(function (val) {
            _this.currentEstadoID = val;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_Tools_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/services/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.module */ "./src/app/api/api.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this._loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loggedIn = this._loggedIn.asObservable();
    }
    LoginService.prototype.doLogin = function (login) {
        return this.http.post(_api_api_module__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"] + 'login', login);
    };
    // logout()  : Observable<any> {
    //   return this.http.post<any>(api.API_BASE_URL + 'auth/logout','');
    // }
    LoginService.prototype.logout = function () {
        return this.http.post(_api_api_module__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"] + 'logout', null);
    };
    LoginService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this._loggedIn.next(true);
        }
        else {
            this._loggedIn.next(false);
        }
        return this._loggedIn.getValue();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/auth/services/register.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/services/register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api.module */ "./src/app/api/api.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.doRegister = function (params) {
        return this.http.post(_api_api_module__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"] + 'register', params);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-admin/dashboard-admin.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-admin/dashboard-admin.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard-admin/dashboard-admin.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-admin/dashboard-admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-admin/dashboard-admin.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-admin/dashboard-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminComponent", function() { return DashboardAdminComponent; });
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

var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent() {
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
    };
    DashboardAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-admin',
            template: __webpack_require__(/*! ./dashboard-admin.component.html */ "./src/app/dashboard/dashboard-admin/dashboard-admin.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-admin.component.css */ "./src/app/dashboard/dashboard-admin/dashboard-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard-applicator works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardApplicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardApplicatorComponent", function() { return DashboardApplicatorComponent; });
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

var DashboardApplicatorComponent = /** @class */ (function () {
    function DashboardApplicatorComponent() {
    }
    DashboardApplicatorComponent.prototype.ngOnInit = function () {
    };
    DashboardApplicatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-applicator',
            template: __webpack_require__(/*! ./dashboard-applicator.component.html */ "./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-applicator.component.css */ "./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardApplicatorComponent);
    return DashboardApplicatorComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-user/dados/dados.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/dados/dados.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/dados/dados.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/dados/dados.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dados works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/dados/dados.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/dados/dados.component.ts ***!
  \*******************************************************************/
/*! exports provided: DadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosComponent", function() { return DadosComponent; });
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

var DadosComponent = /** @class */ (function () {
    function DadosComponent() {
    }
    DadosComponent.prototype.ngOnInit = function () {
    };
    DadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dados',
            template: __webpack_require__(/*! ./dados.component.html */ "./src/app/dashboard/dashboard-user/dados/dados.component.html"),
            styles: [__webpack_require__(/*! ./dados.component.css */ "./src/app/dashboard/dashboard-user/dados/dados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DadosComponent);
    return DadosComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-user/dashboard-user.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/dashboard-user.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidemenu{\n    background-color: antiquewhite;\n    height: 100%;\n}\n\n.example-container-user {\n    margin: 2em\n\n  }\n\n.example-container {\n    width: auto;\n    height: 30em;\n    margin:1em;\n  }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/dashboard-user.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/dashboard-user.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n    <mat-drawer mode=\"side\" opened>\n\n        <div class='sidemenu'>\n\n            <mat-list>\n\n              <mat-list-item> \n                \n                  <button mat-raised-button routerLink=\"/dashboard/user/minha-carterinha\">Minha carterinha</button> \n                </mat-list-item>\n              <mat-list-item> \n                  <button  mat-raised-button routerLink=\"/dashboard/user/historico\">Historico </button> \n  \n              </mat-list-item>\n              <mat-list-item> \n                  <button  mat-raised-button routerLink=\"/dashboard/user/dados\">Meus dados</button> \n\n              </mat-list-item>\n            </mat-list>\n    \n          </div>\n\n    </mat-drawer>\n    \n    <mat-drawer-content>\n      <div class='example-container-user'>\n        <router-outlet></router-outlet>\n        \n      </div>\n    </mat-drawer-content>\n  </mat-drawer-container>"

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/dashboard-user.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/dashboard-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUserComponent", function() { return DashboardUserComponent; });
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

var DashboardUserComponent = /** @class */ (function () {
    function DashboardUserComponent() {
    }
    DashboardUserComponent.prototype.ngOnInit = function () {
    };
    DashboardUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-user',
            template: __webpack_require__(/*! ./dashboard-user.component.html */ "./src/app/dashboard/dashboard-user/dashboard-user.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-user.component.css */ "./src/app/dashboard/dashboard-user/dashboard-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardUserComponent);
    return DashboardUserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-user/historico/historico.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/historico/historico.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n\n    width:100%;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/historico/historico.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/historico/historico.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\nHistorico de vacinas\n</h4>\n<p>Encontre todas as vacinas que tomou desde o começo</p>\n<mat-divider></mat-divider>\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"\nmatSort matSortActive=\"created_at\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Position Column -->\n    <ng-container matColumnDef=\"vacina\">\n      <th mat-header-cell *matHeaderCellDef >Vacina </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.vacina.name}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"aplicador\">\n      <th mat-header-cell *matHeaderCellDef > Aplicador  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.aplicador.registro.name}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"posto\">\n      <th mat-header-cell *matHeaderCellDef > Posto </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.aplicador.posto.endereco}} </td>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"created_at\"  >\n      <th mat-header-cell *matHeaderCellDef  mat-sort-header> Data </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.created_at |date}} </td>\n    </ng-container>\n  \n    <tr  mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>"

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/historico/historico.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/historico/historico.component.ts ***!
  \***************************************************************************/
/*! exports provided: HistoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoComponent", function() { return HistoricoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_historico_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/historico.service */ "./src/app/dashboard/dashboard-user/services/historico.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoricoComponent = /** @class */ (function () {
    function HistoricoComponent(hService) {
        this.hService = hService;
        this.historicoData = this.hService.get();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['vacina', 'aplicador', 'posto', 'created_at'];
    }
    HistoricoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.historicoData.pipe().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.dataSource.sort = _this.sort;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], HistoricoComponent.prototype, "sort", void 0);
    HistoricoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historico',
            template: __webpack_require__(/*! ./historico.component.html */ "./src/app/dashboard/dashboard-user/historico/historico.component.html"),
            styles: [__webpack_require__(/*! ./historico.component.css */ "./src/app/dashboard/dashboard-user/historico/historico.component.css")]
        }),
        __metadata("design:paramtypes", [_services_historico_service__WEBPACK_IMPORTED_MODULE_1__["HistoricoService"]])
    ], HistoricoComponent);
    return HistoricoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ca{\n    \n    display: flex;\n    \n}\n.card{\n    margin:2px;\n}\n.ca div{\n\nmargin: 10px;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\n  Carteira de vacinação\n</h4>\n<p>Encontre todas as vacinas que tomou desde o começo</p>\n<mat-divider></mat-divider>\n<div class='ca'>\n  <mat-card *ngFor='let id of keys' class='card'>\n\n   <p>\n\n     \n     {{id}}\n     \n    </p>\n\n\n\n      <div *ngIf='!dataC[id][0].id_aplicador; else ok'>\n        Sem dados\n      </div>\n      \n      <ng-template #ok >\n\n      <div *ngFor='let vacina of dataC[id]'>\n        <p>\n          Data {{vacina.created_at|date}}\n        </p>\n        </div>\n      </ng-template>\n\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MinhaCarterinhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhaCarterinhaComponent", function() { return MinhaCarterinhaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_carterinha_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/carterinha.service */ "./src/app/dashboard/dashboard-user/services/carterinha.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinhaCarterinhaComponent = /** @class */ (function () {
    function MinhaCarterinhaComponent(carterinhaS) {
        this.carterinhaS = carterinhaS;
    }
    MinhaCarterinhaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carterinhaS.get().subscribe(function (data) {
            _this.dataC = data;
            _this.keys = Object.keys(_this.dataC);
            console.log(data);
        });
    };
    MinhaCarterinhaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-minha-carterinha',
            template: __webpack_require__(/*! ./minha-carterinha.component.html */ "./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.html"),
            styles: [__webpack_require__(/*! ./minha-carterinha.component.css */ "./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.css")]
        }),
        __metadata("design:paramtypes", [_services_carterinha_service__WEBPACK_IMPORTED_MODULE_1__["CarterinhaService"]])
    ], MinhaCarterinhaComponent);
    return MinhaCarterinhaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-user/services/carterinha.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/services/carterinha.service.ts ***!
  \*************************************************************************/
/*! exports provided: CarterinhaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarterinhaService", function() { return CarterinhaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/api.module */ "./src/app/api/api.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarterinhaService = /** @class */ (function () {
    function CarterinhaService(http) {
        this.http = http;
    }
    CarterinhaService.prototype.vacinas = function () {
        return this.http.get(_api_api_module__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"] + 'vacinas');
    };
    CarterinhaService.prototype.get = function () {
        return this.http.get(_api_api_module__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"] + 'carterinha');
    };
    CarterinhaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarterinhaService);
    return CarterinhaService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-user/services/historico.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/services/historico.service.ts ***!
  \************************************************************************/
/*! exports provided: HistoricoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoService", function() { return HistoricoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/api.module */ "./src/app/api/api.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoricoService = /** @class */ (function () {
    function HistoricoService(http) {
        this.http = http;
    }
    HistoricoService.prototype.get = function () {
        return this.http.get(_api_api_module__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"] + 'historico');
    };
    HistoricoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoricoService);
    return HistoricoService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidemenu{\n\n}\n\n.example-container {\n    width: auto;\n    height: 30em;\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-e-header>\n  <app-e-header-title>\n\n    \n    <p style='color:black;margin:1em'>\n      Aqui podera ver todos os seus dados, tais comos postos frequentados, carteirinha de vacinação,etc\n    </p>\n  </app-e-header-title>\n</app-e-header>\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    DashboardComponent.prototype.redirect = function () {
        var _this = this;
        this.usersubs = this.user.subscribe(function (data) {
            if (_this.router.url === '/dashboard') {
                if (data.nivel_acesso == 2)
                    _this.router.navigate(['dashboard', 'admin']);
                else if (data.nivel_acesso == 1)
                    _this.router.navigate(['dashboard', 'applicator']);
                else {
                    _this.router.navigate(['dashboard', 'user']);
                }
            }
        }, function (errors) {
            console.error(errors);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser();
        this.ev = this.router.events
            .subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var url = e.urlAfterRedirects || e.url;
                if (url === '/dashboard') {
                    _this.redirect();
                }
            }
        }, function (errors) {
            console.error(errors);
        });
        if (this.user)
            this.redirect();
    };
    DashboardComponent.prototype.OnDestroy = function () {
        this.usersubs.unsubscribe();
        this.ev.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
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
                "\n\n.e-header-title{\n  \n    margin:0;\n    padding:0;\n    color:white;\n    padding:1em;\n}\n\n"
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

module.exports = "\n.e-header\n{\n    /* background-color: rgba(0, 128, 0, 0.753); */\n    background-color: #00d1b2;\n    margin:1em;\n}"

/***/ }),

/***/ "./src/app/design/e-header/e-header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/design/e-header/e-header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='e-header'>\n\n    <ng-content></ng-content>\n</div>\n"

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

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-e-header>\n    <app-e-header-title>\n        <div >\n            <h1>\n\n                Carteira de Vacinação Online\n            </h1>\n            <h2 style='font-size: 18px;\n                        font-weight: 300;\n                        line-height: 28px;'>\n                Saia do passado, tenha acesso a sua carterinha de vacinação a qualquer monento!\n            </h2>\n\n\n            <button mat-raised-button routerLink='/login'> Começar a aventura!</button>\n        </div>\n\n\n\n    </app-e-header-title>\n\n\n\n</app-e-header>\n<mat-sidenav-container class=\"example-container\">\n\n    <mat-grid-list class='gtile ' [cols]=\"columnNum\"  gutterSize='2em'>\n        <mat-grid-tile>\n\n            <img src='/imagens/o-medico-de-ontem-de-hoje-e-do-futuro-media.png'>\n        </mat-grid-tile>\n\n        <mat-grid-tile>\n                <mat-card class='home-content'>\n\n                    <mat-card-content>\n\n                        \n                        \n                        \n                        Perdeu a carterinha de vacinação e precisa tomar a vacina da febre amarela? A orientação da Anvisa (Agência Nacional de Vigilância\n                        Sanitária) é que a pessoa entre em contato com o local onde foi realizada a vacinação para o resgate\n                        da 2ª via. Em caso de dúvida ou impossibilidade de adquirir a carteira de vacinação, vale procurar\n                        o Programa Nacional de Imunização/ Ministério da Saúde. Esse setor é o responsável para avaliação\n                        e encaminhamento dos questionamentos das atividades de vacinação das unidades de saúde. Muita gente\n                        também não se lembra se já tomou ou não a vacina da febre amarela. Na dúvida, a recomendação é se\n                        imunizar novamente. Vale destacar que a campanha de febre amarela é preventiva e voltada aos moradores\n                        da zona norte de São Paulo. A ação começou no dia 21 de outubro, após um macaco ser encontrado morto\n                        no Horto Florestal vítima de febre amarela. Dose única para toda a vida A vacina contra a febre amarela\n                        é a melhor forma de se prevenir da doença, e uma única dose é o suficiente para se proteger por toda\n                        a vida. Mas nem todos devem tomar. O imunizante não é indicado para gestantes, mulheres amamentando\n                        crianças com até 6 meses e pessoas imunodeprimidas, como pacientes em tratamento quimioterápico,\n                        radioterápico ou com corticoides em doses elevadas (portadores de Lúpus, por exemplo). Mais de 500\n                        mil se imunizaram Na quarta-feira (1º), a meta da primeira etapa da campanha, que era de vacinar\n                        moradores da região do entorno dos parques do Horto, Cantareira e Anhanguera, foi batida. Somente\n                        na quinta-feira (2), feriado de Finados, 34.222 pessoas se vacinaram nas 37 UBSs (Unidades Básicas\n                        de Saúde), que atenderam até as 14h. Até agora, 539.949 moradores da zona norte foram vacinados,\n                        segundo a secretaria de saúde. Vale ressaltar que as ações de rotina — vacinação para pessoas que\n                        precisam viajar para áreas de risco, seguem nos demais postos da cidade. Veja a lista completa aqui\n                    </mat-card-content>\n                    \n                </mat-card>\n                \n            </mat-grid-tile>\n                \n                \n                <mat-grid-tile>\n            <mat-card class='home-content'>\n                <mat-card-content>\n                        \n\n\n                    Perdeu a carterinha de vacinação e precisa tomar a vacina da febre amarela? A orientação da Anvisa (Agência Nacional de Vigilância\n                    Sanitária) é que a pessoa entre em contato com o local onde foi realizada a vacinação para o resgate\n                    da 2ª via. Em caso de dúvida ou impossibilidade de adquirir a carteira de vacinação, vale procurar o\n                    Programa Nacional de Imunização/ Ministério da Saúde. Esse setor é o responsável para avaliação e encaminhamento\n                    dos questionamentos das atividades de vacinação das unidades de saúde. Muita gente também não se lembra\n                    se já tomou ou não a vacina da febre amarela. Na dúvida, a recomendação é se imunizar novamente. Vale\n                    destacar que a campanha de febre amarela é preventiva e voltada aos moradores da zona norte de São Paulo.\n                    A ação começou no dia 21 de outubro, após um macaco ser encontrado morto no Horto Florestal vítima de\n                    febre amarela. Dose única para toda a vida A vacina contra a febre amarela é a melhor forma de se prevenir\n                    da doença, e uma única dose é o suficiente para se proteger por toda a vida. Mas nem todos devem tomar.\n                    O imunizante não é indicado para gestantes, mulheres amamentando crianças com até 6 meses e pessoas imunodeprimidas,\n                    como pacientes em tratamento quimioterápico, radioterápico ou com corticoides em doses elevadas (portadores\n                    de Lúpus, por exemplo). Mais de 500 mil se imunizaram Na quarta-feira (1º), a meta da primeira etapa\n                    da campanha, que era de vacinar moradores da região do entorno dos parques do Horto, Cantareira e Anhanguera,\n                    foi batida. Somente na quinta-feira (2), feriado de Finados, 34.222 pessoas se vacinaram nas 37 UBSs\n                    (Unidades Básicas de Saúde), que atenderam até as 14h. Até agora, 539.949 moradores da zona norte foram\n                    vacinados, segundo a secretaria de saúde. Vale ressaltar que as ações de rotina — vacinação para pessoas\n                    que precisam viajar para áreas de risco, seguem nos demais postos da cidade. Veja a lista completa aqui\n                </mat-card-content>\n            </mat-card>\n        </mat-grid-tile>\n\n        <mat-grid-tile>\n            \n            <img src='/imagens/o-medico-de-ontem-de-hoje-e-do-futuro-media.png'>\n        </mat-grid-tile>\n\n    </mat-grid-list>\n\n    <mat-card class='home-content'>\n\n\n        <mat-card-title>\n            Alguma coisa\n\n\n\n            <!-- This fills the remaining space of the current row -->\n        </mat-card-title>\n        <mat-card-subtitle>\n            blblavbl\n        </mat-card-subtitle>\n        <mat-card-content>\n            <div>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </div>\n\n        </mat-card-content>\n\n    </mat-card>\n\n\n\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-content {\n  margin: 3em;\n  padding: 2em; }\n\n.gtile {\n  margin: 30px;\n  margin-top: 1em; }\n\n:host ::ng-deep .e-header {\n  margin: 0 !important; }\n\n:host ::ng-deep .e-header div {\n    text-align: center;\n    font-weight: 300;\n    padding: 50px; }\n\n:host ::ng-deep .e-header h1 {\n    line-height: 56px !important;\n    font-size: 56px !important;\n    font: 400 24px/32px Roboto,\"Helvetica Neue\",sans-serif; }\n\n.example-container {\n  flex: 1 !important; }\n"

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
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
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
    function HomeComponent(media) {
        var _this = this;
        this.columnNum = 2;
        media.asObservable()
            .subscribe(function (change) {
            // alert(change.mqAlias);  
            console.log(change.mqAlias);
            if (change.mqAlias == 'xs') {
                _this.columnNum = 1;
            }
            else if (change.mqAlias == 'sm') {
                _this.columnNum = 1;
            }
            else {
                _this.columnNum = 2;
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
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
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _dashboard_dashboard_applicator_dashboard_applicator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dashboard/dashboard-applicator/dashboard-applicator.component */ "./src/app/dashboard/dashboard-applicator/dashboard-applicator.component.ts");
/* harmony import */ var _auth_auth_applicator_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../auth/auth-applicator.guard */ "./src/app/auth/auth-applicator.guard.ts");
/* harmony import */ var _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../auth/auth-admin.guard */ "./src/app/auth/auth-admin.guard.ts");
/* harmony import */ var _dashboard_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dashboard/dashboard-admin/dashboard-admin.component */ "./src/app/dashboard/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var _auth_guest_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../auth/guest.guard */ "./src/app/auth/guest.guard.ts");
/* harmony import */ var _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../dashboard/dashboard-user/dashboard-user.component */ "./src/app/dashboard/dashboard-user/dashboard-user.component.ts");
/* harmony import */ var _dashboard_dashboard_user_minha_carterinha_minha_carterinha_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../dashboard/dashboard-user/minha-carterinha/minha-carterinha.component */ "./src/app/dashboard/dashboard-user/minha-carterinha/minha-carterinha.component.ts");
/* harmony import */ var _dashboard_dashboard_user_dados_dados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dashboard/dashboard-user/dados/dados.component */ "./src/app/dashboard/dashboard-user/dados/dados.component.ts");
/* harmony import */ var _dashboard_dashboard_user_historico_historico_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dashboard/dashboard-user/historico/historico.component */ "./src/app/dashboard/dashboard-user/historico/historico.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_auth_guest_guard__WEBPACK_IMPORTED_MODULE_13__["GuestGuard"]] },
    { path: 'teste', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], canActivate: [_auth_guest_guard__WEBPACK_IMPORTED_MODULE_13__["GuestGuard"]] },
    { path: 'logout', component: _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            {
                path: 'user', component: _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_14__["DashboardUserComponent"],
                children: [
                    { path: 'minha-carterinha', component: _dashboard_dashboard_user_minha_carterinha_minha_carterinha_component__WEBPACK_IMPORTED_MODULE_15__["MinhaCarterinhaComponent"] },
                    { path: 'dados', component: _dashboard_dashboard_user_dados_dados_component__WEBPACK_IMPORTED_MODULE_16__["DadosComponent"] },
                    { path: 'historico', component: _dashboard_dashboard_user_historico_historico_component__WEBPACK_IMPORTED_MODULE_17__["HistoricoComponent"] }
                ]
            },
            {
                path: 'applicator', component: _dashboard_dashboard_applicator_dashboard_applicator_component__WEBPACK_IMPORTED_MODULE_9__["DashboardApplicatorComponent"],
                canActivate: [_auth_auth_applicator_guard__WEBPACK_IMPORTED_MODULE_10__["AuthApplicatorGuard"]],
            },
            {
                path: 'admin', component: _dashboard_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_12__["DashboardAdminComponent"],
                canActivate: [_auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AuthAdminGuard"]],
            }
        ]
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
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

module.exports = __webpack_require__(/*! /var/www/html/CA-Online/resources/assets/src/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map