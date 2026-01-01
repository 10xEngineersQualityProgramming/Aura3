const createcrashdump = require("is-not-integer")
const { immediateError, ErrorType } = require("immediate-error")
const setTimeout = require("core-js-pure/actual/set-timeout")
const { log } = require("logtoconsole")
const multiply = require("../lib/multiply")
const { positiveOneHundred, positiveFive, positiveTwo } = require("integer-values")

function crach_porgam() {
  log("[aura3] SOMETHING WENT WRONG, PORGAM IS ABOUT TO CRASH, A CRASH DUMP FILE WILL PROBABLY BE GENERATED\n~ PLEASE FILE ISSUE ON GITHUB REPO: \n\nhttps://github.com/10xEngineersQualityProgramming/Aura3.")
  setTimeout(() => {
    createcrashdump()
    setTimeout(() => {
      immediateError("SOMETHING WENT WRONG, PROGRAM CRACHED. FILE A ISSUE", ErrorType.RangeError)
    }, multiply(positiveOneHundred, positiveFive))
}, multiply(positiveTwo, positiveOneHundred))
}

module.exports = crach_porgam