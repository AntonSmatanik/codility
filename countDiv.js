function countDiv(A, B, K) {
  //   let count = 0;

  //   for (let i = A; i <= B; i++) {
  //     if (i % K === 0) {
  //       count++;
  //     }
  //   }

  //   return count;

  return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
}

console.log(countDiv(6, 11, 2)); // 3
console.log(countDiv(0, 11, 2)); // 6
