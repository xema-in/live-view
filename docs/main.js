(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vasu\source\repos\live-view\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    backend: ''
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

/***/ "B+Mi":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialComponentsModule", function() { return AppMaterialComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






















class AppMaterialComponentsModule {
}
AppMaterialComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialComponentsModule });
AppMaterialComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialComponentsModule_Factory(t) { return new (t || AppMaterialComponentsModule)(); }, imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialComponentsModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "M0aV":
/*!*******************************************************************!*\
  !*** ./src/app/auth/phone-selection/phone-selection.component.ts ***!
  \*******************************************************************/
/*! exports provided: PhoneSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneSelectionComponent", function() { return PhoneSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_code/manager-environment */ "b/np");
/* harmony import */ var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shared/backend.service */ "NaRD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");













function PhoneSelectionComponent_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
function PhoneSelectionComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhoneSelectionComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special characters are not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhoneSelectionComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "4 characters max.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PhoneSelectionComponent {
    constructor(service) {
        this.service = service;
        this.isLoading = false;
        this.disable = false;
        this.hasError = (controlName, errorName) => {
            return this.phoneSelectionForm.controls[controlName].hasError(errorName);
        };
        this.bus = service.getServerConnection();
    }
    ngOnInit() {
        this.disable = false;
        this.manager = src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_3__["ManagerEnvironment"].getBackendUrl();
        this.bus.IsPhoneMapped().subscribe((data) => {
            this.reconnectDevice(data.phone);
        }, () => {
            // console.error(err);
        });
        this.phoneSelectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]),
        });
    }
    mapDevice() {
        this.mapPhone(this.phoneSelectionForm.value);
    }
    reconnectDevice(phone) {
        this.mapPhone({ deviceName: phone });
    }
    mapPhone(param) {
        this.disable = true;
        this.isLoading = true;
        this.bus.mapPhone(param).subscribe((data) => {
            this.isLoading = false;
            this.service.setAppState({ state: 'Ready' });
            if (data.teamLead) {
                console.log('Enabling Team Lead features...');
                // this.service.enableTeamLeadFeatures(true);
            }
            this.disable = false;
        }, err => {
            console.error(err);
            this.isLoading = false;
            this.disable = false;
            if (err.response !== undefined) {
                err = err.response;
            }
            if (err.status === 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Error Activating Phone',
                    text: err.data
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message
                });
            }
        });
    }
}
PhoneSelectionComponent.ɵfac = function PhoneSelectionComponent_Factory(t) { return new (t || PhoneSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"])); };
PhoneSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneSelectionComponent, selectors: [["app-phone-selection"]], decls: 25, vars: 7, consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mode", "indeterminate", 4, "ngIf"], ["mat-card-avatar", "", 1, "agent-image"], [1, "mat-card-subtitle"], ["matInput", "", "type", "text", "placeholder", "Phone Number", "formControlName", "deviceName", "id", "phone"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["target", "_manager", "mat-button", "", "color", "secondary", 3, "href"], ["mode", "indeterminate"]], template: function PhoneSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PhoneSelectionComponent_Template_form_ngSubmit_0_listener() { return ctx.mapDevice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhoneSelectionComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " You logged in successfully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " We now need the phone number you would be using to receive the calls from queues. Enter the 4 digit extention number you are currently using. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PhoneSelectionComponent_mat_error_17_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PhoneSelectionComponent_mat_error_18_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PhoneSelectionComponent_mat_error_19_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "MANAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.phoneSelectionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("deviceName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("deviceName", "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("deviceName", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.phoneSelectionForm.valid || ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.manager, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".agent-image[_ngcontent-%COMP%] {\r\n    background-image: url('female-agent1.jpg');\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBEO0lBQzFELHNCQUFzQjtBQUMxQiIsImZpbGUiOiJwaG9uZS1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZ2VudC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mZW1hbGUtYWdlbnQxLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phone-selection',
                templateUrl: './phone-selection.component.html',
                styleUrls: ['./phone-selection.component.css']
            }]
    }], function () { return [{ type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "NaRD":
/*!********************************************!*\
  !*** ./src/app/_shared/backend.service.ts ***!
  \********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var jema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jema */ "KJ4G");
/* harmony import */ var jema__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jema__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





class BackendService {
    constructor() {
        this.appState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ state: 'Unknown' });
    }
    setAppState(state) {
        this.appState.next(state);
    }
    getToken() {
        let token = localStorage.getItem('access_token');
        if (token == null)
            token = '';
        return token;
    }
    saveToken(token) {
        localStorage.setItem('access_token', token);
    }
    getBackendUrl() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend !== '') {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend;
        }
        else {
            let backend = localStorage.getItem('backend');
            if (backend == null)
                backend = '';
            return backend;
        }
    }
    saveBackendIpAddress(ip) {
        localStorage.setItem('backend', ip);
    }
    getServerConnection() {
        if (this.serverConnection == undefined)
            throw new Error('Server is not connected');
        return this.serverConnection;
    }
    setupServerConnection() {
        this.serverConnection = new jema__WEBPACK_IMPORTED_MODULE_2__["ServerConnection"](this.getBackendUrl(), this.getToken());
    }
    connect() {
        if (this.serverConnection == undefined)
            throw new Error('Server is not setup');
        this.serverConnection.connect();
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OLlN":
/*!***************************************************!*\
  !*** ./src/app/auth/connect/connect.component.ts ***!
  \***************************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_shared/backend.service */ "NaRD");



class ConnectComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.setupServerConnection();
        this.service.getServerConnection().connectionState.subscribe((state) => {
            this.service.setAppState({ state: 'Connected' });
        });
        this.service.connect();
    }
}
ConnectComponent.ɵfac = function ConnectComponent_Factory(t) { return new (t || ConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
ConnectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectComponent, selectors: [["app-connect"]], decls: 2, vars: 0, template: function ConnectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " connect works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-connect',
                templateUrl: './connect.component.html',
                styleUrls: ['./connect.component.css']
            }]
    }], function () { return [{ type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_shared/backend.service */ "NaRD");
/* harmony import */ var _xema_queue_monitor_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xema/queue-monitor-panel */ "T4/f");
/* harmony import */ var _xema_team_monitor_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xema/team-monitor-panel */ "LzZt");





class DashboardComponent {
    constructor(service) {
        this.service = service;
        this.serverConnection = service.getServerConnection();
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 2, consts: [[1, "row", "mt-5"], [3, "serverConnection"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "xe-queue-monitor-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "xe-team-monitor-panel", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serverConnection", ctx.serverConnection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serverConnection", ctx.serverConnection);
    } }, directives: [_xema_queue_monitor_panel__WEBPACK_IMPORTED_MODULE_2__["QueueMonitorPanelComponent"], _xema_team_monitor_panel__WEBPACK_IMPORTED_MODULE_3__["TeamMonitorPanelComponent"]], styles: [".mat-grid-tile[_ngcontent-%COMP%]{\r\n    left: 0px;\r\n    width: calc(((62% - 0.5px) * 1) + 0px) !important;\r\n    margin-top: 0px;\r\n    padding-top: calc(((24% - 0.5px) * 1) + 0px) !important;\r\n}\r\n.pill-bg[_ngcontent-%COMP%]{background: #563d7c !important}\r\n.pill-bg[_ngcontent-%COMP%]:hover{background: #360a79 !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2YsdURBQXVEO0FBQzNEO0FBQ0EsU0FBUyw4QkFBOEI7QUFDdkMsZUFBZSw4QkFBOEI7QUFHN0M7Ozs7R0FJRyIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZ3JpZC10aWxle1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoKCg2MiUgLSAwLjVweCkgKiAxKSArIDBweCkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKCgoMjQlIC0gMC41cHgpICogMSkgKyAwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBpbGwtYmd7YmFja2dyb3VuZDogIzU2M2Q3YyAhaW1wb3J0YW50fVxyXG4ucGlsbC1iZzpob3ZlcntiYWNrZ3JvdW5kOiAjMzYwYTc5ICFpbXBvcnRhbnR9XHJcblxyXG5cclxuLyogXHJcbi5jYXJkLWZvb3RlciBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59ICovXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shared/backend.service */ "NaRD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.title = 'live-view';
        this.service.appState.subscribe((state) => {
            switch (state.state) {
                case "Unknown": {
                    this.router.navigateByUrl("/server");
                    break;
                }
                case "ServerFound": {
                    this.router.navigateByUrl("/login");
                    break;
                }
                case "LoggedIn": {
                    this.router.navigateByUrl("/connect");
                    break;
                }
                case "Connected": {
                    //   this.router.navigateByUrl("/phone");
                    //   break;
                    // }
                    // case "Ready": {
                    const bus = this.service.getServerConnection();
                    // bus.refreshPhoneState();
                    // bus.getAgentInfo();
                    this.router.navigateByUrl("/dashboard");
                    break;
                }
                default: {
                    console.log("Unhandled App State: " + state.state);
                    break;
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "W3wt":
/*!************************************************************!*\
  !*** ./src/app/_layout/app-layout/app-layout.component.ts ***!
  \************************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_nav_topbar_nav_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_navigation/nav-topbar/nav-topbar.component */ "rJt7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppLayoutComponent {
    constructor() {
        this.showFiller = false;
    }
    ngOnInit() {
        window.addEventListener('beforeunload', function (e) {
            const confirmationMessage = '\o/';
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        });
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(); };
AppLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLayoutComponent, selectors: [["app-app-layout"]], decls: 10, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "flex-md-nowrap", "shadow", "py-0"], ["href", "/", 1, "navbar-brand", "col-sm-2", "col-md-1", "mr-0"], ["src", "assets/logo-old.png", "alt", "Xema", "width", "45", 1, "d-block", "mx-auto"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "container-fluid"], [1, "row"], ["role", "main", 1, "col-md-11", "ml-sm-auto", "col-lg-11", "pl-0"], [1, "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3"]], template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-nav-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_nav_topbar_nav_topbar_component__WEBPACK_IMPORTED_MODULE_1__["NavTopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n}\r\n.feather[_ngcontent-%COMP%] {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; \r\n  padding: 48px 0 0; \r\n}\r\n.sidebar-sticky[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: 0.5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; \r\n}\r\n@supports (position: sticky) {\r\n  .sidebar-sticky[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    background: #303641;\r\n    width: 80px;\r\n  }\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #6d5ed7 !important;\r\n  text-align: center !important;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n}\r\n.sidebar-heading[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n[role=\"main\"][_ngcontent-%COMP%] {\r\n  padding-top: 30px; \r\n  position: relative;\r\n  \r\n}\r\n\r\n.fixed-top[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n  \r\n  padding-top: 10px;\r\n  background-color: #563d7c;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  \r\n  position: relative;\r\n  left: -16px;\r\n  max-width: 80px;\r\n  width: 80px;\r\n  height: 70px;\r\n  margin-top: 10px !important;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem;\r\n  border-width: 0;\r\n  border-radius: 0;\r\n}\r\n.form-control-dark[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  border-color: rgba(255, 255, 255, 0.1);\r\n}\r\n.form-control-dark[_ngcontent-%COMP%]:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);\r\n}\r\n@media screen and (max-width: 1170px) {\r\n  .sidebar-sticky[_ngcontent-%COMP%] {\r\n    width: 85px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQThCTTtBQUVOLGtEQUFrRDtBQUNsRDs7O0tBR0s7QUFFTDtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFFQTs7SUFFSTtBQUVKO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVksRUFBRSxzQkFBc0I7RUFDcEMsaUJBQWlCLEVBQUUscUJBQXFCO0FBQzFDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtBQUNqRjtBQUVBO0VBQ0U7SUFFRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBOztFQUVFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQTs7SUFFSTtBQUVKO0VBQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0VBQzlDLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTs7SUFFSTtBQUNKO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTswQkFDd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLCtDQUErQztBQUNqRDtBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJhcHAtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXHJcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgICAuYm9keS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbiBAbWVkaWEobWluLXdpZHRoOjkyMHB4KXtcclxuICAgIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVybmF2IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiBcclxuIFxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICB9ICAqL1xyXG5cclxuLyogRml4ZXMgZHJvcGRvd24gbWVudXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlICovXHJcbi8qIC5tbC1hdXRvIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfSAqL1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmZlYXRoZXIge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbn1cclxuXHJcbi8qXHJcbiAgICogU2lkZWJhclxyXG4gICAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xyXG4gIHBhZGRpbmc6IDQ4cHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbn1cclxuXHJcbi5zaWRlYmFyLXN0aWNreSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgYmFja2dyb3VuZDogIzMwMzY0MTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNmQ1ZWQ3ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLypcclxuICAgKiBDb250ZW50XHJcbiAgICovXHJcblxyXG5bcm9sZT1cIm1haW5cIl0ge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGxlZnQ6IC0xMHB4OyAqL1xyXG59XHJcblxyXG4vKlxyXG4gICAqIE5hdmJhclxyXG4gICAqL1xyXG4uZml4ZWQtdG9wIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzZDdjO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIC8qIGNvbG9yOiByZ2JhKDAsMCwwLC45KTtcclxuICAgIGJhY2tncm91bmQ6ICMzMDM2NDE7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xNnB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1kYXJrIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XHJcbiAgLnNpZGViYXItc3RpY2t5IHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-layout',
                templateUrl: './app-layout.component.html',
                styleUrls: ['./app-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-material.module */ "B+Mi");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_layout/app-layout/app-layout.component */ "W3wt");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_layout/login-layout/login-layout.component */ "sJKb");
/* harmony import */ var _navigation_nav_topbar_nav_topbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_navigation/nav-topbar/nav-topbar.component */ "rJt7");
/* harmony import */ var _auth_server_selection_server_selection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/server-selection/server-selection.component */ "qJlm");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_phone_selection_phone_selection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/phone-selection/phone-selection.component */ "M0aV");
/* harmony import */ var _auth_connect_connect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/connect/connect.component */ "OLlN");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _xema_queue_monitor_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @xema/queue-monitor-panel */ "T4/f");
/* harmony import */ var _xema_team_monitor_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @xema/team-monitor-panel */ "LzZt");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialComponentsModule"],
            _xema_queue_monitor_panel__WEBPACK_IMPORTED_MODULE_15__["QueueMonitorPanelModule"],
            _xema_team_monitor_panel__WEBPACK_IMPORTED_MODULE_16__["TeamMonitorPanelModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_7__["AppLayoutComponent"],
        _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_8__["LoginLayoutComponent"],
        _navigation_nav_topbar_nav_topbar_component__WEBPACK_IMPORTED_MODULE_9__["NavTopbarComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
        _auth_server_selection_server_selection_component__WEBPACK_IMPORTED_MODULE_10__["ServerSelectionComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _auth_phone_selection_phone_selection_component__WEBPACK_IMPORTED_MODULE_12__["PhoneSelectionComponent"],
        _auth_connect_connect_component__WEBPACK_IMPORTED_MODULE_13__["ConnectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialComponentsModule"],
        _xema_queue_monitor_panel__WEBPACK_IMPORTED_MODULE_15__["QueueMonitorPanelModule"],
        _xema_team_monitor_panel__WEBPACK_IMPORTED_MODULE_16__["TeamMonitorPanelModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_7__["AppLayoutComponent"],
                    _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_8__["LoginLayoutComponent"],
                    _navigation_nav_topbar_nav_topbar_component__WEBPACK_IMPORTED_MODULE_9__["NavTopbarComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                    _auth_server_selection_server_selection_component__WEBPACK_IMPORTED_MODULE_10__["ServerSelectionComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _auth_phone_selection_phone_selection_component__WEBPACK_IMPORTED_MODULE_12__["PhoneSelectionComponent"],
                    _auth_connect_connect_component__WEBPACK_IMPORTED_MODULE_13__["ConnectComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialComponentsModule"],
                    _xema_queue_monitor_panel__WEBPACK_IMPORTED_MODULE_15__["QueueMonitorPanelModule"],
                    _xema_team_monitor_panel__WEBPACK_IMPORTED_MODULE_16__["TeamMonitorPanelModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b/np":
/*!**********************************************!*\
  !*** ./src/app/_code/manager-environment.ts ***!
  \**********************************************/
/*! exports provided: ManagerEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerEnvironment", function() { return ManagerEnvironment; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");

class ManagerEnvironment {
    static getBackendUrl() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backend !== '') {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backend;
        }
        else {
            let backend = localStorage.getItem('backend');
            if (backend == null)
                backend = '';
            return backend;
        }
    }
}


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_code/manager-environment */ "b/np");
/* harmony import */ var jema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jema */ "KJ4G");
/* harmony import */ var jema__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jema__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/backend.service */ "NaRD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");














function LoginComponent_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 11);
} }
function LoginComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special characters are not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "60 characters max.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Do you really remember this password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(service) {
        this.service = service;
        this.isLoading = false;
        this.disable = false;
        this.hasError = (controlName, errorName) => {
            return this.loginForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.disable = false;
        this.manager = src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_3__["ManagerEnvironment"].getBackendUrl();
        // this.service.IsAgentAuthenticated().subscribe(
        //   data => {
        //     this.bus.setAppState({ state: 'LoggedIn' });
        //   },
        //   err => {
        //     console.error(err);
        //   }
        // );
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])
        });
    }
    submit() {
        this.isLoading = true;
        this.disable = true;
        const auth = new jema__WEBPACK_IMPORTED_MODULE_4__["Authenticator"](src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_3__["ManagerEnvironment"].getBackendUrl());
        auth.getAuthToken(this.loginForm.value).subscribe((data) => {
            this.isLoading = false;
            this.disable = false;
            this.service.saveToken(data.auth_token);
            this.service.setAppState({ state: 'LoggedIn' });
        }, err => {
            this.isLoading = false;
            this.disable = false;
            if (err.response !== undefined) {
                err = err.response;
            }
            if (err.status === 401) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Authentication failed!',
                    text: 'It seems you haven\'t entered valid credentials. Check your User Name and Password!'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message
                });
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 9, consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mode", "indeterminate", 4, "ngIf"], ["mat-card-avatar", "", 1, "agent-image"], [1, "mb-1"], [1, "mat-card-subtitle"], [1, "w-75"], ["matInput", "", "type", "text", "placeholder", "User Id", "formControlName", "username", "id", "username"], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password", "id", "password"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["target", "_manager", "mat-button", "", "color", "secondary", 3, "href"], ["mode", "indeterminate"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This is a business use computer system and is for authorized use only! Users of this computer system have no explicit or implicit expectation of privacy. Any and all user activity, data files, and communications on this system may be intercepted, monitored, recorded, copied, audited, inspected, and disclosed to local, state, or federal law enforcement, administrators, and/or their authorized agents. By clicking SUBMIT the user agrees to the above statement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_mat_error_14_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_mat_error_20_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_mat_error_21_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "MANAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("username", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("username", "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("username", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("password", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("password", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid || ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.manager, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".agent-image[_ngcontent-%COMP%] {\r\n  background-image: url('female-agent1.jpg');\r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBMEQ7RUFDMUQsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWdlbnQtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZlbWFsZS1hZ2VudDEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "qJlm":
/*!*********************************************************************!*\
  !*** ./src/app/auth/server-selection/server-selection.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServerSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSelectionComponent", function() { return ServerSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_code/manager-environment */ "b/np");
/* harmony import */ var jema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jema */ "KJ4G");
/* harmony import */ var jema__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jema__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shared/backend.service */ "NaRD");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function ServerSelectionComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Server IP Address or URL is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerSelectionComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A good IP Address or URL is usually not that long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ServerSelectionComponent {
    constructor(service) {
        this.service = service;
        this.tester = new jema__WEBPACK_IMPORTED_MODULE_3__["NetworkTester"]();
        this.hasError = (controlName, errorName) => {
            return this.serverSelectionForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.serverSelectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            serverIp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
        });
        if (src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_2__["ManagerEnvironment"].getBackendUrl() !== null &&
            src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_2__["ManagerEnvironment"].getBackendUrl() !== undefined &&
            src_app_code_manager_environment__WEBPACK_IMPORTED_MODULE_2__["ManagerEnvironment"].getBackendUrl() !== '') {
            this.service.setAppState({ state: 'ServerFound' });
        }
        else {
            const detectedServerName = location.hostname + (location.port ? ':' + location.port : '');
            const detectedProtocol = location.protocol;
            this.tester.ping(detectedProtocol + '//' + detectedServerName).subscribe(() => {
                this.serverSelectionForm.controls['serverIp'].setValue(detectedServerName);
            });
        }
    }
    saveIpAddress() {
        let url = this.serverSelectionForm.value.serverIp;
        if (!url.startsWith('http:') && !url.startsWith('https:')) {
            url = location.protocol + '//' + url;
        }
        this.service.saveBackendIpAddress(url);
        this.service.setAppState({ state: 'ServerFound' });
    }
}
ServerSelectionComponent.ɵfac = function ServerSelectionComponent_Factory(t) { return new (t || ServerSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"])); };
ServerSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerSelectionComponent, selectors: [["app-server-selection"]], decls: 21, vars: 4, consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-card-avatar", "", 1, "agent-image"], [1, "mat-card-subtitle"], ["matInput", "", "type", "text", "placeholder", "IP Address", "formControlName", "serverIp", "id", "ip"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function ServerSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ServerSelectionComponent_Template_form_ngSubmit_0_listener() { return ctx.saveIpAddress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Locate a server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Welcome here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Who is serving you calls today? If you haven't found anybody to serve you, we may be able to help you. Talk to us! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ServerSelectionComponent_mat_error_16_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ServerSelectionComponent_mat_error_17_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.serverSelectionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("serverIp", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("serverIp", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.serverSelectionForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".agent-image[_ngcontent-%COMP%] {\r\n    background-image: url('female-agent1.jpg');\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwRDtJQUMxRCxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic2VydmVyLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFnZW50LWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZlbWFsZS1hZ2VudDEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-selection',
                templateUrl: './server-selection.component.html',
                styleUrls: ['./server-selection.component.css']
            }]
    }], function () { return [{ type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "rJt7":
/*!****************************************************************!*\
  !*** ./src/app/_navigation/nav-topbar/nav-topbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTopbarComponent", function() { return NavTopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_shared/backend.service */ "NaRD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavTopbarComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.bus = service.getServerConnection();
    }
    ngOnInit() {
        this.bus.phoneState.subscribe((state) => {
            this.phoneState = state;
        });
        this.bus.breakState.subscribe((state) => {
            this.breakState = state;
        });
        this.bus.agentInfo.subscribe((res) => {
            this.info = res;
        });
    }
    Logoff() {
        // this.bus.logout().subscribe(
        //   data => {
        //     this.service.setAppState({ state: 'Unknown' });
        //     localStorage.removeItem('access_token');
        //     this.router.navigateByUrl('/login');
        //   },
        //   err => {
        //     console.error(err);
        //   }
        // );
        this.service.setAppState({ state: "Unknown" });
        localStorage.removeItem("access_token");
        this.router.navigateByUrl("/login");
    }
    askBreak() {
    }
    cancelBreak() {
        this.bus.cancelBreak();
    }
    exitBreak() {
        this.bus.exitBreak();
    }
}
NavTopbarComponent.ɵfac = function NavTopbarComponent_Factory(t) { return new (t || NavTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavTopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavTopbarComponent, selectors: [["app-nav-topbar"]], decls: 3, vars: 0, consts: [[1, "navbar-nav", "mr-auto", "ml-2", "ullist"], ["href", "", 1, "nav-link", "btn", "btn-sm", "btn-outline-secondary", "text-white", "signout", "position-absolute", 3, "click"]], template: function NavTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavTopbarComponent_Template_a_click_1_listener() { return ctx.Logoff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".signout[_ngcontent-%COMP%]{\r\n    right: 15px;\r\n    top: 18px;\r\n    \r\n}\r\n.break[_ngcontent-%COMP%]{right: 100px;}\r\nnav[_ngcontent-%COMP%]{   \r\n         height: 60px !important;\r\n        }\r\n.ullist[_ngcontent-%COMP%]{\r\n            position: absolute;\r\nz-index: 999999;\r\ntop: -6px !important;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi10b3BiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsK0JBQStCO0FBQ25DO0FBQ0EsT0FBTyxZQUFZLENBQUM7QUFFaEI7U0FDSyx1QkFBdUI7UUFDeEI7QUFFQTtZQUNJLGtCQUFrQjtBQUM5QixlQUFlO0FBQ2Ysb0JBQW9CO1FBQ1oiLCJmaWxlIjoibmF2LXRvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25vdXR7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogMThweDtcclxuICAgIC8qIGNvbG9yOiAjNmQ1ZWQ3ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmJyZWFre3JpZ2h0OiAxMDBweDt9XHJcblxyXG4gICAgbmF2eyAgIFxyXG4gICAgICAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51bGxpc3R7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuei1pbmRleDogOTk5OTk5O1xyXG50b3A6IC02cHggIWltcG9ydGFudDtcclxuICAgICAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavTopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-topbar",
                templateUrl: "./nav-topbar.component.html",
                styleUrls: ["./nav-topbar.component.css"],
            }]
    }], function () { return [{ type: _shared_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "sJKb":
/*!****************************************************************!*\
  !*** ./src/app/_layout/login-layout/login-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginLayoutComponent.ɵfac = function LoginLayoutComponent_Factory(t) { return new (t || LoginLayoutComponent)(); };
LoginLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginLayoutComponent, selectors: [["app-login-layout"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "row", "wallpaper"], [1, "col-sm-7"], [1, "col-sm-4", "window"]], template: function LoginLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".wallpaper[_ngcontent-%COMP%] {\r\n    background: url('bg2.png');\r\n    height: 100vh;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.window[_ngcontent-%COMP%] {\r\n    \r\n    margin-top: 150px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0U7O0FBRUY7SUFDSSwwQkFBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJsb2dpbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG5XaGVuIHVzaW5nIGNvbnRhaW5lci1mbHVpZCwgcHV0IHRoZSBjb250ZW50IGluc2lkZSBhIHJvdyB0byBnZXQgYSBmdWxsIHNjcmVlbiBiYWNrZ3JvdW5kLiBcclxuXHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuPGRpdiBjbGFzcz1cInJvdyB3YWxscGFwZXJcIj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG4gKi9cclxuXHJcbi53YWxscGFwZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmcyLnBuZycpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ud2luZG93IHtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9ibGFjay5wbmcnKTsgKi9cclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-layout',
                templateUrl: './login-layout.component.html',
                styleUrls: ['./login-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_connect_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/connect/connect.component */ "OLlN");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_phone_selection_phone_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/phone-selection/phone-selection.component */ "M0aV");
/* harmony import */ var _auth_server_selection_server_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/server-selection/server-selection.component */ "qJlm");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_layout/app-layout/app-layout.component */ "W3wt");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_layout/login-layout/login-layout.component */ "sJKb");











const routes = [
    // login, forgot password pages
    {
        path: '',
        component: _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_8__["LoginLayoutComponent"],
        children: [
            { path: 'server', component: _auth_server_selection_server_selection_component__WEBPACK_IMPORTED_MODULE_5__["ServerSelectionComponent"] },
            { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'connect', component: _auth_connect_connect_component__WEBPACK_IMPORTED_MODULE_2__["ConnectComponent"] },
            { path: 'phone', component: _auth_phone_selection_phone_selection_component__WEBPACK_IMPORTED_MODULE_4__["PhoneSelectionComponent"] },
            { path: 'forgot', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
        ]
    },
    // application pages
    {
        path: '',
        component: _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_7__["AppLayoutComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], pathMatch: 'full' },
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map