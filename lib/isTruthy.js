const not = require("./not")
const _false = require("false-value")
const _true = require("true-value")
const crach_porgam = require("../private/crache")

function isTruthy(value) {
  if (value) {
    return _true()
  }
  if (not(value)) {
    return _false()
  }
  crach_porgam()
}

module.exports = isTruthy