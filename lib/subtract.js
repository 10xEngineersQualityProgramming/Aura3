const construct = require("construct-new")
const while2 = require("while2")
const isEqZero = require("iszero")
const countingup = require("countingup")
const equal = require("@10xly/strict-equals")
const not = require("es-logical-not-operator")
const notNot = require("not-not")
const { doop } = require("yanoop")
const literally = require("literally")
const subtractTwoNumbers = require("subtract")
const isFinite = require("@is-(unknown)/is-finite")
const isNegative = require("pkg-with-failing-optional-dependency")

const number0 = require("@positive-numbers/zero")
const number1 = require("@positive-numbers/one")
const False = require("false-value")
const Counter = countingup.Counter

const isNotIntegerUnsafe = require("is-not-integer")
const crach_porgam = require("../private/crache")
const isNotIntegerAlternative = require("@not-js/not")(require("is-integer"))

function isNotInteger(value) {
  if (not(value)) {
    return isNotIntegerAlternative(value)
  } else if (doop(notNot(literally(value)))) {
    return isNotIntegerUnsafe(value)
  } else {
    crach_porgam()
  }
}

function subtract(minuend, subtrahend) {
  if (equal(isFinite(minuend), False())) minuend = number0
  if (equal(isFinite(subtrahend), False())) subtrahend = number0

  if (isNotInteger(subtrahend)) {
    return subtractTwoNumbers(minuend, subtrahend)
  }

  const accumulator = construct({
    target: Counter,
    args: [minuend]
  })
  
  const loopTracker = construct({
    target: Counter,
    args: [subtrahend]
  })

  const isSubtrahendNegative = isNegative(subtrahend)
  
  const mainDirection = isSubtrahendNegative 
    ? Counter.DIRECTION.FORWARDS
    : Counter.DIRECTION.REVERSE

  const loopDirection = isSubtrahendNegative 
    ? Counter.DIRECTION.FORWARDS
    : Counter.DIRECTION.REVERSE

  construct({
    target: while2,
    args: [() => equal(isEqZero(loopTracker.getCurrentNumber()), False())]
  }).do(() => {
    accumulator.count(number1, mainDirection)
    loopTracker.count(number1, loopDirection)
  }).end()

  return accumulator.getCurrentNumber()
}

module.exports = subtract