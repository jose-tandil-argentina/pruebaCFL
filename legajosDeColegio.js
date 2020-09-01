var Colegio = /** @class */ (function () {
    function Colegio() {
        this.promedio = 0;
        this.fechaDeNacimiento = 1 / 1 / 1;
        this.nota = 0;
        this.suma = 0;
        this.alumnos = 0;
        this.asistencias = 0;
        this.nombre = "";
        this.apellido = "";
    }
    Colegio.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Colegio.prototype.getNombre = function () {
        return this.nombre;
    };
    Colegio.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Colegio.prototype.getApellido = function () {
        return this.apellido;
    };
    Colegio.prototype.setAdminitrarAlumnos = function (alumnos) {
        this.alumnos = alumnos;
    };
    Colegio.prototype.getAdminitrarAlumnos = function () {
        return this.alumnos;
    };
    Colegio.prototype.setAsistencias = function (asistencias) {
        this.asistencias = asistencias;
    };
    Colegio.prototype.getAsistencias = function () {
        return this.asistencias;
    };
    Colegio.prototype.setFechaDeNacimiento = function (fechaDeNacimiento) {
        this.fechaDeNacimiento = fechaDeNacimiento;
    };
    Colegio.prototype.getFecheDeNacimiento = function () {
        return this.fechaDeNacimiento;
    };
    Colegio.prototype.setNotas = function (nota) {
        this.nota = nota;
    };
    Colegio.prototype.getNotas = function () {
        return this.nota;
    };
    Colegio.prototype.setPromedioAlumno = function (nota) {
        for (var i = 0; i < this.nota; i++) {
            this.promedio = this.suma / this.nota + this.asistencias;
        }
        return this.promedio;
    };
    Colegio.prototype.setPromedioDeAlumnosInscriptos = function (alumnos) {
        for (var i = 0; this.alumnos; i++) {
            this.promedio = this.suma / this.alumnos;
        }
        return this.promedio;
    };
    Colegio.prototype.setDarAlumnosDeAlta = function (alumnos) {
        this.alumnos = alumnos;
    };
    Colegio.prototype.getDarAlumnosDeAlta = function () {
        return this.alumnos;
    };
    return Colegio;
}());
var colegio = new Colegio();
console.log("");
colegio.setNombre("franco");
colegio.setNombre("morales");
console.log("");
colegio.setFechaDeNacimiento(19 / 1 / 1999);
colegio.setPromedioAlumno(9);
console.log("");
