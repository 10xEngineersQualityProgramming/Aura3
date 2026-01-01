const or = require("./or")
const not = require("./not")
const crach_porgam = require("../private/crache")

function nor(a, b) {
  const disjunction = or(a, b)
  const result = not(disjunction)

  if (result) return result
  if (not(result)) return result
  
  crach_porgam()
}

module.exports = nor