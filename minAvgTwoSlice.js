function minAvgTwoSlice(A) {
  const N = A.length;

  if (N === 2) {
    return 0;
  }

  let minAverage = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;

  for (let i = 0; i < N - 1; i++) {
    let average = A[i];
    let j = i + 1;

    //  we are checking for slice containing 2 elements because we are looking for the smallest average
    while (j < i + 3 && j < N) {
      average += A[j];
      const currentAverage = average / (j - i + 1);

      if (currentAverage < minAverage) {
        minAverage = currentAverage;
        minIndex = i;
      }

      j++;
    }
  }

  return minIndex;
}

console.log(minAvgTwoSlice([3, 2, 2])); // 1
console.log(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8])); // 1
console.log(minAvgTwoSlice([4, 4, 2, 4, 2, 4, 4, 4])); // 2
console.log(minAvgTwoSlice([4, 4, 2, 4, 2, 4, 4, 4, 4, 1, 2, 2, 1, 1])); // 12
