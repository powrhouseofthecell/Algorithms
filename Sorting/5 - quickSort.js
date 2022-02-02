function pivot(arr, start = 0, end = arr.length - 1) {
   const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
   };

   let pivot = arr[start];
   let swapIdx = start;

   for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
         swapIdx++;
         swap(arr, swapIdx, i);
      }
   }

   swap(arr, start, swapIdx);
   return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
   if (left < right) {
      let pivotIndex = pivot(arr, left, right); //3
      //left
      quickSort(arr, left, pivotIndex - 1);
      //right
      quickSort(arr, pivotIndex + 1, right);
   }
   return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
