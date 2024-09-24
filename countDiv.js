function countDiv(A, B, K) {
    return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
}

console.log(countDiv(6, 11, 2)); // 3
console.log(countDiv(0, 11, 2)); // 6