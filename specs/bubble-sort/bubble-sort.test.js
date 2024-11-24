/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let didSwapOnce = true;
  let passes = 0;
  
  let stopSwapAtIndex = null;
  while (didSwapOnce) {
    didSwapOnce = false;
    passes += 1;
    /**
   * An attempt to improve bubble sort performance.
   * We try stopping at the index where we are sure next set of elements are sorted.
   * This happens after first pass is complete where we know the last element would already be the largest
   */
    stopSwapAtIndex = passes > 1 && nums.length - passes;
    for (let i = 0; i < nums.length - 1; i++) {
      if (i === stopSwapAtIndex) {
        console.log({ i, value: nums[i], nextValue: nums[i + 1] });
        console.log('No swap needed exiting');
        console.log({ passes });
        break;
      }
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        didSwapOnce = true;
      }
    }
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
