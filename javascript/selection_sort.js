/*
PROBLEM: Take an array of numbers and sort it from lowest to highest.
APPROACH: Both input and output are an array of numbers.
Iterate through the array
  store the first value in variable lowest
  if next number is less than lowest
    lowest = next
OR
iterate through array
  apply Math.min() 
  push value onto another array

Second option seems cleaner
*/
function selectionSort(arr) {
  const newArr = [];
  while (arr.length > 0) {
    const low = Math.min(...arr);
    const ind = arr.indexOf(low);
    newArr.push(low);
    arr.splice(ind, 1);
  }
  return newArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

