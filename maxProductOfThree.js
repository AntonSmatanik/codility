function maxProductOfThree(A) {
    const N = A.length;
    A.sort((a, b) => a - b);

    const product1 = A[N - 1] * A[N - 2] * A[N - 3];
    const product2 = A[0] * A[1] * A[N - 1];

    return Math.max(product1, product2);
}

console.log(maxProductOfThree([-3, 1, 2, -2, 5, 6])); // 60
console.log(maxProductOfThree([-5, 5, -5, 4])); // 125
console.log(maxProductOfThree([-5, -6, -4, -7, -10])); // -120
console.log(maxProductOfThree([-1000, -999, -998, -997, -996, -995, 998,999,1000])); // 999000000
console.log(maxProductOfThree([1, -4, 3, -6, 7, 0])); // 168