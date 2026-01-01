const extractTag = require("extract-stringtag")
const uncurried = require("uncurried-intrinsics")
const $toStr = uncurried("Object.prototype.toString")
const { OBJECT_STRING_TAG } = require("@extremejs/utils")
const equal = require("@10xly/strict-equals")

module.exports = function isArguments(value) {
  const tag = extractTag($toStr(value))
  return equal(tag, OBJECT_STRING_TAG.ARGUMENTS)
}