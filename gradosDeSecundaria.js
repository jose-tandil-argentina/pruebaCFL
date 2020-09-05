"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GradosSecundaria = void 0;
var colegio_1 = require("./colegio");
var GradosSecundaria = /** @class */ (function (_super) {
    __extends(GradosSecundaria, _super);
    function GradosSecundaria() {
        var _this = _super.call(this) || this;
        _this.grado1 = 1;
        _this.grado2 = 2;
        _this.grado3 = 3;
        _this.grado4 = 4;
        _this.grado5 = 5;
        _this.grado6 = 6;
        return _this;
    }
    GradosSecundaria.prototype.setGrado1 = function (grado1) {
        this.grado1 = grado1;
    };
    GradosSecundaria.prototype.getGrado1 = function () {
        return this.grado1;
    };
    GradosSecundaria.prototype.setGrado2 = function (grado2) {
        this.grado2 = grado2;
    };
    GradosSecundaria.prototype.getGrado2 = function () {
        return this.grado2;
    };
    GradosSecundaria.prototype.setGrado3 = function (grado3) {
        this.grado3 = grado3;
    };
    GradosSecundaria.prototype.getGrado3 = function () {
        return this.grado3;
    };
    GradosSecundaria.prototype.setGrado4 = function (grado4) {
        this.grado4 = grado4;
    };
    GradosSecundaria.prototype.getGrado4 = function () {
        return this.grado4;
    };
    GradosSecundaria.prototype.setGrado5 = function (grado5) {
        this.grado5 = grado5;
    };
    GradosSecundaria.prototype.getGrado5 = function () {
        return this.grado5;
    };
    GradosSecundaria.prototype.setGrado6 = function (grado6) {
        this.grado6 = grado6;
    };
    GradosSecundaria.prototype.getGrado6 = function () {
        return this.grado6;
    };
    return GradosSecundaria;
}(colegio_1.Colegio));
exports.GradosSecundaria = GradosSecundaria;
