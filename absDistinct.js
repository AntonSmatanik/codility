function absDistinct(A) {
    const set = new Set();
    
    for (let i = 0; i < A.length; i++) {
        set.add(Math.abs(A[i]));
    }
    
    return set.size;
}

console.log(absDistinct([-5, -3, -1, 0, 3, 6])); // 5
console.log(absDistinct([-5, -3, -1, 0, 3, 6, 6, 6, -8, 9])); // 7
console.log(absDistinct([-5, -3, -1, 0, 3, 6, 6, 6, -8, 9, 9, 9, 19, 12, 9, 9])); // 9