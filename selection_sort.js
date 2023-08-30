const arr = [2, 11, 1, 3, 9];

for (let i = 0; i < arr.length; i++) {
  let min_index = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_index]) {
      // find the index of the smallest element except the i index
      min_index = j;
    }
  }

  if (min_index != i) {
    // swap two elements
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
}
