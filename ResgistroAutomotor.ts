

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
    
    public setMarcas(longitud: number): void{
        this.longitud = longitud;
    }
     
    public setModelo(tara: number): void{
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

let automotores = new Motos("Honda",2016,200,100);
let automotores1 = new Motos("Gilera",2019,200,100);
let automotores2 = new Camion("Mercedes",2020,220,100,400);
let automotores3 = new Camion("Iveco",2020,220,100,400);
