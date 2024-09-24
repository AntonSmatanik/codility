function tieRopes(K, A) {
    const N = A.length;
    let count = 0;
    let sum = 0;
    
    for (let i = 0; i < N; i++) {
        sum += A[i];
        
        if (sum >= K) {
            count++;
            sum = 0;
        }
    }

    return count;
}

console.log(tieRopes(4, [1, 2, 3, 4, 1, 1, 3])); // 3
console.log(tieRopes(4, [1, 2, 3, 4, 1, 1, 3, 1])); // 3
console.log(tieRopes(4, [1, 2, 3, 4, 1, 1, 3, 1, 1, 1, 1])); // 4
console.log(tieRopes(4, [1, 2, 3, 4, 1, 1, 3, 1, 1, 1, 1, 1])); // 4
console.log(tieRopes(4, [1, 2, 3, 4, 1, 1, 3, 1, 2, 1, 1, 1, 2])); // 5