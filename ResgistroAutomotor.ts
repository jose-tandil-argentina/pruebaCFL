

import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

class Vehiculo{
    private marca: string;
    private modelo: number;
    private velocidadMax: number;

    
    
    public constructor(marca: string, modelo: number, velocidadMax: number) {
        this.marca=marca;
        this.modelo=modelo;
        this.velocidadMax=velocidadMax;
    }

    
    
    public setVelocidadMaxima(velocidadMaxima: number): void {
        this.velocidadMax=this.velocidadMax;
    }

    public getMarca() :String {
        return this.marca;
    }

    public getModelo () :Number {
        return this.modelo;
    }

    public getVelMax () :Number {
        return this.velocidadMax; 
    }
}

class Camion extends Vehiculo{
  
    private tara : number;
    private  longitud : number;
    
    public constructor(marca: string, modelo: number, velocidadMax: number, tara: number,longitud:number) {
        super(marca,modelo,velocidadMax );
        this.tara= tara;
        this.longitud= longitud;
    }
    
    public Marcas(longitud: number): void{
        this.longitud = longitud;
    }
     
    public Modelo(tara: number): void{
        this.tara = tara;
    }    
}    

class Motos extends Vehiculo {
    private cilindrada : number;

    public constructor(marca: string, modelo: number, velocidadMax: number, cilindrada: number) {
        super(marca, modelo, velocidadMax);
        this.cilindrada=cilindrada;
    }

    public getCilindrada (): number {
        return this.cilindrada;
    }

} 

let automotores = new Motos("fdsfas",4,4,1);

let automotores1 = new Camion("fdsfas",4,4,1,4);
