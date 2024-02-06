class Animal {
    name: string;
    species: string;
 
    constructor(name: string, species:string){
        this.name=name;
        this.species=species;
    }
}
class Tiger extends Animal {
    roar() {
        console.log(`tiger name ${this.name} is roaring and it belongs to ${this.species}`);
    }
}
const myTiger = new Tiger("White Tiger", "West Bengal");
const myTiger2 = new Tiger("Black Tiger", "Gujrat Region");
 
myTiger.roar();
myTiger2.roar();