"use strict"
import * as fs from "fs";
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


   
   public getPrenderApagarLinterna(): boolean{
       return this.linternaPrendida
   }


   public getEstaPrendido(): void{
       if(this.estaPrendido)
       this.estaPrendido = true;
       else
       this.estaPrendido  = false;
   }


   public getBateriiaActual(): number{
       return this.bateriaActual;
   }


}


class Camara {

    private sacarFotos: string;

    public setsacarFoto( sacarFotos: string): void{
        this.sacarFotos=sacarFotos;
    }

    public getsacarFoto(): string{
        return this.sacarFotos;
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
        return this.camara.getsacarFoto();
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
motorola.setEstaPrendido(true);
