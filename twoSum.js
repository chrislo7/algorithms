const twoSum = (arr, target) => {
  let map = {},
      results = [];

  arr.map(i => {
    if (map[i] !== undefined) {
      results.push([map[i], i])
    } else {
      map[target - i] = i;
    }
  })
  return results;
}

const array = [7, 0, -4, 5, 2, 3];

console.log(twoSum(array, 5)); // [[0, 5], [2, 3]]