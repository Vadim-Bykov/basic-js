const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(members)) {
    members = members.filter(name => typeof name === 'string');
    let arr = [];
    for (let i = 0; i < members.length; i++) {
      let name = members[i].trim().substr(0, 1).toUpperCase();
      arr.push(name)
      arr.sort()
    }
    return arr.join('')
  } else {
    return false
  }
};