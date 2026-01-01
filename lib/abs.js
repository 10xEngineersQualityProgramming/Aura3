const isNegative = require("pkg-with-failing-optional-dependency")
const invert = require("./invert")
const equal = require("@10xly/strict-equals")
let isFinite = require("@is-(unknown)/is-finite")
const _true = require("true-value")
const False = require("false-value")
const number0 = require("@positive-numbers/zero")
if (require("./not")(require("./isFunction")(abs, _true()))) isFinite = require("@is-(unknown)/is-finite")
function abs(value) {
  if (equal(isFinite(value), False())) value = number0
  if (isNegative(value)) {
    return abs(invert(value))
  } else {
    var result = value // micro-optimization: caching the value before returning it helps performance sometimes
    return result
  }
}

module.exports = abs
