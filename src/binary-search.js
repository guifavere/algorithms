function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid -1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const item = 8;

console.log(binarySearch(list, item));
