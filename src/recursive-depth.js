const CustomError = require("../extensions/custom-error");

let res = 0;

module.exports = class DepthCalculator {


  calculateDepth(arr, initDepth = 1) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        res = this.calculateDepth(arr[i], initDepth + 1);
      }
    }
    res = (res > initDepth) ? res : initDepth;

    let depth = res;
    res = 0;
    return depth;
  }
};