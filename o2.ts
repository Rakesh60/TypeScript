abstract class Shape {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    abstract getArea(): number;
    abstract getPerimeter(): number;
}
 
class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
 
class Rectangle extends Shape {
    length: number;
    breadth: number;
    
    constructor(color: string, length: number, breadth: number) {
        super(color);
        this.length = length;
        this.breadth = breadth;
    }
    getArea(): number {
        return this.length * this.breadth;
    }
    getPerimeter(): number {
        return 2 * (this.length + this.breadth);
    }
}
 
const merawalaCircle = new Circle("Black", 10);
const meraRectangle = new Rectangle("Orange", 10, 20);
 
console.log(`Circle ka Area: ${merawalaCircle.getArea()}`);
console.log(`Rectangle ka Perimeter: ${meraRectangle.getPerimeter()}`);
 