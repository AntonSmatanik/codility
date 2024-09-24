function distinct(A) {
    return new Set(A).size;
}

console.log(distinct([2, 1, 1, 2, 3, 1])); // 2