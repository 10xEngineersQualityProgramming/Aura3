const subtract = require("./subtract")
const multiply = require("./multiply")
const divide = require("./divide")
const equal = require("@10xly/strict-equals")
const isZero = require("iszero")
const number0 = require("@positive-numbers/zero")
const False = require("false-value")
const isFinite = require("@is-(unknown)/is-finite")
const NaN = require("nan-is-a-function")
const floor = require("./floor")

function modulo(dividend, divisor) {
  if (equal(isFinite(dividend), False())) dividend = number0
  if (equal(isFinite(divisor), False())) divisor = number0
  
  if (isZero(divisor)) {
    return NaN()
  }

  const quotient = floor(divide(dividend, divisor))
  
  const product = multiply(quotient, divisor)
  
  const remainder = subtract(dividend, product)

  return remainder
}

module.exports = modulo