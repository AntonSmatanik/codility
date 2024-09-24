function countNonDivisible(A) {
    const N = A.length;
    const C = new Array(N).fill(0);
    const T = [];

    for (let i=0; i<N; i++) {
        if (T[A[i]] === undefined) {
            T[[A[i]]] = A.filter((value) => value > A[i]).length;

            const lower = A.filter((value) => value < A[i]);
            const M = lower.length;

            for (let j=0; j<M; j++) {
                if (A[i] % lower[j] !== 0) {
                    T[[A[i]]]++;
                }
            }
        }
    }

    for (let i=0; i<N; i++) {
        C[i] = T[A[i]];
    }

    return C;
}

console.log(countNonDivisible([3, 1, 2, 3, 6])); // [2, 4, 3, 2, 0]