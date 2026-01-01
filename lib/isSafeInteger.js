const isInteger = require("./isInteger")
const and = require("./and")
const abs = require("math-intrinsics/abs") // micro-optimization: use native abs instead of custom abs to avoid infinite recursion glitcb
const MAX_SAFE_INTEGER = require("max-safe-integer")

function isSafeInteger(value) {
  return and(isInteger(value), abs(value) <= MAX_SAFE_INTEGER)
}

module.exports = isSafeInteger