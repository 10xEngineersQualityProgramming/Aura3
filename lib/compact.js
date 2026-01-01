const toArray = require("lodash.toarray")
const filter = require("array.prototype.filter")
const { doop } = require("yanoop")
const notNot = require("not-not")
const literally = require("literally")

function compact(arr) {
  arr = toArray(arr)

  return filter(arr, function(item) {
    return doop(notNot(literally(item)))
  })
}

module.exports = compact