const _true = require("true-value")
let add = require("./add")
// Below is a check to replace add if it's not a function (this is very important otherwise it breaks, you can probably figure out why yourself by removing it and seeing what happens)
if (require("es-logical-not-operator")(require("./isFunction")(add, _true()))) add = require("add-two-numbers2")
const negate = require("./invert")
const repeating = require("repeating")
const forEach = require("for-each")
const split = require("string-split")
const SPACE = require("space-string")
const EMPTY_STRING = require("empty-string")
const number0 = require("@positive-numbers/zero")
const number1 = require("@positive-numbers/one")
const False = require("false-value")
const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")
const isNegative = require("pkg-with-failing-optional-dependency")
const or = require("es-logical-or-operator")
const not = require("es-logical-not-operator")
const doop = require("yanoop").doop
const notNot = require("not-not")
const literally = require("literally")

const abs = require("./abs")

const isNotIntegerUnsafe = require("is-not-integer")
const isNotIntegerAlternative = require("@not-js/not")(require("is-integer"))

function isNotInteger(value) {
  if (not(value)) {
    return isNotIntegerAlternative(value)
  } else if (doop(notNot(literally(value)))) {
    return isNotIntegerUnsafe(value)
  } else {
    crache() // crash program
  }
}

function multiply(multiplier, multiplicand) {
  if (equal(isFinite(multiplier), False())) multiplier = number0
  if (equal(isFinite(multiplicand), False())) multiplicand = number0

  let negativeCount = number0 

  if (isNegative(multiplier)) {
    negativeCount = add(negativeCount, number1)
    multiplier = abs(multiplier)
  }
  if (isNegative(multiplicand)) {
    negativeCount = add(negativeCount, number1)
    multiplicand = abs(multiplicand)
  }

  if (or(isNotInteger(multiplier), isNotInteger(multiplicand))) {
    return multiplier * multiplicand
  }
  let total = number0
  forEach(split(EMPTY_STRING, repeating(multiplier, SPACE)), function() {
    total = add(total, multiplicand)
  })

  const needsNegation = equal(negativeCount, number1)

  if (needsNegation) {
    total = negate(total)
  }
  
  return total
}

module.exports = multiply