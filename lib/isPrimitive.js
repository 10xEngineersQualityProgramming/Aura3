const isNull = require("./isNull")
const isUndefined = require("./isUndefined")
const isBoolean = require("./isBoolean")
const isNumber = require("./isNumber")
const isBigInt = require("./isBigInt")
const isString = require("./isString")
const isSymbol = require("./isSymbol")
const or = require("./or")
const isArray = require("./isArray")
const _false = require("false-value")

function isPrimitive(value) {
  if (isArray(value)) return _false() // micro-optimization: IMMEDIATELY REJECT ARRAYS
  return or(isNull(value), or(isUndefined(value), or(isBoolean(value), or(isNumber(value), or(isBigInt(value), or(isString(value), isSymbol(value)))))))
}

module.exports = isPrimitive