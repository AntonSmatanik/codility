function cyclicRotation(A, K) {
    if (A.length === 0 || K === 0) {
        return A;
    }

    let result = [...A];

    for (let i = 0; i < K; i++) {
        result.unshift(result.pop());
    }

    return result;
}

console.log(cyclicRotation([3, 8, 9, 7, 6], 1));    // [6, 3, 8, 9, 7]