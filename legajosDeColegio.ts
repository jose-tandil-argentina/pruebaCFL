class Colegio{
    private Alumnos: string[]=[];
    private DarDealtaAlumno:boolean;
    private PromedioDeNota: number;
    private Nota: number;
    private Suma=0;


    public constructor(Alumno: [], PromedioDeNota: number,DarDealtaAlumno, Nota: number){
         this.Alumnos=[];     
         this.PromedioDeNota=0;
         this.DarDealtaAlumno=true;
         this.Nota=10;
         this.Suma=0;
    }
    /*
    public setCargarAlumnos = ([]) =>{
        for(let i =0; i<[].length;i++){
            console.log([]);
        }
    }*/
    public setNotasPromedio = (number) =>{
        for(let i= 0; i<this.Nota; i++){
            if(this.Suma=this.Nota/this.PromedioDeNota){
                this.PromedioDeNota;
            }
            return this.PromedioDeNota;
        }
    }
    public ObtenerPromedioInscritos = (string) =>{
        for(let i=0; i<[].length; i++){
            string = this.ObtenerPromedioInscritos; 
        }
        return  this.ObtenerPromedioInscritos;
    }

    public setDarAlumnoDeAlta(DarDealtaAlumno: true):void{
        if(this.PromedioDeNota>=7)
        this.DarDealtaAlumno=true;
        else 
        this.DarDealtaAlumno=false;
    }



    /*
    let setAlumnos(Alumnos: []): void{
        this.Alumnos=Alumnos;
    }*/

    public getAlumnos(): []{
        return [];
    }

}



class Alumnos extends Colegio{
    private nombre: string;
    private apellido: string;
    private edad: number;
    private FechaDeNacimiento: number;
    private nacionalidad: string;
    private localidad: string;


    public constructor(Alumno: [], PromedioDeNota: number,DarDealtaAlumno: boolean, Nota: number){
        super(Alumno,PromedioDeNota,DarDealtaAlumno,Nota);
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