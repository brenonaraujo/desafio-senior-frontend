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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'items/list', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<app-nav-side></app-nav-side>\n<div class=\"layout-wrapper\">\n  <app-breadcrumb></app-breadcrumb>\n  <router-outlet></router-outlet>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/items.module */ "./src/app/items/items.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _items_items_module__WEBPACK_IMPORTED_MODULE_6__["ItemsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/items/items-create/items-create.component.html":
/*!****************************************************************!*\
  !*** ./src/app/items/items-create/items-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [style]=\"{marginTop: '80px'}\" position=\"top-right\" key=\"create-toast\"></p-toast>\n<div class=\" ui-g-12 ui-md-12 ui-lg-12 ui-xl-12\">\n  <p-card class=\"centralized\">\n    <p-header class=\"header-card-form\">\n      <div class=\"ui-helper-clearfix title-card-header\">\n        <span class=\"ui-panel-title\">Adicionar novo item</span>\n      </div>\n    </p-header>\n    <app-items-form [item]=\"item\" [quantityObject]=\"quantity\" (validItem)=\"onValidItem($event)\"></app-items-form>\n  </p-card>\n</div>\n"

/***/ }),

/***/ "./src/app/items/items-create/items-create.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/items/items-create/items-create.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW1zLWNyZWF0ZS9pdGVtcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/items/items-create/items-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/items/items-create/items-create.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsCreateComponent", function() { return ItemsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/items.service */ "./src/app/shared/services/items.service.ts");
/* harmony import */ var src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/item.model */ "./src/app/shared/models/item.model.ts");
/* harmony import */ var src_app_shared_models_quantity_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/quantity.model */ "./src/app/shared/models/quantity.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemsCreateComponent = /** @class */ (function () {
    function ItemsCreateComponent(messageService, itemsService) {
        this.messageService = messageService;
        this.itemsService = itemsService;
        this.item = new src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"]();
        this.quantity = new src_app_shared_models_quantity_model__WEBPACK_IMPORTED_MODULE_4__["Quantity"]('', false, '', [{}]);
    }
    ItemsCreateComponent.prototype.ngOnInit = function () {
    };
    ItemsCreateComponent.prototype.onValidItem = function (item) {
        var _this = this;
        this.itemsService.saveItem(new src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"](item))
            .then(function (res) {
            _this.messageService.add({
                key: 'create-toast',
                severity: 'success',
                summary: 'Item Salvo',
                detail: "O item " + res.itemName + " foi salvo com sucesso!"
            });
        }).catch(function (err) {
            _this.messageService.add({
                key: 'create-toast',
                severity: 'danger',
                summary: 'Erro ao tentar salvar',
                detail: "ERROR: " + err
            });
        });
    };
    ItemsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-create',
            template: __webpack_require__(/*! ./items-create.component.html */ "./src/app/items/items-create/items-create.component.html"),
            styles: [__webpack_require__(/*! ./items-create.component.scss */ "./src/app/items/items-create/items-create.component.scss")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"], src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], ItemsCreateComponent);
    return ItemsCreateComponent;
}());



/***/ }),

/***/ "./src/app/items/items-edit/items-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/items/items-edit/items-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" ui-g-12 ui-md-12 ui-lg-12 ui-xl-12\">\n    <p-card class=\"centralized\">\n      <p-header class=\"header-card-form\">\n        <div class=\"ui-helper-clearfix title-card-header\">\n          <span class=\"ui-panel-title\">Item: {{item.itemName}}</span>\n        </div>\n      </p-header>\n      <app-items-form [item]=\"item\" [quantityObject]=\"quantity\" (validItem)=\"onValidItem($event)\"></app-items-form>\n    </p-card>\n  </div>\n  "

/***/ }),

