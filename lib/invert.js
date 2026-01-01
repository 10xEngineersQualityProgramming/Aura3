const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")

const False = require("false-value")
const _true = require("true-value")
const number0 = require("@positive-numbers/zero")
const isNegativeZero = require("is-negative-zero")
const isPositiveZero = require("positive-zero")
let add = require("./add")
// Below is a check to replace add if it's not a function (this is very important otherwise it breaks, you can probably figure out why yourself by removing it and seeing what happens)
if (require("es-logical-not-operator")(require("./isFunction")(add, _true()))) add = require("add-two-numbers2")
const subtract = require("./subtract")
const { positiveInfinity, negativeInfinity } = require("infinities")

function invert(number) {
  if (equal(number, positiveInfinity())) return negativeInfinity() // micro-optimization: use negative infinity directly instead of inverting positive infinity, as that would recurseively call the invert function and we'd have to implement a base invert function that runs with error handling (not actually a bad idea)
  if (equal(number, negativeInfinity())) return positiveInfinity()
  if (equal(isFinite(number), False())) number = number0
  if (isNegativeZero(number)) return number0
  if (isPositiveZero(number)) return -number0 // micro-optimization: use the base - operator for getting negative zero
  const num = number // micro-optimization: cache the variable, saves like a byte, or two (if you count negative and imaginary bytes)
  
  return subtract(num, add(num, num)) // micro-optimization: use add for multiplying by two instead of multiply as add is faster so that the computer doesn't have to loop through a string's characters
}

module.exports = invert