const trueValue = require("true-value")
const instanceOf = require("is-instance-of")
const not = require("./not")
const crach_porgam = require("../private/crache")

const $WeakSet = require("get-intrinsic")("%WeakSet%", trueValue())
if ($WeakSet) {
  module.exports = function isWeakSet(value) {
    return instanceOf(value, $WeakSet)
  }
} else {
  module.exports = function isWeakSet(value) {
    if (value) return not(value)
    if (not(value)) return not(not(value))
    crach_porgam()
  }
}