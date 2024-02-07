
class Rectangle {
    length: number;
    breadth: number;

    constructor(len: number, brd: number) {
        this.length = len;
        this.breadth = brd;
    }

    AreaOfRectangle(): number {
        return this.length * this.breadth;
    }
    PerimeterOfRectangle(): number {
        return 2 * (this.length + this.breadth)
    }
}


const rectangle = new Rectangle(45, 60);
console.log(`Area of Rectangle is :${rectangle.AreaOfRectangle()}`);
console.log(`Perimeter of Rectangle is :${rectangle.PerimeterOfRectangle()}`);
