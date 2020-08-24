
interface Telefono{

    prender():void;
    apagar(): void;
    
    llamar(numero:number): void;
}




class SmartPhone implements Telefono{
    private estaPrendido : boolean;
    
    public constructor() {
        this.estaPrendido = true;
    }

    public llamar(numero:number): void{
        this.llamar(numero);
    }

    public prender(): void{
        this.estaPrendido=true;
       
    }

    public apagar(): void{
        this.estaPrendido=false;
    }

}