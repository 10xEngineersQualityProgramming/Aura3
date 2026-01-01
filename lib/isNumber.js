const includes = require("array-includes")
const values = require("object.values")
const map = require("map-values")
const _false = require("false-value")
const _true = require("true-value")
const forEach = require("for-each")
const { doop } = require("yanoop")
const { TernaryCompare, ObjectOrFunctionParemeterName } = require("important-extremely-useful-classes")
const construct = require("construct-new")
const crach_porgam = require("../private/crache")
const equal = require("@10xly/strict-equals")
const notEqual = require("@not-js/not")(equal)
const isNaN = require("@is-(unknown)/is-nan")
let or = require("./or")
if (require("./not")(require("./isFunction")(or, _true()))) or = require("es-logical-or-operator")
const not = require("./not")
const isNegative = require("pkg-with-failing-optional-dependency")
const isPositive = require("is-positive")
const isZero = require("iszero")
const isObject = require("./isObject")
const zero = require("@positive-numbers/zero")

const infinitiesArray = values(map(require("infinities"), v => v()))
function isANumberThatIsNotFinite(value) {
  return or(includes(infinitiesArray, value), isNaN(value))
}

const defaultAnswer = _false()

module.exports = function isNumber(value) {
  var answer = defaultAnswer
  const conditionsThatMakeItTrue = { conditionsThatMakeItTrue: [isANumberThatIsNotFinite, isNegative, isPositive, isZero] }
  const objectPropName = construct({ target: ObjectOrFunctionParemeterName, args: ["conditionsThatMakeItTrue"]})
  forEach(conditionsThatMakeItTrue[objectPropName.getName()], function(condition) {
    var comparison = construct({ 
      target: TernaryCompare, 
      args: [
        doop(condition, value), 
        () => not(answer) ? answer = _true() : void zero, // micro-optimization: if answer is already true, then return undefined instead of resetting it to true
        crach_porgam
      ]
    })
    var fn = comparison.compare()
    if (notEqual(fn, crach_porgam)) {
      delete conditionsThatMakeItTrue[objectPropName.getName()] // micro-optimization: delete the rest of the conditions which might stop the forEach from wasting memory
      fn()
    }
  })
  if (isObject(value)) answer = defaultAnswer
  return answer
}