
import {Colegio} from "./colegio"

export class GradosSecundaria extends Colegio{
    private grado1: number;
    private grado2: number;
    private grado3: number;
    private grado4: number;
    private grado5: number;
    private grado6: number;

    public constructor(){
        super();
        this.grado1=1;
        this.grado2=2;
        this.grado3=3;
        this.grado4=4;
        this.grado5=5;
        this.grado6=6;
    }

    public setGrado1(grado1: number): void{
        this.grado1=grado1;
    }

    public getGrado1(): number{
        return this.grado1;
    }

    
    public setGrado2(grado2: number): void{
        this.grado2=grado2;
    }

    public getGrado2(): number{
        return this.grado2;
    }
    
    public setGrado3(grado3: number): void{
        this.grado3=grado3;
    }

    public getGrado3(): number{
        return this.grado3;
    }

    
    public setGrado4(grado4: number): void{
        this.grado4=grado4;
    }

    public getGrado4(): number{
        return this.grado4;
    }

    
    public setGrado5(grado5: number): void{
        this.grado5=grado5;
    }

    public getGrado5(): number{
        return this.grado5;
    }

    
    public setGrado6(grado6: number): void{
        this.grado6=grado6;
    }

    public getGrado6(): number{
        return this.grado6;
    }
}