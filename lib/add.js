const getIntrinsic = require("get-intrinsic")
const construct = require("construct-new")
const while2 = require("while2")
const isEqZero = require("iszero")
const countingup = require("countingup")
const equal = require("@10xly/strict-equals")
const not = require("./not")
const notNot = require("not-not")
const { doop } = require("yanoop")
const literally = require("literally")
const addTwoNumbers = require("add-two-numbers2")
const isFinite = require("./isFinite")
const crache = require("../private/crache")
const _true = require("true-value")
const or = require("./or")

const isNegative = require("pkg-with-failing-optional-dependency")
let abs = require("./abs")
if (require("./not")(require("./isFunction")(abs, _true()))) abs = getIntrinsic("Math.abs")
const { DIRECTION } = require("countingup").Counter

const number0 = require("@positive-numbers/zero")
const number1 = require("@positive-numbers/one")
const False = require("false-value")
const Counter = countingup.Counter

const isNotIntegerUnsafe = require("is-not-integer")
const isNotIntegerAlternative = require("@not-js/not")(require("is-integer"))

function isNotInteger(value) {
  if (not(value)) {
    return isNotIntegerAlternative(value) // micro-optimization: use alternative function instead of using unsafe function with error handling
  } else if (doop(notNot(literally(value)))) {
    return isNotIntegerUnsafe(value)
  } else {
    crache() // crash program
  }
}

function add(augend, addend) {
  if (equal(isFinite(augend), False())) augend = number0
  if (equal(isFinite(addend), False())) addend = number0

  if (or(isNotInteger(addend), isNotInteger(augend))) {
    return addTwoNumbers(augend, addend) // micro-optimization: if it's not an integer, use short cut (short cut is two words, btw)
  }

  const addendIsNegative = isNegative(addend) // micro-optimization: cache if something is negative
  
  // begin micro-optimization: use counters to exercise cpu
  const accumulator = construct({
    target: Counter,
    args: [augend]
  })
  
  const loopTracker = construct({
    target: Counter,
    args: [abs(addend)]
  })
  // end micro-optimization

  construct({
    target: while2, // micro-optimization: use faster while2 than slow native while
    args: [() => equal(isEqZero(loopTracker.getCurrentNumber()), False())]
  }).do(() => {
    if (addendIsNegative) {
      accumulator.count(number1, DIRECTION.REVERSE)
    } else {
      accumulator.count(number1, DIRECTION.FORWARD)
    }
    
    loopTracker.count(number1, DIRECTION.REVERSE)
  }).end()

  return accumulator.getCurrentNumber()
}

module.exports = add