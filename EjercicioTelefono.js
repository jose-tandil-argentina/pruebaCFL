var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = true;
    }
    SmartPhone.prototype.llamar = function () {
        return this.llamar();
    };
    SmartPhone.prototype.prender = function () {
        return this.apagar();
    };
    SmartPhone.prototype.apagar = function () {
        return this.apagar();
    };
    return SmartPhone;
}());
