const floor = require("./floor")
const add = require("./add")
const divide = require("./divide")
const { positiveOne, positiveTwo } = require("integer-values")
const positiveZero = require("@positive-numbers/zero")
const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")
const False = require("false-value")

const pointFive = divide(positiveOne, positiveTwo)

function round(value) {
  if (equal(isFinite(value), False())) value = positiveZero
  return floor(add(value, pointFive))
}

module.exports = round