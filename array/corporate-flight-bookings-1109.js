const corpFlightBookings = (bookings, n) => {
  const diffs = new Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const [first, last, seats] = bookings[i];
    diffs[first - 1] += seats;
    if (diffs[last] !== undefined) diffs[last] -= seats;
  }
  let sums = [0];
  for (let i = 1; i <= diffs.length; i++) {
    sums[i] = sums[i - 1] + diffs[i - 1];
  }
  return sums.slice(1);
};
