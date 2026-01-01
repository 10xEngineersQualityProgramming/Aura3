const trueValue = require("true-value")
const falseValue = require("false-value")
const isNull = require("./isNull")
const isFunction = require("./isFunction")
const strictEquals = require("@10xly/strict-equals")
const $Object = require("es-object-atoms")

function isObject(value) {
  if (isNull(value)) return trueValue() // mimic typeof behavior
  if (isFunction(value)) return falseValue()
  return strictEquals($Object(value), value)
}

module.exports = isObject