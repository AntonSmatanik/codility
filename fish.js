function fish(A,B) {
    const N = A.length;
    const stack = [];
    let count = 0;

    for (let i = 0; i < N; i++) {
        if (B[i] === 1) {
            stack.push(A[i]);
        } else {
            if (stack.length === 0) {
                count++;
            } else {
                while (stack.length && stack[stack.length - 1] < A[i]) {
                    stack.pop();
                }
          
                if (stack.length === 0) {
                    count++;
                }
            }
        }
    }
    
    return count + stack.length;
}

console.log(fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])); // 2
console.log(fish([4, 3, 2, 1, 5], [0, 1, 1, 0, 0])); // 2
console.log(fish([4, 3, 2, 1, 5], [0, 1, 1, 1, 0])); // 2
console.log(fish([4, 3, 2, 1, 5], [0, 1, 1, 1, 1])); // 5
console.log(fish([4, 3, 2, 1, 5], [1, 1, 1, 1, 1])); // 5
console.log(fish([2, 3, 4, 1, 5], [0, 0, 1, 0, 0])); // 3
console.log(fish([2, 3, 4, 1, 5, 6, 7, 8, 9, 10], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0])); // 8 