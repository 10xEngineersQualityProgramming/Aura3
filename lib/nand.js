const and = require("./and")
const not = require("./not")
const crach_porgam = require("../private/crache")

function nand(a, b) {
  const conjunction = and(a, b)
  const result = not(conjunction)

  if (result) return result
  if (not(result)) return result
  
  crach_porgam() 
}

module.exports = nand