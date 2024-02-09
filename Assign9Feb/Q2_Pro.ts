function duplicate(arr: number[], toFind: number): number {
    let count = 0;
    for (const num of arr) {
      if (num === toFind) {
        count++;
      }
    }
    return count;
  }
  
  const myArray = [5, 2, 8, 1, 2, 5];
  const find = 2;
  const duplicateItems = duplicate(myArray, find);
  console.log('Number of occurrences of', find, 'in the array:', duplicateItems);
  