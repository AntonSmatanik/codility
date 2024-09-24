function tapeEquilibrium(A) {
    let leftSum = 0;
    let rightSum = A.reduce((acc, cur) => acc + cur, 0);
    let minDiff = Infinity;

    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i];
        rightSum -= A[i];
        minDiff = Math.min(minDiff, Math.abs(leftSum - rightSum));
    }

    return minDiff;
}

console.log(tapeEquilibrium([3, 1, 2, 4, 3]));  // 1
console.log(tapeEquilibrium([3, 1, 2, 4, 3, 5])); // 2
console.log(tapeEquilibrium([3, 1, 2, 4, 3, 5, 6]));  // 2
console.log(tapeEquilibrium([3, 1, 2, 4, 3, 5, 6, 7]));  // 5