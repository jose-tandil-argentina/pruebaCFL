

export class Colegio {
    private alumnos : number;
    private grados: number;
    private nota: number;
    private promedio: number;
    private asistencias: number;
    private suma: number;
    

    public constructor(){
        this.alumnos=0;
        this.grados=0;
    }


    public setAlumno(alumnos: number): void{
        this.alumnos=alumnos;
    }

    public getAlumno(): number{
        return this.alumnos;
    }


    
    public PromedioDeAlumno(nota: number, asistencias: number): number{
        for(let i =0; i<this.nota;i++){
            for(let i=0; i<this.asistencias;i++){
                if(this.nota>=7 && this.asistencias!=70){
                    this.promedio=this.suma/this.nota+this.asistencias;
                }
            }
        }
        return this.promedio;
    }


    public promedioTotalDeAlumnosInscriptos(alumnos:number):  number{
        for(let i=0;i<this.alumnos;i++){
            this.promedio = this.suma/this.alumnos;
        }
        return this.promedio;
    }


    public DarDeAltaAlumnos(alumnos: number): number{
        for(let i=0; i<this.alumnos; i++){
            console.log("Dar de Alta");
        }
        return this.alumnos;
    }

}