/***/ "./src/app/items/items-edit/items-edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/items/items-edit/items-edit.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW1zLWVkaXQvaXRlbXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/items/items-edit/items-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/items/items-edit/items-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsEditComponent", function() { return ItemsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/items.service */ "./src/app/shared/services/items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/item.model */ "./src/app/shared/models/item.model.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_models_quantity_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/quantity.model */ "./src/app/shared/models/quantity.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemsEditComponent = /** @class */ (function () {
    function ItemsEditComponent(itemsService, route, messageService, router) {
        this.itemsService = itemsService;
        this.route = route;
        this.messageService = messageService;
        this.router = router;
        this.item = new src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"]();
        this.quantity = new src_app_shared_models_quantity_model__WEBPACK_IMPORTED_MODULE_5__["Quantity"]('', false, '', {});
    }
    ItemsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.item = data[0];
            _this.quantity.unity = _this.item.measurementUnity;
            _this.quantity.setPlaceholder(_this.item.measurementUnity);
            _this.quantity.availability = true;
        });
    };
    ItemsEditComponent.prototype.onValidItem = function (item) {
        var _this = this;
        this.route.paramMap.subscribe(function (res) {
            _this.itemsService.updateItem(Number(res.get('index')), item)
                .then(function (result) {
                _this.messageService.add({
                    key: 'edit-toast',
                    severity: 'success',
                    summary: 'Item Editado',
                    detail: "O item " + result.itemName + " foi editado com sucesso!"
                });
                _this.router.navigate(['items/list']);
            })
                .catch(function (err) {
                _this.messageService.add({
                    key: 'edit-toast',
                    severity: 'danger',
                    summary: 'Erro ao Editar',
                    detail: "Erro: " + err
                });
            });
        });
    };
    ItemsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-edit',
            template: __webpack_require__(/*! ./items-edit.component.html */ "./src/app/items/items-edit/items-edit.component.html"),
            styles: [__webpack_require__(/*! ./items-edit.component.scss */ "./src/app/items/items-edit/items-edit.component.scss")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemsEditComponent);
    return ItemsEditComponent;
}());



/***/ }),

/***/ "./src/app/items/items-form/items-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/items/items-form/items-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [style]=\"{marginTop: '80px'}\" position=\"top-right\" key=\"form-toast\"></p-toast>\n<form [formGroup]=\"itemForm\">\n  <div class=\"\">\n    <div class=\"ui-g ui-fluid\">\n      <div class=\"ui-g-12 ui-md-12 ui-lg-12\">\n        <label class=\"required\" for=\"itemName\">Nome do item</label>\n        <div class=\"ui-inputgroup\">\n          <input id=\"itemName\" pInputText [pKeyFilter]=\"alphaWithSpace\" formControlName=\"itemName\" placeholder=\"Ex: Coca-cola\"\n            type=\"text\" maxlength=\"50\">\n        </div>\n        <p-message severity=\"error\" text=\"Você precisa informar o nome do item\" *ngIf=\"isFieldValid('itemName')\"></p-message>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n        <label class=\"required\" for=\"itemName\">Unidade de medida</label>\n        <div class=\"ui-inputgroup\">\n          <p-dropdown styleClass=\"unit-dropdown\" [options]=\"units.measurementUnits\" formControlName=\"measurementUnity\"\n            [autoWidth]=\"false\"></p-dropdown>\n        </div>\n        <p-message severity=\"error\" text=\"Você precisa informar a unidade de medida\" *ngIf=\"isFieldValid('measurementUnity')\"></p-message>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n        <label for=\"itemName\">Quantidade</label>\n        <div class=\"ui-inputgroup\">\n          <input pInputText currencyMask [options]=\"quantity.mask\" formControlName=\"quantity\" [placeholder]=\"quantity.placeholder\" maxlength=\"20\">\n          <span class=\"ui-inputgroup-addon\">{{quantity.unity}}</span>\n        </div>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n        <label class=\"required\" for=\"itemName\">Preço</label>\n        <div class=\"ui-inputgroup\">\n          <input pInputText currencyMask formControlName=\"price\" [options]=\"ngxCurrencyOptions\" [placeholder]=\"'R$ 0,00'\"\n            maxlength=\"20\">\n        </div>\n        <p-message severity=\"error\" text=\"Você precisa informar o Preço\" *ngIf=\"isFieldValid('price')\"></p-message>\n      </div>\n\n    </div>\n    <div class=\"ui-g ui-fluid\">\n\n      <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n        <label class=\"required\" for=\"itemName\">Produto perecível</label>\n        <div class=\"ui-inputgroup\">\n          <div class=\"radio-align\">\n            <div class=\"ui-g-12\">\n              <p-radioButton name=\"perishable\" value=\"true\" label=\"Sim\" formControlName=\"perishable\"></p-radioButton>\n            </div>\n            <div class=\"ui-g-12\">\n              <p-radioButton name=\"perishable\" value=\"false\" label=\"Não\" formControlName=\"perishable\"></p-radioButton>\n            </div>\n          </div>\n        </div>\n        <p-message severity=\"error\" text=\"Você precisa informar se o produto e perecível\" *ngIf=\"isFieldValid('perishable')\"></p-message>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n        <label [ngClass]=\"isRequired()\" for=\"itemName\">Data de Validade</label>\n        <i *ngIf=\"outOfDate\" pTooltip=\"Produto Vencido!\" tooltipPosition=\"top\" class=\"pi pi-calendar-times outOfDate\"></i>\n        <div class=\"ui-inputgroup\">\n          <p-calendar formControlName=\"validationDate\" dateFormat=\"dd/mm/yy\"></p-calendar>\n        </div>\n        <p-message severity=\"error\" text=\"Você precisa informar a data de validade\" *ngIf=\"isFieldValid('validationDate')\"></p-message>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n        <label class=\"required\" for=\"itemName\">Data de fabricação </label>\n        <div class=\"ui-inputgroup\">\n          <p-calendar formControlName=\"manufacturingDate\" [maxDate]=\"itemForm.get('validationDate').value\" dateFormat=\"dd/mm/yy\"></p-calendar>\n        </div>\n        <p-message severity=\"error\" text=\"Você precisa informar a data de fabricação\" *ngIf=\"isFieldValid('manufacturingDate')\"></p-message>\n      </div>\n\n    </div>\n    <p-footer>\n      <div class=\"group-button\">\n        <button pButton type=\"button\" (click)=\"onSubmit()\" label=\"Salvar\" class=\"ui-button-raised ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"onCancel()\" label=\"Cancelar\" class=\"ui-button-raised ui-button-danger\"></button>\n      </div>\n    </p-footer>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/items/items-form/items-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/items/items-form/items-form.component.ts ***!
  \**********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_measurementUnity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/measurementUnity.model */ "./src/app/shared/models/measurementUnity.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_models_quantity_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/quantity.model */ "./src/app/shared/models/quantity.model.ts");
