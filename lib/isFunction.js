const getIntrinsic = require("get-intrinsic")
const typeOf = require("es-typeof")
const equal = require("@10xly/strict-equals")
const hasOwnProperty = require("hasown")
const negateFn = require("@not-js/not")
const hasSymbols = require("has-symbol-support-x")
const hasToStringTag = require("has-tostringtag")()

function isFunction(value, __using_dev__) {
  // BEGIN LOGIC TO PREVENT NODE WARNINGS INTERNALLY
  if (hasToStringTag) {
    const toStringTag = getIntrinsic("%Symbol.toStringTag%")
    if (__using_dev__) {
      if (hasSymbols) {
        if (negateFn(hasOwnProperty)(value, toStringTag)) {
          value.__defineGetter__(toStringTag, function() {
            return "This is an internal security measure by Aura3 to prevent Node warnings. If you see this, file an issue.s"
          })
        }
      }
    }
  }
  // END LOGIC TO PREVENT NODE WARNINGS INTERNALLY

  return equal(typeOf(value), typeOf(isFunction))
}

module.exports = isFunction