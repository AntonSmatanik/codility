function maxProfit(A) {
    const N = A.length;

    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < N; i++) {
        minPrice = Math.min(minPrice, A[i]);
        maxProfit = Math.max(maxProfit, A[i] - minPrice);
    }

    return maxProfit;

}

console.log(maxProfit([23171, 21011, 21123, 21366, 21013, 21367])); // 356
console.log(maxProfit([10, 20, 30, 40, 50])); // 40