/* harmony import */ var src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/item.model */ "./src/app/shared/models/item.model.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, messageService, router) {
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.router = router;
        // Configuracoes do modulo de validacoes de moeda!
        this.ngxCurrencyOptions = {
            prefix: 'R$ ',
            thousands: '.',
            decimal: ',',
            precision: 2,
            allowNegative: false,
            nullable: true
        };
        // Istancia da classe contendo as opcoes de unidade de medida
        this.units = new _shared_models_measurementUnity_model__WEBPACK_IMPORTED_MODULE_1__["MeasurementUnity"];
        // Emmit um evento contendo um item Validado
        this.validItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Data Limite para a data de fabricacao;
        this.maxDate = new Date();
        // Variavel para validar a exibicao do incone que informa se o produto esta vencido
        this.outOfDate = false;
        /* ToDO: Verificar a necessidade de exportar em uma classe em /shared
         Custom regex para utilizar nos campos que permitam apenas caracteres alpha com space (primeNG nao possui essa opcao)
        */
        this.alphaWithSpace = /^[A-Za-z\s]+$/;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quantity = this.quantityObject;
        // Inicializacao do formulario e regras de validacao
        this.itemForm = this.formBuilder.group({
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.item.itemName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])),
            measurementUnity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.item.measurementUnity, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                value: this.item.quantity,
                disabled: (!this.item.quantity)
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d+(\.\d{1,3})?$/)),
            price: [this.item.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            perishable: [this.item.perishable, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validationDate: [{
                    // verifica se ja existe um valor atribuido para validationDate caso tenha transforma em um date para o component p-calendar
                    value: (!this.item.validationDate) ? undefined : new Date(this.item.validationDate),
                    disabled: (!this.item.manufacturingDate)
                }],
            manufacturingDate: [{
                    // Mesma vericacao do item anterior porem para a variavel manufacturingDate
                    value: (!this.item.manufacturingDate) ? undefined : new Date(this.item.manufacturingDate),
                    disabled: false
                }]
        });
        // Verifica a mudanca no measurementUnity Dropdown para setar as regras de acordo com a unidade selecionada
        this.itemForm.get('measurementUnity').valueChanges.subscribe(function (value) {
            var quantityForm = _this.itemForm.get('quantity');
            _this.quantity.unity = value;
            _this.quantity.setPlaceholder(value);
            if (value !== '') {
                quantityForm.enable();
            }
            else {
                quantityForm.disable();
            }
        });
        // verifica se o campo da data de validade dever ser habilitado e validado;
        this.itemForm.get('perishable').valueChanges.subscribe(function (checked) {
            var validationDate = _this.itemForm.get('validationDate');
            if (JSON.parse(checked)) {
                validationDate.enable();
                validationDate.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                validationDate.updateValueAndValidity();
            }
            else {
                validationDate.setValue(null);
                validationDate.disable();
                validationDate.clearValidators();
            }
        });
        // Verifica a data de validade para informar se o produto esta vencido
        this.itemForm.get('validationDate').valueChanges.subscribe(function (date) {
            if (date !== null && (date < new Date())) {
                _this.outOfDate = true;
            }
            else {
                _this.outOfDate = false;
            }
        });
    };
    // Verifica se os campos estao validos ao tocar e ao tentar salvar
    FormComponent.prototype.isFieldValid = function (field) {
        return ((this.itemForm.get(field).enabled && !this.itemForm.get(field).valid && this.itemForm.get(field).touched) ||
            (this.itemForm.get(field).enabled && this.itemForm.get(field).untouched && this.formSumitAttempt));
    };
    /*  Verifica se o campo data de validade e required
    (OBS: A ideia era criar uma forma generica de verificar se o campo e required com base no Validation.required porem nao foi possivel!
    */
    FormComponent.prototype.isRequired = function () {
        return { 'required': this.itemForm.get('validationDate').enabled };
    };
    // Verifica se o formalario passou em todas as validacoes e entao envia-o
    FormComponent.prototype.onSubmit = function () {
        this.formSumitAttempt = true;
        if (this.itemForm.valid) {
            this.validItem.emit(new src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"](this.itemForm.value));
            this.itemForm.reset();
            this.formSumitAttempt = false;
        }
        else {
            this.messageService.add({
                key: 'form-toast', severity: 'info', summary: 'Formulario invalido', detail: 'Verifique os campos destacados'
            });
        }
    };
    FormComponent.prototype.onCancel = function () {
        this.router.navigate(['items/list']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"])
    ], FormComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_models_quantity_model__WEBPACK_IMPORTED_MODULE_3__["Quantity"])
    ], FormComponent.prototype, "quantityObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "validItem", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-form',
            template: __webpack_require__(/*! ./items-form.component.html */ "./src/app/items/items-form/items-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/items/items-list/items-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/items/items-list/items-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast [style]=\"{marginTop: '80px'}\" position=\"top-right\" key=\"remove-toast\"></p-toast>\n\n<p-toast position=\"center\" key=\"removeConfirm\" (onClose)=\"onRemoveReject()\" [modal]=\"true\" [baseZIndex]=\"5000\">\n  <ng-template let-message pTemplate=\"message\" let-data>\n      <div style=\"text-align: center\">\n          <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\n          <h3>{{message.summary}}</h3>\n          <p>{{message.detail}}</p>\n      </div>\n      <div class=\"ui-g ui-fluid\">\n          <div class=\"ui-g-6\">\n              <button type=\"button\" pButton (click)=\"onRemoveConfirm(data)\" label=\"Sim\" class=\"ui-button-success\"></button>\n          </div>\n          <div class=\"ui-g-6\">\n              <button type=\"button\" pButton (click)=\"onRemoveReject()\" label=\"Não\" class=\"ui-button-secondary\"></button>\n          </div>\n      </div>\n  </ng-template>\n</p-toast>\n\n<div class=\"ui-g-12 ui-md-12 ui-lg-12 ui-xl-12\">\n  <p-card>\n    <p-header class=\"header-card-form\">\n      <div class=\"ui-helper-clearfix title-card-header\">\n        <span class=\"ui-panel-title\">Items</span>\n      </div>\n    </p-header>\n    <div style=\"text-align:right\">\n        <button type=\"button\" pButton icon=\"pi pi-plus\" [routerLink]=\"[ '/items/create']\" label=\"Adicionar\"></button>\n    </div>\n    <p-table [columns]=\"columns\" [value]=\"items\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [responsive]=\"true\">\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th *ngFor=\"let col of columns\">\n            {{col.header}}\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\n        <tr>\n          <td>\n            <span class=\"ui-column-title\">Nome:</span>\n            {{item.itemName}}\n          </td>\n          <td>\n            <span class=\"ui-column-title\">Unidade de medida:</span>\n            {{item.measurementUnity | measurementUnityPipe }}\n          </td>\n          <td>\n            <span class=\"ui-column-title\">Quantidade:</span>\n            {{\n              item.measurementUnity === 'un' ? (item.quantity | number) : ( item.quantity | number:'1.3-3')\n            }}\n          </td>\n          <td>\n            <span class=\"ui-column-title\">Preço</span>\n            {{item.price | currency:'BRL'}}\n          </td>\n          <td>\n            <span class=\"ui-column-title\">Perecível:</span>\n            {{ (item.perishable === 'true') ? 'Sim' : 'Não'}}\n          </td>\n          <td>\n            <span class=\"ui-column-title\">Validade:</span>\n            {{item.validationDate | date:'dd/MM/yyyy'}}\n          </td>\n          <td>\n            <span class=\"ui-column-title\">Fabricação</span>\n            {{item.manufacturingDate | date:'dd/MM/yyyy'}}\n          </td>\n          <td>\n            <span class=\"ui-column-title\"></span>\n            <p-button icon=\"pi pi-pencil\" styleClass=\"ui-button-warning action-icon\" (click)=\"editItem(item)\"></p-button>\n            <p-button icon=\"pi pi-trash\" styleClass=\"ui-button-danger action-icon\" (click)=\"removeItem(item)\"></p-button>\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"summary\" *ngIf=\"items?.length !== 0\">\n        Total {{items?.length}} Items\n      </ng-template>\n    </p-table>\n  </p-card>\n</div>\n"

/***/ }),

