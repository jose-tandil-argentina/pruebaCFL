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
exports.Alumnos = void 0;
var colegio_1 = require("./colegio");
var Alumnos = /** @class */ (function (_super) {
    __extends(Alumnos, _super);
    function Alumnos() {
        var _this = _super.call(this) || this;
        _this.nombre = "";
        _this.apellido = "";
        _this.edad = 0;
        _this.nacimiento = 0;
        _this.localidad = "";
        _this.nacionalidad = "";
        return _this;
    }
    Alumnos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumnos.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumnos.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Alumnos.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumnos.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Alumnos.prototype.getEdad = function () {
        return this.edad;
    };
    Alumnos.prototype.setNacimiento = function (nacimimiento) {
        this.nacimiento = nacimimiento;
    };
    Alumnos.prototype.getNacimiento = function () {
        return this.nacimiento;
    };
    Alumnos.prototype.setLocalidad = function (localidad) {
        this.localidad = localidad;
    };
    Alumnos.prototype.setNacionalidad = function (nacimiento) {
        this.nacionalidad = this.nacionalidad;
    };
    Alumnos.prototype.getNacionalidad = function () {
        return this.nacionalidad;
    };
    return Alumnos;
}(colegio_1.Colegio));
exports.Alumnos = Alumnos;
