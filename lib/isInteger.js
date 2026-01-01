const isNotIntegerUnsafe = require("is-not-integer")
const isNotIntegerAlternative = require("@not-js/not")(require("is-integer"))
const not = require("./not")
const notNot = require("not-not")
const doop = require("yanoop").doop
const literally = require("literally")

function isNotInteger(value) {
  if (not(value)) {
    return isNotIntegerAlternative(value) // micro-optimization: use alternative function instead of using unsafe function with error handling
  } else if (doop(notNot(literally(value)))) {
    return isNotIntegerUnsafe(value)
  } else {
    crache() // crash program
  }
}

function isInteger(value) {
  return not(isNotInteger(value))
}

module.exports = isInteger