/***/ "./src/app/items/items-list/items-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/items/items-list/items-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/items.service */ "./src/app/shared/services/items.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(itemsService, messageService, router) {
        this.itemsService = itemsService;
        this.messageService = messageService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getItems()
            .then(function (res) {
            _this.items = res;
        });
        this.columns = [
            { field: 'itemName', header: 'Nome' },
            { field: 'measurementUnity', header: 'Unidade de medida' },
            { field: 'quantity', header: 'Quantidade' },
            { field: 'price', header: 'Preco' },
            { field: 'perishable', header: 'Produto peressivel' },
            { field: 'validationDate', header: 'Validade' },
            { field: 'manufacturingDate', header: 'Fabricacao' },
            { field: 'actions', header: 'Acoes' }
        ];
    };
    ListComponent.prototype.editItem = function (item) {
        this.router.navigate(["items/edit/" + this.items.indexOf(item)]);
    };
    ListComponent.prototype.removeItem = function (item) {
        this.messageService.add({
            key: 'removeConfirm',
            data: item, sticky: true,
            severity: 'warn',
            summary: 'Voce tem certeza?',
            detail: 'Confirme para DELETAR'
        });
    };
    ListComponent.prototype.onRemoveConfirm = function (item) {
        var _this = this;
        this.messageService.clear('removeConfirm');
        this.itemsService.removeItem(this.items, item)
            .then(function (res) {
            _this.items = res;
            _this.messageService.add({
                key: 'remove-toast',
                severity: 'success',
                summary: 'Item Removido!',
                detail: "O item foi removido"
            });
        }).catch(function (err) {
            _this.messageService.add({
                severity: 'danger',
                summary: 'Erro!',
                detail: "O item nao foi removido"
            });
        });
    };
    ListComponent.prototype.onRemoveReject = function () {
        this.messageService.clear('removeConfirm');
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-list',
            template: __webpack_require__(/*! ./items-list.component.html */ "./src/app/items/items-list/items-list.component.html"),
            providers: [src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/items/items-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/items/items-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ItemsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsRoutingModule", function() { return ItemsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items-list/items-list.component */ "./src/app/items/items-list/items-list.component.ts");
/* harmony import */ var _items_create_items_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items-create/items-create.component */ "./src/app/items/items-create/items-create.component.ts");
/* harmony import */ var _items_edit_items_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items-edit/items-edit.component */ "./src/app/items/items-edit/items-edit.component.ts");
/* harmony import */ var _items_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items.resolver */ "./src/app/items/items.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'items', children: [
            { path: 'list', component: _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
            { path: 'edit/:index', component: _items_edit_items_edit_component__WEBPACK_IMPORTED_MODULE_4__["ItemsEditComponent"], resolve: [_items_resolver__WEBPACK_IMPORTED_MODULE_5__["ItemsResolver"]] },
            { path: 'create', component: _items_create_items_create_component__WEBPACK_IMPORTED_MODULE_3__["ItemsCreateComponent"] }
        ]
    }
];
var ItemsRoutingModule = /** @class */ (function () {
    function ItemsRoutingModule() {
    }
    ItemsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ItemsRoutingModule);
    return ItemsRoutingModule;
}());



