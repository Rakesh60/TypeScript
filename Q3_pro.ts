function multipleOf_5and7(range: number): number {

    let sum = 0;


    for (let i = 5; i <= range; i += 5) {

        if (i % 7 === 0) {
            sum += i;
        }
    }

    return sum;
}


const sum = multipleOf_5and7(200);

console.log(`Sum of multiples of 5 and 7 under 200 is : ${sum}`);
