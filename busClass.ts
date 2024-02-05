class BUS {
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

let Bus =new BUS('Mercedes',7441,2023);
//Bus.start();