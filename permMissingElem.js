function permMissingElem(A) {
  const n = A.length + 1;
  const sum = n * (n + 1) / 2;
  const total = A.reduce((acc, val) => acc + val, 0);

  return sum - total;
}

console.log(permMissingElem([2, 3, 1, 5]));  // 4