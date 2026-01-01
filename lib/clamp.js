const min = require("./min")
const max = require("./max")
const equal = require("@10xly/strict-equals")
const isFinite = require("./isFinite")
const False = require("false-value")
const number0 = require("@positive-numbers/zero")

function clamp(value, lower, upper) {
  if (equal(isFinite(value), False())) value = number0
  if (equal(isFinite(lower), False())) lower = number0
  if (equal(isFinite(upper), False())) upper = number0

  const cappedValue = min(value, upper) // cap 🧢🧢🧢🧢🧢🧢
  
  return max(cappedValue, lower)
}

module.exports = clamp