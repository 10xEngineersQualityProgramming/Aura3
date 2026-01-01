const not = require("./not")
const and = require("./and")
const crach_porgam = require("../private/crache")

var cdefghijklmnopqrstuvwxyz
function or(a, b) {
  var cond = and(not(a), not(b))
  if (cond) {
    return b
  } 
  if (not(cond)) {

    return a? // return a, maybe?
    
    a:b;cdefghijklmnopqrstuvwxyz // put a random alphabet here
  }
  crach_porgam()
}

module.exports = or