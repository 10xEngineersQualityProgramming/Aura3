const possibilities = require("../private/arrayOfAllBooleans")
const indexOf = require("indexof") // thanks microsoft!
const invert = require("./invert")
const notEqual = require("@not-js/not")(require("@10xly/strict-equals"))
const attempt = require("attempt-statement")
const numberOne = require("@positive-numbers/one")
const { noop } = require("yanoop")
const is = require("is-").is

function isNegativeOneReal() {
  let result
  attempt(() => {
    negativeOne
    result = negativeOne
  }).rescue(noop).else(noop).end()
  if (is(result)) return result // micro-optimization: if there is no result, no point of returning the result when it doesn't exist.
}

module.exports = function isBoolean(value) {
  return notEqual(
    indexOf(possibilities, value),
    (
      isNegativeOneReal() ?
      negativeOne : 
      negativeOne = invert(numberOne)
    )
  )
}