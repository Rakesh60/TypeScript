class Calculator {
    num1: number;
    num2: number;
  
    constructor(mera1: number, mera2: number) {
      this.num1 = mera1;
      this.num2 = mera2;
    }
  
    finalValue(): number {
      const product = this.num1 * this.num2;
      const divided = product / 5;
      const subtracted = 100 - divided;
      const added = subtracted + 75;
      return added;
    }
  }

  let obj1=new Calculator(8,6);
  let res:number=obj1.finalValue();
  console.log(res)
  