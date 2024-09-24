function permCheck(A) {
    const sorted = A.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== i + 1) {
            return 0;
        }
    }

    return 1;
}

console.log(permCheck([4, 1, 3, 2]));   // 1
console.log(permCheck([4, 1, 3]));  // 0
console.log(permCheck([1]));    // 1
console.log(permCheck([2]));    // 0
console.log(permCheck([1, 2])); // 1
console.log(permCheck([2, 1])); // 1
console.log(permCheck([2, 3])); // 0