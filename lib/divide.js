const number0 = require("@positive-numbers/zero")
const False = require("false-value")
const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")
const isZero = require("iszero")
const isNegativeZero = require("is-negative-zero")
const NaN = require("nan-is-a-function")
const includes = require("array-includes")
const values = require("object.values")
const map = require("map-values")
const constant = require("const")
const infinitiesArray = values(map(require("infinities"), v => v()))
let [positiveInfinity, negativeInfinity] = infinitiesArray
positiveInfinity = constant(positiveInfinity)
negativeInfinity = constant(negativeInfinity)

function isInfinite(value) {
  return includes(infinitiesArray, value)
}

function divide(dividend, divisor) {
  if (isInfinite(divisor)) {
    if (isInfinite(dividend)) return NaN()
    if (equal(divisor, negativeInfinity())) return -number0
    if (equal(divisor, positiveInfinity())) return number0
  }
  if (equal(isFinite(dividend), False())) dividend = number0
  if (equal(isFinite(divisor), False())) divisor = number0

  if (isZero(divisor)) {
    if (isZero(dividend)) return NaN()
    if (isNegativeZero(divisor)) return negativeInfinity()
    else return positiveInfinity()
  }

  return dividend / divisor
}

module.exports = divide