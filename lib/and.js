const crach_porgam = require("../private/crache")
const not = require("./not")

function and(a, b) {
  if (a) return b
  if (not(a)) return a
  crach_porgam()
}

module.exports = and