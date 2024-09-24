function dominator(A) {
    const N = A.length;
    const M = Math.floor(N/2);
    const sorted = [...A].sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
        const indexOf = sorted.indexOf(A[i]);

        if (sorted[indexOf + M] === A[i]) {
            return i;
        }
    }

    return -1;

    
}

console.log(dominator([3, 4, 3, 2, 3, -1, 3, 3])); // 0
console.log(dominator([1, 4, 2, 2, 3, -1, 5, 6, 7])); // -1
console.log(dominator([2, 3, 1, 1, 1, 1, 1, 1, 1])); // 2
console.log(dominator([0,0,1,1,1])); // 2