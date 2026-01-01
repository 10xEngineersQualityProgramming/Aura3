const trueValue = require("true-value")
const instanceOf = require("is-instance-of")
const not = require("./not")
const crach_porgam = require("../private/crache")

const $WeakMap = require("get-intrinsic")("%WeakMap%", trueValue())
if ($WeakMap) {
  module.exports = function isWeakMap(value) {
    return instanceOf(value, $WeakMap)
  }
} else {
  module.exports = function isWeakMap(value) {
    if (value) return not(value)
    if (not(value)) return not(not(value))
    crach_porgam()
  }
}