/***/ }),

/***/ "./src/app/items/items.module.ts":
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/*! exports provided: ItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items-routing.module */ "./src/app/items/items-routing.module.ts");
/* harmony import */ var _items_form_items_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items-form/items-form.component */ "./src/app/items/items-form/items-form.component.ts");
/* harmony import */ var _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items-list/items-list.component */ "./src/app/items/items-list/items-list.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/index.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_services_items_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/services/items.service */ "./src/app/shared/services/items.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _shared_pipes_measurementUnity_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/pipes/measurementUnity.pipe */ "./src/app/shared/pipes/measurementUnity.pipe.ts");
/* harmony import */ var _items_edit_items_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./items-edit/items-edit.component */ "./src/app/items/items-edit/items-edit.component.ts");
/* harmony import */ var _items_create_items_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./items-create/items-create.component */ "./src/app/items/items-create/items-create.component.ts");
/* harmony import */ var _items_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./items.resolver */ "./src/app/items/items.resolver.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_25__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_items_form_items_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _shared_pipes_measurementUnity_pipe__WEBPACK_IMPORTED_MODULE_21__["MeasurementUnityPipe"], _items_edit_items_edit_component__WEBPACK_IMPORTED_MODULE_22__["ItemsEditComponent"], _items_create_items_create_component__WEBPACK_IMPORTED_MODULE_23__["ItemsCreateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _items_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemsRoutingModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__["InputSwitchModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_11__["MessageModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
                primeng_keyfilter__WEBPACK_IMPORTED_MODULE_13__["KeyFilterModule"],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__["InputMaskModule"],
                ngx_currency__WEBPACK_IMPORTED_MODULE_15__["NgxCurrencyModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__["RadioButtonModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"]
            ],
            providers: [
                _shared_services_items_service__WEBPACK_IMPORTED_MODULE_18__["ItemsService"],
                _items_resolver__WEBPACK_IMPORTED_MODULE_24__["ItemsResolver"],
                primeng_api__WEBPACK_IMPORTED_MODULE_25__["MessageService"]
            ]
        })
    ], ItemsModule);
    return ItemsModule;
}());



