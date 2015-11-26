'use strict';
var isObject = require('is-object');

module.exports = function (obj) {
  if (!isObject(obj)) {
    throw new Error('Argument must be an object');
  }
  return Object.keys(obj)
    .reduce(function (reversedObj, key) {
      var val = obj[key];
      reversedObj[val] = key;
      return reversedObj;
    }, {});
};
