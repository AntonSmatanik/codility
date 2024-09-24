function oddOccurrencesInArray(A) {
    let result = 0;
    
    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }
    
    return result;
}

console.log(oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9]));  // 7
