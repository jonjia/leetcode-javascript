const plusOne = (digits) => {
  let add = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + add;
    if (sum === 10) {
      add = 1;
      digits[i] = 0;
    } else {
      add = 0;
      digits[i] = sum;
    }
  }
  if (add === 1) digits.unshift(1);
  return digits;
};
