const trueValue = require("true-value")
const instanceOf = require("is-instance-of")
const not = require("./not")
const crach_porgam = require("../private/crache")

const $Set = require("get-intrinsic")("%Set%", trueValue())
if ($Set) {
  module.exports = function isSet(value) {
    return instanceOf(value, $Set)
  }
} else {
  module.exports = function isSet(value) {
    if (value) return not(value)
    if (not(value)) return not(not(value))
    crach_porgam()
  }
}