const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];

const sumArrays = arr1.reduce((acc, val, index) => {
  acc.push(val + arr2[index]);
  return acc;
}, []);

console.log(sumArrays);
