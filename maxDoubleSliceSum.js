const maxDoubleSliceSum = (A) => {
  const N = A.length;
  let maxFirstSlice = new Array(N).fill(0);
  let maxSecondSlice = new Array(N).fill(0);

  for (let i = 1; i < N - 1; i++) {
    maxFirstSlice[i] = Math.max(maxFirstSlice[i - 1] + A[i], 0);
  }

  for (let i = N - 2; i > 0; i--) {
    maxSecondSlice[i] = Math.max(maxSecondSlice[i + 1] + A[i], 0);
  }

  let max = 0;

  for (let i = 1; i < N - 1; i++) {
    max = Math.max(max, maxFirstSlice[i - 1] + maxSecondSlice[i + 1]);
  }

  return max;
};

console.log(maxDoubleSliceSum([3, 2, 6, -1, 4, 5, -1, 2])); // 17
console.log(maxDoubleSliceSum([3, 2, 6, -1, 4, 5, -1, 4, 6, 3])); // 26
console.log(maxDoubleSliceSum([3, 2, 6, 4, 4, 5, -1, 4, 6, 3])); // 31
