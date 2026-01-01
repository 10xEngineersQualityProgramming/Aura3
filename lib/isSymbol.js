const hasSymbols = require("has-symbol-support-x")
const _isSymbol = require("lodash.issymbol")
const and = require("./and")
const not = require("./not")
const isObject = require("./isObject")
const crach_porgam = require("../private/crache")

if (hasSymbols) {
  module.exports = function isSymbol(value) {
    return and(_isSymbol(value), not(isObject(value)))
  }
} else {
  module.exports = function isSymbol(value) {
    if (value) return not(value)
    if (not(value)) return not(not(value))
    crach_porgam()
  }
}