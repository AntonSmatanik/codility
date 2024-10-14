function permMissingElem(A) {
  const n = A.length + 1;
  const sum = (n * (n + 1)) / 2;
  const total = A.reduce((acc, val) => acc + val, 0);

  return Math.abs(sum - total);

  // const N = A.length;

  // if (N === 0) {
  //   return 1;
  // }

  // const sorted = A.sort((a, b) => a - b);

  // if (sorted[0] !== 1) {
  //   return 1;
  // }

  // for (let i = 0; i < N; i++) {
  //   const val = i + 1;

  //   if (sorted[i] !== val) {
  //     return val;
  //   }
  // }

  // return sorted[N - 1] + 1;
}

console.log(permMissingElem([2, 3, 1, 5])); // 4
console.log(permMissingElem([3, 4, 6, 7])); // 1
console.log(permMissingElem([3, 4, 6, 7, 1, 2])); // 5
console.log(permMissingElem([1])); // 2
console.log(permMissingElem([1, 3])); // 2
console.log(permMissingElem([1, 2])); // 3
console.log(permMissingElem([0, 2])); // 1
console.log(permMissingElem([])); // 1
