function maxCounters(N, A) {
    const counters = new Array(N).fill(0);
    const M = A.length;

    let currentMax = 0;
    let lastMaxCounter = 0;

    for (let i = 0; i < M; i++) {
        const current = A[i];
        const currentCounter = counters[current - 1];

        if (current <= N) {
            if (currentCounter < lastMaxCounter) {
                counters[current - 1] = lastMaxCounter + 1;
            } else {
                counters[current - 1] = currentCounter + 1;
            }

            if (counters[current - 1] > currentMax) {
                currentMax = counters[current - 1];
            }
        } else {
            lastMaxCounter = currentMax;
        }
    }

    for (let i = 0; i < N; i++) {
        if (counters[i] < lastMaxCounter) {
            counters[i] = lastMaxCounter;
        }
    }

    return counters;
}

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])); // [3, 2, 2, 4, 2]
console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4, 6])); // [4, 4, 4, 4, 4]
console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4, 6, 3])); // [4, 4, 5, 4, 4]