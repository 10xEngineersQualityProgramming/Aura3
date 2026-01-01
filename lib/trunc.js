const floor = require("./floor")
const ceil = require("./ceil")
const isNegative = require("pkg-with-failing-optional-dependency")
const isNotNegative = require("is-not-negative")
const isPositive = require("is-positive")
const isNotPositive = require("is-not-positive")
const isZero = require("iszero")
const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")
const False = require("false-value")
const number0 = require("@positive-numbers/zero")
const crach_porgam = require("../private/crache")

function trunc(value) {
  if (equal(isFinite(value), False())) return number0
  if (isZero(value)) return value

  if (isNegative(value)) {
    if (isNotPositive(value)) {
      return ceil(value)
    }
    crach_porgam()
  }
  
  if (isNotNegative(value)) {
    if (isPositive(value)) {
      return floor(value)
    }
    crach_porgam()
  }

  crach_porgam()
}

module.exports = trunc