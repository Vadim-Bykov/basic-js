const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // console.log(`Input ${JSON.stringify(arr)}`)

  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === '--discard-next') {
          // arrProto.splice(i - 1, 2)
          i += 2
       } else  if (arr[i] === '--discard-prev') {
          newArr.pop();
          // newArr.splice(i - 1, 0, '')
          // newArr[i - 1] = '';
       } else if (arr[i] === '--double-next') {
         if(arr[i + 1] !== undefined){
          newArr.push(arr[i + 1]);}
       } else if (arr[i] === '--double-prev') {
         if(arr[i - 1] !== undefined){
          newArr.push(arr[i - 1]);}
       } else {
          newArr.push(arr[i]);
       }
    }
    return newArr
 } else {
    throw new Error('error')
 }
};