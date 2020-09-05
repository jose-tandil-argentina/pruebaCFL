"use strict";
exports.__esModule = true;
exports.Colegio = void 0;
var Colegio = /** @class */ (function () {
    function Colegio() {
        this.alumnos = 0;
        this.grados = 0;
    }
    Colegio.prototype.setAlumno = function (alumnos) {
        this.alumnos = alumnos;
    };
    Colegio.prototype.getAlumno = function () {
        return this.alumnos;
    };
    Colegio.prototype.PromedioDeAlumno = function (nota, asistencias) {
        for (var i = 0; i < this.nota; i++) {
            for (var i_1 = 0; i_1 < this.asistencias; i_1++) {
                if (this.nota >= 7 && this.asistencias != 70) {
                    this.promedio = this.suma / this.nota + this.asistencias;
                }
            }
        }
        return this.promedio;
    };
    Colegio.prototype.promedioTotalDeAlumnosInscriptos = function (alumnos) {
        for (var i = 0; i < this.alumnos; i++) {
            this.promedio = this.suma / this.alumnos;
        }
        return this.promedio;
    };
    Colegio.prototype.DarDeAltaAlumnos = function (alumnos) {
        for (var i = 0; i < this.alumnos; i++) {
            console.log("Dar de Alta");
        }
        return this.alumnos;
    };
    return Colegio;
}());
exports.Colegio = Colegio;
