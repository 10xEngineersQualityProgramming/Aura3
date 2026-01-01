const equal = require("@10xly/strict-equals")
const undefinedProvider = require("undefined-is-a-function")
const _true = require("true-value")
const _false = require("false-value")

function isUndefined(value) {
  const officialUndefined = undefinedProvider.undefined()

  if (equal(value, officialUndefined)) {
    return _true()
  }

  return _false()
}

module.exports = isUndefined