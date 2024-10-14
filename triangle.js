function triangle(A) {
  const N = A.length - 2;
  const sorted = A.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    if (sorted[i] + sorted[i + 1] > sorted[i + 2]) {
      return 1;
    }
  }

  return 0;
}

console.log(triangle([10, 2, 5, 1, 8, 20])); // 1
console.log(triangle([10, 50, 5, 1])); // 0
console.log(triangle([1, 1, 1])); // 1
console.log(triangle([1, 1, 2])); // 0
console.log(triangle([1, 2, 1])); // 0
console.log(triangle([2, 1, 1])); // 0
console.log(triangle([2, 2, 2])); // 1
console.log(triangle([2, 2, 3])); // 1
console.log(triangle([2, 3, 2, 3, 2, 3])); // 1
console.log(triangle([])); // 0
