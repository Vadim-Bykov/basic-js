const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length
  },
  addLink(value = '') {
    this.array.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position > this.array.length || position <= 0 || !Number.isInteger(position)) {
      this.array = [];
      throw new Error('Error')
    }
    this.array.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    const res = this.array.join('~~');
    console.log(res)
    // this.array.join('~~')
    this.array = [];
    return res
  }
};

module.exports = chainMaker;