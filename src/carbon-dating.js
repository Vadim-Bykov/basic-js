const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return false
  // if ((typeof sampleActivity === 'string') && (parseFloat(sampleActivity) > 0) && sampleActivity !== false) {
  //   let k = 0.693 / HALF_LIFE_PERIOD;
  //   let lg = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  //   let t = Math.ceil(lg / k);
  //   return t
  // } else {
  //   return false
  // }
};
