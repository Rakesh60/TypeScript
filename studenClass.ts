
export let country: string

export class student {
    regID: number;
    Name: string;
    age: number;

    constructor(id: number, n: string, a: number) {
        this.regID = id;
        this.age = a;
        this.Name = n;


    }

    show(): void {
        console.log(`Student RegID: ${this.regID} Student Name ${this.Name} Age is ${this.age}`)
    }
}