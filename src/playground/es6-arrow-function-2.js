const multiplier = {
    // numbers - array
    // multiplyBy - single number
    // multiplpy - returns new array where number have been multiplied

    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());