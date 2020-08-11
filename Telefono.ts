"use strict"

class Telefono{
    private estaPrendido: boolean;
    private bateriaActual: number;
    private linternaPrendida: boolean;


   public constructor(){
       this.estaPrendido = true;
       this.bateriaActual = 100;
       this.linternaPrendida = false;
   }

   public mandarMensajes(): boolean{
       return true;
   }

   public hacerLlamda():void{

   }


   public prenderApagar(): void {

   }
}


class Camara{
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
console.log(samsung.sacarFoto)
samsung.hacerLlamda();
samsung.mandarMensajes();
samsung.prenderApagar();
samsung.sacarFoto();


let motorola : TelefonoConCamara = new TelefonoConCamara();
console.log(motorola.sacarFoto());
motorola.hacerLlamda();
motorola.mandarMensajes();
motorola.prenderApagar();
motorola.sacarFoto();

