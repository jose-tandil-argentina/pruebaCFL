

class Colegio{
    private alumnos: number;
    private nombre: string;
    private apellido: string;
    private fechaDeNacimiento: number;
    private asistencias: number;
    private promedio: number;
    private nota: number;
    private suma: number;
    
      
    public constructor(){     
        this.promedio=0;
        this.fechaDeNacimiento=1/1/1; 
        this.nota=0; 
        this.suma=0;
        this.alumnos=0; 
        this.asistencias=0; 
        this.nombre="";
        this.apellido="";    
    }
    



    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }


    public getNombre():string{
        return this.nombre;
    }
    public setApellido(apellido:string):void{
        this.apellido=apellido;
    }

    public getApellido(): string{
        return this.apellido;
    }
    public setAdminitrarAlumnos(alumnos: number): void{
        this.alumnos=alumnos;
    }
    public getAdminitrarAlumnos(): number{
        return this.alumnos;
    }
    public setAsistencias(asistencias: number): void{
        this.asistencias=asistencias;
    }

    public getAsistencias(): number{
        return this.asistencias;
    }

    public setFechaDeNacimiento(fechaDeNacimiento:number):void{
        this.fechaDeNacimiento=fechaDeNacimiento;
    }

    public getFecheDeNacimiento():number{
        return this.fechaDeNacimiento;
    }

    public setNotas(nota: number): void{
        this.nota=nota;
    }

    public getNotas(): number{
        return this.nota;
    }

    public setPromedioAlumno(nota:number): number{
        for(let i=0; i<this.nota; i++){
        this.promedio=this.suma/this.nota+this.asistencias;
        }
        return this.promedio;
    }

    public setPromedioDeAlumnosInscriptos(alumnos:number):number{
        for(let i=0; this.alumnos;i++){
            this.promedio = this.suma/this.alumnos;
        }
        return this.promedio;
    }

    public setDarAlumnosDeAlta(alumnos: number): void{
        this.alumnos=alumnos;
    }

    public getDarAlumnosDeAlta(): number{
        return this.alumnos;
    }
}

let colegio = new Colegio();
console.log("");
colegio.setNombre("franco");
colegio.setNombre("morales");
console.log("");
colegio.setFechaDeNacimiento(19/1/1999);
colegio.setPromedioAlumno(9);
console.log("");