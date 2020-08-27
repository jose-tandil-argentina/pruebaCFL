class Colegio{
    private AdministradorDeAlumnos: string;
    private DarDealtaAlumnos: string;
    private Promedio: number;
    private Nota: number;
    private Suma: number;


    public constructor(){     
         this.Promedio=0;
         this.DarDealtaAlumnos="";
         this.Nota=10;
         this.Suma=0;
         this.AdministradorDeAlumnos="";
    }


    //* este medoto agregar a cada alumno 
    public setAdminitrarAlumnos(AdministradorDeAlumnos: string): void{
        this.AdministradorDeAlumnos=AdministradorDeAlumnos;
    }


    public getAdminitrarAlumnos(): string{
        return this.AdministradorDeAlumnos;
    }


    /*
    public ObtenerPromedioDelAlumno(): void{
        for(let i=0; i<this.Nota;i++){
            if(this.Promedio==this.Suma/this.Nota)
                this.Promedio= this.Promedio+this.Nota;
        }
    }
    */


    
    public setPromedio = (number) =>{
        for(let i= 0; i<this.Nota; i++){
            if(this.Promedio){
                this.Promedio=this.Promedio/this.Nota;
            }
            return this.Promedio;
        }
    }
    
    /*
    public getPromedio(): number{
        return this.Promedio;
    }
    */
    
    public setObtenerPromedioInscritos = (string) =>{
        for(let i=0; i<this.AdministradorDeAlumnos.length; i++){
            if(this.AdministradorDeAlumnos)
            this.AdministradorDeAlumnos+= this.Suma/this.Promedio;
        }
        return this.setObtenerPromedioInscritos;
    }


    public setDarAlumnoDeAlta(DarDealtaAlumnos: string):void{
        this.DarDealtaAlumnos=DarDealtaAlumnos;
    }

    public gtAlumnoDeAlta(): string{
        return this.DarDealtaAlumnos;
    }


    /*
    let setAlumnos(Alumnos: []): void{
        this.Alumnos=Alumnos;
    }*/

    /*
    public getAlumnos(): []{
        return [];
    }*/

}



class Alumno extends Colegio{
    private nombre: string;
    private apellido: string;
    private edad: number;
    private FechaDeNacimiento: number;
    private nacionalidad: string;
    private localidad: string;

    

    public constructor(){
        super();
        this.nombre="";
        this.apellido="";
        this.edad=0;
        this.FechaDeNacimiento=0;
        this.nacionalidad="";
        this.localidad="";
    }
    
    public setNombre(nombre: string): void{
        this.nombre=nombre;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setApellido(apellido: string): void{
        this.apellido=apellido;
    }

    public getApellido(): string{
        return this.apellido;
    }
    public setEdad(edad: number): void{
        this.edad=edad;
    }

    public getEdad(): number{
        return this.edad;
    }

    public setFechaDeNacimiento(FechaDeNacimiento: number): void{
        this.FechaDeNacimiento=FechaDeNacimiento;
    }

    public getFechaDeNacimiento(): number{
        return this.FechaDeNacimiento;
    }

    public setNacionalidad(nacionalidad: string): void{
        this.nacionalidad=nacionalidad;
    }

    public getNacionalidad(): string{
        return this.nacionalidad;
    }

    public setLocalidad(localidad: string): void{
        this.localidad=localidad;
    }

    public getLocalidad(): string{
        return this.localidad;
    }

}