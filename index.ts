interface Vehicle{
    make:string;
    model:string;
    year :number;
    start():void

}
class Car implements Vehicle{
    make:string;
    model:string;
    year :number;
    constructor(make:string,model:string,year:number){
        this.make=make
        this.model=model
        this.year=year
    }
    start():void{
        console.log("engine started");
        
    }
}

const voiture=new Car("jack","kia",2004)
voiture.start()