"use strict"

import {Telefono} from "./Telefono1";

class TelefonoConCamara extends Telefono{
    private camara: Camara;


    public constructor(){
        super();
        console.log(this.camara);
        this.camara = new Camara();
        console.log(this.camara);
    }

    public sacarFoto(): string{
        return this.camara.savarFoto();
    }
}

let samsung : TelefonoConCamara = new TelefonoConCamara();
console.log(samsung.sacarFoto);
samsung.getBateriiaActual();
samsung.getEstaPrendido();
samsung.getPrenderApagarLinterna();
samsung.sacarFoto();


let motorola : TelefonoConCamara = new TelefonoConCamara();
console.log(motorola.sacarFoto());
motorola.getBateriiaActual();
motorola.getEstaPrendido();
motorola.getPrenderApagarLinterna();
motorola.sacarFoto();

