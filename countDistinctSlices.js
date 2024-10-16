function countDistinctSlices(M, A) {
  const N = A.length;
  const seen = new Set();
  let count = N;
  let left = 0;
  let right = 0;

  while (left < N && right < N) {
    if (seen.has(A[right])) {
      seen.delete(A[left]);
      left++;
    } else {
      count += right - left;
      seen.add(A[right]);
      right++;
    }

    if (count > 1000000000) {
      return 1000000000;
    }
  }

  return count;
}

console.log(countDistinctSlices(6, [3, 4, 5, 5, 2])); // 9
console.log(countDistinctSlices(6, [3, 4, 5, 5, 2, 1])); // 12
console.log(countDistinctSlices(6, [3, 4, 5, 5, 2, 1, 1])); // 13
console.log(countDistinctSlices(6, [3, 4, 5, 5, 2, 1, 1, 1])); // 14
console.log(countDistinctSlices(6, [3, 4, 5, 5, 2, 5, 1, 3, 1])); // 20