/***/ }),

/***/ "./src/app/items/items.resolver.ts":
/*!*****************************************!*\
  !*** ./src/app/items/items.resolver.ts ***!
  \*****************************************/
/*! exports provided: ItemsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsResolver", function() { return ItemsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/items.service */ "./src/app/shared/services/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsResolver = /** @class */ (function () {
    function ItemsResolver(service) {
        this.service = service;
    }
    ItemsResolver.prototype.resolve = function (route, state) {
        return this.service.getItem(Number(route.paramMap.get('index')));
    };
    ItemsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]])
    ], ItemsResolver);
    return ItemsResolver;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 ui-g-nopad\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-12\">\n          <p-breadcrumb [model]=\"items\" [home]=\"home\"></p-breadcrumb>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _navItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../navItems */ "./src/app/shared/navItems.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.items = _navItems__WEBPACK_IMPORTED_MODULE_0__["NavItems"];
        this.home = _navItems__WEBPACK_IMPORTED_MODULE_0__["NavHome"];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/item.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/item.model.ts ***!
  \*********************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(init) {
        Object.assign(this, init);
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/shared/models/measurementUnity.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/models/measurementUnity.model.ts ***!
  \*********************************************************/
/*! exports provided: MeasurementUnity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementUnity", function() { return MeasurementUnity; });
var MeasurementUnity = /** @class */ (function () {
    function MeasurementUnity() {
        // Array com as unidades de medida
        this.measurementUnits = [
            { label: 'Selecione a unidade de medida', value: '' },
            { label: 'Litros', value: 'lt' },
            { label: 'Kilogramas', value: 'kg' },
            { label: 'Unidade', value: 'un' }
        ];
    }
    MeasurementUnity.prototype.getMeasurementUnits = function () {
        return this.measurementUnits;
    };
    return MeasurementUnity;
}());



/***/ }),

