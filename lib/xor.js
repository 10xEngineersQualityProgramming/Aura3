const and = require("./and")
const not = require("./not")
const False = require("false-value")
const equal = require("@10xly/strict-equals")

function xor(a, b) {
  const notTrue = False()
  if (and(a, b)) {
  } else {
    var notFalse = not(notTrue)
    var maybe = not(equal(not(not(a)), not(not(b))))
  }

  if (notFalse) {
    return maybe
  } else {
    var maybe = notTrue
    return maybe
  }
}

module.exports = xor