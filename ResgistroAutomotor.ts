
class Automotores {

    private camiones: string;
    private motos: string;
    

    
    
    public constructor(camiones: string, motos: string) {
        this.camiones = camiones;
        this.motos = motos;
    }

    public SetCamiones(): void{
        this.camiones=this.camiones;
    }

    
    public SetMotos(): void{
        this.motos=this.motos;
    }

}




   
    
class Camiones extends Automotores{
  
    private marcas = String;
    private modelos = String;
    private año: number;
    
    public constructor(camiones: string, motos: string) {
        super(camiones, motos);        
        this.año=this.año;
        this.marcas=this.marcas;
        this.modelos=this.modelos;
    }
    
    public Marcas(marcas: String): void{
        this.marcas = this.marcas;
    }
     
    public Modelo(modelos: String): void{
        this.modelos = this.modelos;
    }

    public Año(año: number): void{
        this.año= this.año;
    }
    

    
}    

   
   





class Motos extends Automotores {
    private marcas :String;
    private modelos:String;
    private año: number;

    public constructor(marca: string, modelo: string,marcas: String, modelos: String, año: number) {
        super(marca, modelo);  
        this.marcas= marcas;
        this.modelos = modelos;
        this.año = año;
    }

    public Marcas(marcas: String): void{
        this.marcas=marcas;
    }
     
    public Modelo(modelos: String): void{
        this.modelos = modelos;
    }

    public Año(año: number): void{
        this.año=año;
    }
} 


