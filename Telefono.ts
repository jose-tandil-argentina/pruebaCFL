"use strict"
import * as  fs from "fs";
import * as readlineSync from "readline-sync";


class Telefono{
    private estaPrendido: boolean;
    private bateriaActual: number;
    private linternaPrendida: boolean;


   public constructor(){
       this.estaPrendido = true;
       this.bateriaActual = 100;
       this.linternaPrendida = false;
   }


   public setBateriaActual(bateriaActual: number): void{
       this.bateriaActual = bateriaActual;
   }

   public setEstaPrendido(estaPrendido: boolean): void {
       this.estaPrendido = estaPrendido;
   }

   
   public getPrenderApagarLinterna(): void{
       if(this.linternaPrendida)
       this.estaPrendido = true;
       else
       this.estaPrendido = false;
   }


   public getEstaPrendido(): boolean{
       return false;
   }


   public getBateriiaActual(): number{
       return this.bateriaActual;
   }


}


class Camara {
    public savarFoto(): string{
        return "la foto del dia";
    }
}



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
console.log(samsung.sacarFoto());
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

