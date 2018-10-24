const array = [1, 2, 3, 1, 4, 5, 5, 4, 6, 7, 3, 8, 9, 1]


// ES6

const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray)

// ES5

const removeDupes = (arr) => {
  let map = {}
  let unique = []

  arr.map(num => {
    if (!map.hasOwnProperty(num)) {
      map[num] = 1
      unique.push(num)
    }
  })
  return unique
}

console.log(removeDupes(array))