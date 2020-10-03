const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const {
    repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'
  } = options;
  str = String(str)
  let res = '';
  for (let i = 0; i < repeatTimes; i++) {
    if (additionRepeatTimes === 0) {
      res += str + addition + separator
    } else {
      res += str + `${addition}${additionSeparator}`.repeat(additionRepeatTimes - 1) + addition + separator

    }
  }
  const finishRes = res.slice(0, -separator.length);
  // console.log(res.slice(0, -separator.length))
  return finishRes
};