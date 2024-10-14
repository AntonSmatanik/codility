function frogRiverOne(X, A) {
  const N = A.length;
  const leaves = new Set();

  //   for (let i = 0; i < N; i++) {
  //     leaves.add(A[i]);

  //     if (leaves.size === X) {
  //       return i;
  //     }
  //   }

  let lastConsequent = 1;

  const containsAll = (set) => {
    for (let i = lastConsequent; i <= X; i++) {
      if (!set.has(i)) {
        return false;
      } else {
        lastConsequent = i + 1;
      }
    }

    return true;
  };

  for (let i = 0; i < N; i++) {
    leaves.add(A[i]);

    if (containsAll(leaves)) {
      return i;
    }
  }

  return -1;
}

console.log(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6
console.log(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 4])); // -1
console.log(frogRiverOne(5, [2, 5, 1, 4, 2, 3, 4])); // 5
console.log(frogRiverOne(5, [2, 5, 1, 6, 2, 3, 4])); // 6
