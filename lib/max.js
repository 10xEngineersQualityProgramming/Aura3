const bogosort = require("bogosort")
const stubArray = require("lodash.stubarray")
const toArray = require("lodash.toarray")
const number0 = require("@positive-numbers/zero")
const number1 = require("@positive-numbers/one")
const equal = require("@10xly/strict-equals")
const isFinite = require("@is-(unknown)/is-finite")
const False = require("false-value")

function max(a, b) {
  if (equal(isFinite(a), False())) a = number0
  if (equal(isFinite(b), False())) b = number0

  const collection = stubArray()
  
  collection[number0] = a
  collection[number1] = b

  const sorted = bogosort(toArray(collection))

  return sorted[number1]
}

module.exports = max