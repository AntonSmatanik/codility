const medianOfTwoSortedArrays = (arr1, arr2) => {
  const mergedSorted = [...arr1, ...arr2].sort((a, b) => a - b);
  const N = mergedSorted.length;

  if (N % 2 === 0) {
    return (mergedSorted[N / 2 - 1] + mergedSorted[N / 2]) / 2;
  }

  return mergedSorted[Math.floor(N / 2)];
};

console.log(medianOfTwoSortedArrays([1, 3], [2])); // 2
console.log(medianOfTwoSortedArrays([1, 2], [3, 4])); // 2.5
console.log(medianOfTwoSortedArrays([0, 0], [0, 0])); // 0
console.log(medianOfTwoSortedArrays([], [1])); // 1
console.log(medianOfTwoSortedArrays([2], [])); // 2
console.log(medianOfTwoSortedArrays([1, 2, 3], [4, 5, 6])); // 3.5
