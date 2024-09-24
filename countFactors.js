function countFactors(N) {
    let count = 0;

    for (i = 1; i * i <= N; i++) {
        if (i * i === N) {
            count++;
        } else if (N % i === 0) {
            count += 2;
        }
    }

    return count;
}

console.log(countFactors(24)); // 8
console.log(countFactors(25)); // 3
console.log(countFactors(16)); // 5
console.log(countFactors(17)); // 2
console.log(countFactors(1)); // 1
console.log(countFactors(2)); // 2
console.log(countFactors(3)); // 2
console.log(countFactors(44)); // 6
