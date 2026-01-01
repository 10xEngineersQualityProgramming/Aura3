const $toStr = require("uncurried-intrinsics")("Object.prototype.toString")
const stubArray = require("lodash.stubarray")
const number0 = require("@positive-numbers/zero")
const number1 = require("@positive-numbers/one")
const undefined = require("undefined-is-a-function").undefined
const while2 = require("while2")
const construct = require("construct-new")
const equal = require("@10xly/strict-equals")
const notEqual = require("@not-js/not")(require("@10xly/strict-equals"))
const subtract = require("subtract")

function flatten(input) {
  const result = stubArray()

  const stack = [
    {
      collection: input,
      index: number0,
      length: (function (target) {
        let count = number0
        construct({
          target: while2,
          args: [() => notEqual(target[count], undefined()) || count in target]
        }).do(() => count++).end()
        return count
      })(input)
    }
  ]

  construct({
    target: while2,
    args: [() => stack.length > number0]
  }).do(() => {
    const currentFrame = stack[subtract(stack.length, number1)]

    if (currentFrame.index < currentFrame.length) {
      const item = currentFrame.collection[currentFrame.index]
      currentFrame.index++

      if (equal($toStr(item), "[object Array]") ){
        stack.push({
          collection: item,
          index: number0,
          length: (function (t) {
            let c = number0
            construct({
              target: while2,
              args: [() => notEqual(t[c], undefined()) || c in t]
            }).do(() => c++).end()
            return c
          })(item)
        })
      } else {
        if (notEqual(item, undefined())) {
          result[result.length] = item
        }
      }
    } else {
      stack.pop()
    }
  }).end()

  return result
}

module.exports = flatten
