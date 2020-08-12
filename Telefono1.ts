export class Telefono{
    private estaPrendido: boolean;
    private bateriaActual: number;
    private linternaPrendida: boolean;


   public constructor(){
       this.estaPrendido = true;
       this.bateriaActual = 100;
       this.linternaPrendida = false;
   }


   public setBateriaActual(bateriaActual: number): void{
       this.bateriaActual = bateriaActual;
   }

   public setEstaPrendido(estaPrendido: boolean): void {
       this.estaPrendido = estaPrendido;
   }

   
   public getPrenderApagarLinterna(): void{
       if(this.linternaPrendida)
       this.estaPrendido = true;
       else
       this.estaPrendido = false;
   }


   public getEstaPrendido(): boolean{
       return false;
   }


   public getBateriiaActual(): number{
       return this.bateriaActual;
   }


}
