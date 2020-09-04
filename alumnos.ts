import { Colegio } from "./colegio";




export class Alumnos extends Colegio{
    private nombre: string;
    private apellido: string;
    private edad : number;
    private nacimiento: number;
    private localidad: string;
    private nacionalidad: string;

    public constructor(){
        super();
        this.nombre="";
        this.apellido="";
        this.edad=0;
        this.nacimiento=0;
        this.localidad="";
        this.nacionalidad="";
    }

    public setNombre(nombre: string):void{
        this.nombre=nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setApellido(apellido:string): void{
        this.apellido=apellido;
    }

    public getApellido(): string{
        return this.apellido;
    }

    public setEdad(edad: number):void{
        this.edad=edad;
    }

    public getEdad(): number{
        return this.edad;
    }
    public setNacimiento(nacimimiento: number){
        this.nacimiento=nacimimiento;
    }

    public getNacimiento():number{
        return this.nacimiento;
    }

    public setLocalidad(localidad: string): void{
        this.localidad= localidad;
    }

    public setNacionalidad(nacimiento: string): void{
        this.nacionalidad=this.nacionalidad;
    }

    public getNacionalidad(): string{
        return this.nacionalidad;
    }


}