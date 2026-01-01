const hasNoSelfEquality = require("has-no-self-equality")
const isNaNBase = require("@is-(unknown)/is-nan")
const and = require("./and")

module.exports = function isNaN(value) {
  return and(isNaNBase(value), hasNoSelfEquality(value))
}