/***/ "./src/app/shared/models/quantity.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/quantity.model.ts ***!
  \*************************************************/
/*! exports provided: Quantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
// Classe do objeto quantity facilitando a manutencao do codigo
var Quantity = /** @class */ (function () {
    function Quantity(unity, availability, placeholder, mask) {
        this.unity = unity;
        this.availability = availability;
        this.placeholder = placeholder;
        this.mask = mask;
    }
    // Altera o placeholder de acordo com a unidade de medidade selecionada e as opcoes mask
    Quantity.prototype.setPlaceholder = function (unity) {
        switch (unity) {
            case 'lt': {
                this.placeholder = '1.000';
                this.mask = {
                    prefix: '',
                    thousands: ',',
                    decimal: '.',
                    precision: 3,
                    allowNegative: false,
                    nullable: true
                };
                break;
            }
            case 'kg': {
                this.placeholder = '1.000';
                this.mask = {
                    prefix: '',
                    thousands: ',',
                    decimal: '.',
                    precision: 3,
                    allowNegative: false,
                    nullable: true
                };
                break;
            }
            case 'un': {
                this.placeholder = '1';
                this.mask = {
                    prefix: '',
                    thousands: ',',
                    decimal: '.',
                    precision: 0,
                    allowNegative: false,
                    nullable: true
                };
                break;
            }
        }
    };
    return Quantity;
}());



/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 navBar\">\n  <div class=\"ui-g\">\n    <a class=\"menu-button\" (click)=\"showSideBar()\" >\n      <i id=\"toogleIcon\" class=\"pi pi-bars\"></i>\n    </a>\n    <div class=\"simple-text\">\n      <div class=\"logo-img\">\n        <img src=\"/assets/images/logo.png\" alt=\"Desafio Front-end\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.sidebarVisible = false;
        this.icon = 'pi-bars';
    };
    NavBarComponent.prototype.showSideBar = function () {
        var sideNav = document.getElementsByClassName('sideNav')[0];
        var toogleIcon = document.getElementsByClassName(this.icon)[0];
        if (this.sidebarVisible === false) {
            sideNav.classList.add('nav-open');
            toogleIcon.classList.replace('pi-bars', 'pi-times');
            this.icon = 'pi-times';
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            sideNav.classList.remove('nav-open');
            toogleIcon.classList.replace('pi-times', 'pi-bars');
            this.icon = 'pi-bars';
        }
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/shared/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/shared/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/nav-side/nav-side.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/nav-side/nav-side.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sideNav\">\n  <ul class=\"nav\">\n    <li *ngFor=\"let item of items\">\n      <a [routerLink]=\"item.routerLink\" routerLinkActive=\"active-link\">\n        <i [class]=\"item.icon\"></i>\n        <p>{{item.label}}</p>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/nav-side/nav-side.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/nav-side/nav-side.component.ts ***!
  \*******************************************************/
/*! exports provided: NavSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSideComponent", function() { return NavSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navItems */ "./src/app/shared/navItems.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavSideComponent = /** @class */ (function () {
    function NavSideComponent() {
        this.items = _navItems__WEBPACK_IMPORTED_MODULE_1__["NavItems"];
    }
    NavSideComponent.prototype.ngOnInit = function () {
    };
    NavSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-side',
            template: __webpack_require__(/*! ./nav-side.component.html */ "./src/app/shared/nav-side/nav-side.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavSideComponent);
    return NavSideComponent;
}());



