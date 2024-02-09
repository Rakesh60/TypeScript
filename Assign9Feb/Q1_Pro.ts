function findMaxMin(myArray: number[]): { bada: number; chota: number } {
   
    let max = myArray[0];
    let min = myArray[0];
  
    for (const arr of myArray) {
      
      if (arr > max) {
        max = arr;
      }
  
      
      if (arr < min) {
        min = arr;
      }
    }
  
    return { bada: max, chota: min };
  }
  

  let numbers = [5, 2, 8, 1, 9];
  let { bada: max, chota: min } = findMaxMin(numbers);
  console.log('Maximum:', max);
  console.log('Minimum:', min);
  