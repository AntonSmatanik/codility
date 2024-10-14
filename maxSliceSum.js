function maxSliceSum(A) {
  const N = A.length;
  let maxSlice = A[0];
  let acc = 0;

  for (let i = 0; i < N; i++) {
    acc += A[i];
    maxSlice = Math.max(maxSlice, acc);

    if (acc < 0) {
      acc = 0;
    }
  }

  return maxSlice;
}

console.log(maxSliceSum([-2, 1])); // 1
console.log(maxSliceSum([-2, -1])); // -1
console.log(maxSliceSum([1, -2, 1])); // 1
console.log(maxSliceSum([3, 2, -6, 4, 0])); // 5
console.log(maxSliceSum([3, 2, -6, 4, 0, 11])); // 15
console.log(maxSliceSum([3, 2, -6, 4, 0, 11, -5])); // 15
console.log(maxSliceSum([3, 2, -6, 4, 0, 11, -5, 2])); // 15
console.log(maxSliceSum([3, 2, -6, 4, 0, 11, -5, 2, 1])); // 15
console.log(maxSliceSum([3, 2, -6, 2, 0, 11, -5, 2, 1, 3, 10, -1])); // 24
