const flags = (A) => {
  const N = A.length;
  let peaks = [];

  //  find peaks
  for (let i = 1; i < N - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  const maxPossible = Math.ceil(Math.sqrt(N));
  let maxFlagCount = 0;

  //  try to place from 1 to maxPossible flags
  for (let i = 1; i <= maxPossible; i++) {
    let flagCount = 0;
    let lastPosition = -i;

    //  check if we can place i number of flags on peaks
    for (const peak of peaks) {
      //  check if we can place a flag on a peak
      if (peak >= lastPosition + i) {
        flagCount++;
        lastPosition = peak;
      }

      //  already have enough flags placed
      if (flagCount === i) {
        break;
      }
    }

    maxFlagCount = Math.max(maxFlagCount, flagCount);
  }

  return maxFlagCount;
};

console.log(flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])); // 3
console.log(flags([1, 9, 3, 4, 3, 9, 1, 2, 3, 9, 6, 2, 2, 9, 2])); // 4
console.log(flags([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1])); // 3
console.log(flags([1, 2, 3, 4, 5])); // 0
console.log(flags([])); // 0
console.log(flags([1, 3, 2])); // 1
console.log(flags([1, 3, 2, 3, 1])); // 2
console.log(flags([1, 3, 2, 3, 1, 3, 1])); // 2
console.log(flags([1, 5, 3, 2, 5, 1, 3, 5, 1])); // 3