/***/ }),

/***/ "./src/app/shared/navItems.ts":
/*!************************************!*\
  !*** ./src/app/shared/navItems.ts ***!
  \************************************/
/*! exports provided: NavItems, NavHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItems", function() { return NavItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHome", function() { return NavHome; });
var NavItems = [
    { label: 'Formulário', routerLink: 'items/create', icon: 'pi pi-plus' },
    { label: 'Listagem', routerLink: 'items/list', icon: 'pi pi-list' }
];
// Define o icone e a rota para a HOME
var NavHome = {
    icon: 'pi pi-home',
    routerLink: '/'
};


/***/ }),

/***/ "./src/app/shared/pipes/measurementUnity.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/measurementUnity.pipe.ts ***!
  \*******************************************************/
/*! exports provided: MeasurementUnityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementUnityPipe", function() { return MeasurementUnityPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Transforma o codigo da unidade em valor literal legivel
 * Usage:
 *   unityCode | measurementUnityPipe
 * Example:
 *   {{ 'lt' | measurementUnityPipe }}
 *   formats to: 'Litros'
*/
var MeasurementUnityPipe = /** @class */ (function () {
    function MeasurementUnityPipe() {
    }
    MeasurementUnityPipe.prototype.transform = function (value) {
        switch (value) {
            case 'lt':
                return 'Litro';
                break;
            case 'kg':
                return 'Kilograma';
            case 'un':
                return 'unidade';
            default:
                break;
        }
    };
    MeasurementUnityPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'measurementUnityPipe' })
    ], MeasurementUnityPipe);
    return MeasurementUnityPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/items.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/items.service.ts ***!
  \**************************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
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

var ItemsService = /** @class */ (function () {
    function ItemsService() {
        // Verificar se o Item (item) ja existe se nao cria-o
        if (localStorage.getItem('items') === null) {
            localStorage.setItem('items', JSON.stringify([]));
        }
    }
    ItemsService.prototype.saveItem = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.items = JSON.parse(localStorage.getItem('items'));
                _this.items.push(item);
                localStorage.setItem('items', JSON.stringify(_this.items));
                resolve(item);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ItemsService.prototype.getItems = function () {
        return new Promise(function (resolve, reject) {
            try {
                resolve(JSON.parse(localStorage.getItem('items')));
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ItemsService.prototype.removeItem = function (items, item) {
        return new Promise(function (resolve, reject) {
            try {
                var index = items.indexOf(item);
                items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(items));
                resolve(items);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ItemsService.prototype.getItem = function (index) {
        return new Promise(function (resolve, reject) {
            try {
                var storage = JSON.parse(localStorage.getItem('items'));
                var item = storage[index];
                resolve(item);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ItemsService.prototype.updateItem = function (index, item) {
        return new Promise(function (resolve, reject) {
            try {
                var storage = JSON.parse(localStorage.getItem('items'));
                storage[index] = item;
                localStorage.setItem('items', JSON.stringify(storage));
                resolve(item);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/shared/nav-bar/nav-bar.component.ts");
/* harmony import */ var _nav_side_nav_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-side/nav-side.component */ "./src/app/shared/nav-side/nav-side.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_2__["MenuModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"]
            ],
            declarations: [_nav_side_nav_side_component__WEBPACK_IMPORTED_MODULE_6__["NavSideComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]],
            exports: [_nav_side_nav_side_component__WEBPACK_IMPORTED_MODULE_6__["NavSideComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brenonaraujo/projetos/desafio-senior-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map