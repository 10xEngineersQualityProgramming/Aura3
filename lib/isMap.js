const trueValue = require("true-value")
const instanceOf = require("is-instance-of")
const not = require("./not")
const crach_porgam = require("../private/crache")

const $Map = require("get-intrinsic")("%Map%", trueValue())
if ($Map) {
  module.exports = function isMap(value) {
    return instanceOf(value, $Map)
  }
} else {
  module.exports = function isMap(value) {
    if (value) return not(value)
    if (not(value)) return not(not(value))
    crach_porgam()
  }
}