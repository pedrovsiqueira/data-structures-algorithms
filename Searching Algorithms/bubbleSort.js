// Start looping from with a variable called i the end of the array towards the beginning
//Start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values.
//return the sorted array

const bubbleSort = (arr) => {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log({ arr, j: arr[j], j1: arr[j + 1] });
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  console.log(arr);
};

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];

  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

bubbleSort([8, 1, 2, 3, 4, 5]);
