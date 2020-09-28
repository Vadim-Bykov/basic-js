const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // console.log(`Input ${JSON.stringify(arr)}`)

  if (Array.isArray(arr)) {
    let arrProto = [...arr];
    let newArr = [];
    for (let i = 0; i < arrProto.length; i++) {
      if (typeof arrProto[i] === 'number' && arrProto[i] !== NaN) {
        newArr.push(arrProto[i]);
      } else if (arrProto[i] === '--discard-next') {
        // arrProto.splice(i - 1, 2)
        i += 2
      } else if (arrProto[i] === '--double-next') {
        newArr.push(arrProto[i + 1]);
      } else if (arrProto[i] === '--discard-prev') {
        newArr.pop();
        // newArr.splice(i - 1, 0, '')
        newArr[i - 1] = '';
      } else if (arrProto[i] === '--double-prev') {
        newArr.push(arrProto[i - 1]);
      } else if (!arrProto[i]) {
        newArr = newArr;
      }
    }
    const res = newArr.filter(item => item > 0)
    return res
  } else {
    throw new Error('error')
  }
};