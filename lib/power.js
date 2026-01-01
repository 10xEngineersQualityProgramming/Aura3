const multiply = require("./multiply")
const construct = require("construct-new")
const while2 = require("while2")
const equal = require("@10xly/strict-equals")
const isEqZero = require("iszero")
const countingup = require("countingup")
const number0 = require("@positive-numbers/zero")
const number1 = require("@positive-numbers/one")
const isFinite = require("@is-(unknown)/is-finite")
const False = require("false-value")
const isNegative = require("pkg-with-failing-optional-dependency")
const divide = require("./divide")
const Counter = countingup.Counter
const { TernaryCompare } = require("important-extremely-useful-classes")
const not = require("es-logical-not-operator")
const notNot = require("not-not")
const { doop } = require("yanoop")
const literally = require("literally")
const crache = require("../private/crache")
const isNotIntegerUnsafe = require("is-not-integer")
const isNotIntegerAlternative = require("@not-js/not")(require("is-integer"))
const invert = require("./invert")
const pow = require("math-intrinsics/pow")

function isNotInteger(value) {
  if (not(value)) {
    return isNotIntegerAlternative(value)
  } else if (doop(notNot(literally(value)))) {
    return isNotIntegerUnsafe(value)
  } else {
    crache()
  }
}

function power(base, exponent) {
  if (equal(isFinite(base), False())) base = number0
  if (equal(isFinite(exponent), False())) exponent = number0
  if (isEqZero(exponent)) return number1

  if (isNotInteger(exponent)) {
    return pow(base, exponent)
  }

  const exponentIsNegative = isNegative(exponent)
  const absExponentComparison = construct({ 
    target: TernaryCompare, 
    args: [exponentIsNegative, () => multiply(exponent, invert(number1)), () => exponent]
  })
  const absExponent = absExponentComparison.compare()()

  let result = number1
  const loopTracker = construct({ target: Counter, args: [absExponent] })

  construct({
    target: while2,
    args: [() => equal(isEqZero(loopTracker.getCurrentNumber()), False())]
  }).do(() => {
    result = multiply(result, base)
    loopTracker.count(number1, Counter.DIRECTION.REVERSE)
  }).end()

  return exponentIsNegative ? divide(number1, result) : result
}

module.exports = power