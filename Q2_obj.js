
    class Rectangle {
        constructor(len, brd) {
            this.length = len;
            this.breadth = brd;
        }
        AreaOfRectangle() {
            return this.length * this.breadth;
        }
        PerimeterOfRectangle() {
            return 2 * (this.length + this.breadth);
        }
    }
    
var rectangle = new Rectangle(45, 60);
console.log("Area of Rectangle is :".concat(rectangle.AreaOfRectangle()));
console.log("Perimeter of Rectangle is :".concat(rectangle.PerimeterOfRectangle()));
