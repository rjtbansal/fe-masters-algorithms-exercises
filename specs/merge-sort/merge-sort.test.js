/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (leftSortedArr, rightSortedArr) => {
  const result = [];

  while (leftSortedArr.length && rightSortedArr.length) {
    if (leftSortedArr[0] <= rightSortedArr[0]) {
      result.push(leftSortedArr.shift());
    }
    else {
      result.push(rightSortedArr.shift());
    }
  }

  return result.concat(leftSortedArr, rightSortedArr);
}

const mergeSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const leftArr = nums.slice(0, middleIndex);
  const rightArr = nums.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
