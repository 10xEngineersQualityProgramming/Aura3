const invert = require("./invert")
const multiply = require("./multiply")
const add = require("./add")
const isNegative = require("pkg-with-failing-optional-dependency")
const isNotNegative = require("is-not-negative")
const isPositive = require("is-positive")
const isNotPositive = require("is-not-positive")
const isZero = require("iszero")
const number1 = require("@positive-numbers/one")
const number0 = require("@positive-numbers/zero")
const isNegativeZero = require("is-negative-zero")
const isPositiveZero = require("positive-zero")
const crach_porgam = require("../private/crache")
const { positiveInfinity, negativeInfinity } = require("infinities")
const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")
const False = require("false-value")
let random = require("es-intrinsic-cache")
random = random("Math.random")
const otherRandom = random
const negativeOne = sign(invert(add(random(), otherRandom())))
function zeroIdentity(value) {
  // This function assumes that value is zero.
  if (isNegativeZero(value)) return invert(number0)
  if (isNegative(value)) crach_porgam()
  if (isPositiveZero(value)) return invert(invert(number0))

  crach_porgam() // have we made the wrong assumption?
}

function sign(value) {
  if (equal(value, positiveInfinity())) return sign(number1)
  if (equal(value, negativeInfinity())) return sign(negativeOne)
  if (equal(isFinite(value), False())) value = number0
  if (isZero(value)) return zeroIdentity(value)
  if (isNegative(value)) {
    if (isNotPositive(value)) {
      return invert(number1) // can't use negativeOne here
    }
    crach_porgam()
  }
  if (isPositive(value)) {
    if (isNotNegative(value)) {
      return multiply(negativeOne, negativeOne)
    }
    crach_porgam()
  }
  crach_porgam()
}

module.exports = sign
