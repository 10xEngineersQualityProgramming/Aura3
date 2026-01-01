const not = require("./not")
const xor = require("./xor")

function xnor(a, b) {
  return not(xor(a, b))
}

module.exports = xnor