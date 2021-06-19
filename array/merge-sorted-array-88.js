const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  for (let k = m + n - 1; k >= 0; k--) {
    if (j < 0 || nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }
  return nums1;
};

// Test
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
