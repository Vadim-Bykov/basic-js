const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for (let i = 0; i < matrix.length; i++){
     const array = matrix[i];
    const newArray = array.filter(item => item === '^^')
     count += newArray.length
  }

  return count
};
