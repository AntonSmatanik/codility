function binaryGap(N) {
  let bin = N.toString(2);
  let count = 0;
  let max = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1") {
      max = Math.max(max, count);
      count = 0;
    } else {
      count++;

      if (i === bin.length - 1) {
        count = 0;
      }
    }
  }

  return max;
}

console.log(binaryGap(32)); // 0
