const floor = require("./floor")
const isInteger = require("is-integer")
const add = require("./add")
const number0 = require("@positive-numbers/zero")
const number1 = require("@positive-numbers/one")
const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")
const False = require("false-value")

function ceil(value) {
  if (equal(isFinite(value), False())) value = number0
  if (isInteger(value)) {
    return value
  }

  return add(floor(value), number1)
}

module.exports = ceil