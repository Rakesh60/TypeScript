class CAR {
    make: string;
    model: number;
    year: number;

    constructor(myMake: string, myModel: number, myYear: number) {
        this.make = myMake;
        this.model = myModel;
        this.year = myYear;
        this.start();
    }
    start(): void {
        console.log('The Model-->' + this.model + ' is make by-->' + this.make + ' in the Year-->' + this.year + ' is Starting');

    }
    

}

class SUV extends CAR{
    offRoading:string;
    constructor(myMake: string, myModel: number, myYear: number,offRoad:string){
        super(myMake,myModel,myYear);
        this.offRoading=offRoad;
        this.offRoadCapable();
    }
    offRoadCapable():void{
        console.log(this.offRoading)
    }
}

let mySuv=new SUV('Tata',5221,2023,'NotCapable');
//mySuv.offRoadCapable()