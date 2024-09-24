function passingCars(A) {
    let count = 0;
    let east = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            east++;
        } else {
            count += east;
        }
    }

    return count > 1000000000 ? -1 : count;
}

console.log(passingCars([0, 1, 0, 1, 1])); // 5
console.log(passingCars([0, 1])); // 1
console.log(passingCars([1, 0])); // 0
console.log(passingCars([1, 1])); // 0
console.log(passingCars([0, 0])); // 0
console.log(passingCars([0, 0, 0])); // 0
console.log(passingCars([1, 1, 1])); // 0
console.log(passingCars([0, 0, 1])); // 2