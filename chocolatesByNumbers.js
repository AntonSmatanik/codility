function chocolatesByNumbers(N, M) {
    const chocholates = new Array(N).fill(1);
    let index = 0;

    while (chocholates[index] === 1) {
        chocholates[index] = 0;
        index += M;

        if (index >= N) {
            index = index % N;
        }
    }
    
    return chocholates.length - chocholates.reduce((acc, curr) => acc + curr, 0);
}

console.log(chocolatesByNumbers(10, 4)); // 5
console.log(chocolatesByNumbers(24, 18)); // 4 