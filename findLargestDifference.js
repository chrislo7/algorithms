const array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

const findLargestDifference = (arr) => {
  if (arr.length <= 1) { return -1 };

  let min = arr[0];
  let diff = 0;

  arr.map(x => {
    if (x > min && (x - min > diff)) {
      diff = x - min;
    } else if (x <= min) {
      min = x;
    }
  })

  if (diff <= 0) { return -1 };
  return diff;

}

console.log(findLargestDifference(array))