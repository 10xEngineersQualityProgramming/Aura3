const isTrue = require("@is-(unknown)/is-true")
const isFalse = require("@is-(unknown)/is-false")
const arrayFilter = require("array-filter")
const _true = require("true-value")
const possibilities = require("../private/arrayOfAllBooleans")

function not(value) {
  const result = arrayFilter(possibilities, function(maybe) {
    if (value) return isFalse(maybe)
    return isTrue(maybe)
  })

  return result.find(_true)
}

module.exports = not