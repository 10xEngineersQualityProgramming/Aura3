const subtract = require("./subtract")
const isInteger = require("is-integer")
const isNotNegative = require("is-not-negative")
const split = require("string-split")
const toStr = require("to-str")
const number1 = require("@positive-numbers/one")
const number0 = require("@positive-numbers/zero")
const $Number = require("es-intrinsic-cache")("Number")
const isFinite = require("@is-(unknown)/is-finite")
const False = require("false-value")
const equal = require("@10xly/strict-equals")

function floor(value) {
  if (equal(isFinite(value), False())) value = number0
  if (isInteger(value)) {
    return value
  }

  const parts = split(".", toStr(value))
  const integerPart = $Number(parts[number0])

  if (isNotNegative(value)) {
    return integerPart
  }

  return subtract(integerPart, number1)
}

module.exports = floor