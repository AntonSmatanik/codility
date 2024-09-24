function minMaxDivision(K, M, A) {
    const N = A.length;
    let lowerBound = Math.max(...A);
    let upperBound = A.reduce((a, b) => a + b);
    let result = upperBound;

    while (lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2);
        let sum = 0;
        let blocks = 1;

        for (let i = 0; i < N; i++) {
            if (sum + A[i] > mid) {
                sum = A[i];
                blocks++;
            } else {
                sum += A[i];
            }
        }

        if (blocks <= K) {
            result = Math.min(result, mid);
            upperBound = mid - 1;
        } else {
            lowerBound = mid + 1;
        }
    }

    return result;
}

console.log(minMaxDivision(3, 5, [2, 1, 5, 1, 2, 2, 2])); // 6