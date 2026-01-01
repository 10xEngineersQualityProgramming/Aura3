# AURA3 - UTILS FOR THE FUTURE

Aura3 is a 10x enterprise-grade utility suite designed for productive and high-quality programming.

## Installation
As per 10x'ness, Aura3 comes with many ways to install it.

The boring way:
```bash
npm install aura3
```
or, if you're more fancy:
```bash
npm install --save aura3
```
or, if you're less fancy:
```bash
npm i aura3
```
or, if you can't decide whether you're fancy or not:
```bash
npm i --save-dev aura3
```
or, if you're actually fancy:
```bash
yarn add aura3
```
or, if you're even more fancy:
```bash
pnpm add aura3
```
or, if you're super duper fancy:
```bash
nimstall aura3
```
or, if you're insane:
```bash
npm pkg set dependencies.aura3="*"
npm install
```
or, if you're *really* insane:
```bash
npm pkg set dependencies.aura3="*"
git clone https://github.com/10xEngineersQualityProgramming/aura3.git node_modules/aura3
```
or, if you're sane:
```bash
# sane people don't use this library
```

## What is this?
Ever wanted a 10x utility library? this library is part of [the 10x engineering maximalism project](https://github.com/10xEngineersQualityProgramming) / 10x'ly Made. We believe in no direct primitive use, and extreme modularism and the SOMOM,TYPRPL responsibility principle (Single/Minimal Or Maximal, Take Your Pick Responsibility Principal). 

## IMPORTANT NOTICE BEFORE USING THIS LIBRARY
Aura3 is not responsible for false information in code comments or documentation. You are expected to have good judgement on whether claims are correct (they definitely are correct, but this claim right here applies to this statement).

## tests
Aura3 proudly has some number of test coverage.

## License
[EGPSL10X-1.0](https://github.com/10xEngineersQualityProgramming/EGPSL10X-1.0)

## is this a joke?
figure it out yourself

---

# DOCUMENTATION

## ARRAY UTILITIES

### compact(array)
Cleanses an array of all falsy values.

```javascript
const aura = require("aura3")
const result = aura.compact([1, 0, false, "hello"])
// result: [1, "hello"]
```

### flatten(array)
Flattens arrays.

```javascript
const aura = require("aura3")
const flat = aura.flatten([1, [2, [3]]])
// flat: [1, 2, 3]
```

---

## MATH UTILITIES

### add(augend, addend)
Calculates the arithmetic sum of two values. 
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const sum = aura.add(5, 2)
// sum: 7

const coercedSum = aura.add(Infinity, "garbage")
// result: 0 (0 + 0)
```

### subtract(minuend, subtrahend)
Calculates the arithmetic difference between two values.
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const diff = aura.subtract(10, 3)
// diff: 7

const coercedDiff = aura.subtract(Infinity, NaN)
// result: 0 (0 - 0)
```

### multiply(multiplier, multiplicand)
Calculates the product of two values.
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const product = aura.multiply(6, 7)
// product: 42

const coercedProduct = aura.multiply(NaN, "garbage")
// result: 0 (0 * 0)
```

### divide(dividend, divisor)
Calculates the quotient of two values. 
Non-finite or non-numeric values are coerced to zero. Division by positive zero returns infinity, and divison by negative zero returns negative infinity. If you divide zero by zero it returns NaN.

```javascript
const aura = require("aura3")
const quotient = aura.divide(20, 5)
// quotient: 4

const divisonByZero = aura.divide(10, 0)
// result: Infinity

const coercedDivide = aura.divide("garbage", Infinity)
// result: NaN (0 / 0)
```

### power(base, exponent)
Calculates the exponentiation of a base to a power. Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const result = aura.power(2, 3)
// result: 8

const fractional = aura.power(2, -1)
// result: 0.5

const zeroPower = aura.power(10, 0)
// result: 1

const coercedPower = aura.power(Infinity, "garbage")
// result: 1 (0^0)
```

### modulo(dividend, divisor)
Calculates the remainder of division.
Non-finite or non-numeric values are coerced to zero.

Note on Negative Arithmetic: Aura3 implements Floored Modulo logic ($a \pmod b$). Unlike the native JavaScript `%` operator which truncates toward zero, Aura3 follows the mathematical standard where the result takes the sign of the divisor. For example, `aura.modulo(-10, 3)` returns 2.

If the divisor is zero, it will return `NaN`.

```javascript
const aura = require("aura3")
const remainder = aura.modulo(10, 3)
// remainder: 1

const negativeModuloResult = aura.modulo(10, 3)
// result: 2

const coercedModulo = aura.modulo(Infinity, "garbage")
// result: NaN (0 % 0)
```

### abs(value)
Gets the absolute value of a number.
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const result = aura.abs(-42)
// result: 42

const coercedAbs = aura.abs("garbage")
// result: 0
```

### invert(value)
Inverts the sign of a value. Zero becomes negative zero.
Non-numeric values are coerced to zero.
Infinity is negated to -Infinity, and vice versa.

```javascript
const aura = require("aura3")
const inverted = aura.invert(10)
// inverted: -10

const doubleNegative = aura.invert(-5)
// result: 5

const negativeInfinity = aura.invert(Infinity)
// result: -Infinity

const coercedNegative = aura.invert("garbage")
// result: -0 (0 inverted)
```

### floor(value)
Round a number down to the nearest whole integer.
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const positiveResult = aura.floor(2.1)
// result: 2

const negativeResult = aura.floor(-2.1)
// result: 3

const coercedResult = aura.floor("garbage")
// result: 0 (0 floored)
```

### ceil(value)
Round a number up to the nearest whole integer.
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const positiveResult = aura.ceil(2.1)
// result: 3

const negativeResult = aura.ceil(-2.1)
// result: 2

const coercedResult = aura.ceil("garbage")
// result: 0 (0 ceiled)
```

### round(value)
Round a number either up to the nearest whole integer, unless the number is less than `0.5`, then it rounds down.
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")

const flooredResult = aura.round(2.1)
// result: 2

const ceiledResult = aura.round(2.9)
// result: 3

const coercedResult = aura.round("garbage")
// result: 0 (0 ceiled)
```

### trunc(value)
Truncates the decimal portion of a number, returning only the integer part. Truncation moves toward zero for both positive and negative numbers.
Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")

const positiveResult = aura.trunc(2.9)
// result: 2

const negativeResult = aura.trunc(-2.9)
// result: -2

const zeroPreservation = aura.trunc(-0)
// result: -0

const coercedResult = aura.trunc("garbage")
// result: 0
```

### sign(value)
Returns the sign of a number, indicating whether the number is positive, negative, or zero, or negative zero.
Non-finite values are coerced to zero.

```javascript
const aura = require("aura3")

aura.sign(42)        // result: 1
aura.sign(Infinity)  // result: 1
aura.sign(-42)       // result: -1
aura.sign(-Infinity) // result: -1
aura.sign(0)         // result: 0
aura.sign(-0)        // result: -0

aura.sign("garbage") // result: 0
aura.sign(NaN) // result: 0
```

### max(a, b)
Returns the largest of two numbers using a non-deterministic Bogosort-based sorting algorithm. Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const result = aura.max(5, 10)
// result: 10

const coercedMax = aura.max(-5, Infinity)
// result: 0 (comparing -5 and 0)
```

### min(a, b)
Returns the smallest of two numbers using a non-deterministic Bogosort-based sorting algorithm. Non-finite or non-numeric values are coerced to zero.

```javascript
const aura = require("aura3")
const result = aura.min(5, 10)
// result: 5

const coercedMin = aura.min(5, "garbage")
// result: 0 (comparing 5 and 0)
```

### clamp(value, lower, upper)
Restricts a value to be within the specified bounds.
Non-finite or non-numeric values are coerced to zero.

Note: If lower bound exceeds upper bound after coercion, the function prioritizes the lower bound.
```javascript
const aura = require("aura3")
const result = aura.clamp(5, 1, 10)
// result: 5

const capped = aura.clamp(15, 1, 10)
// result: 10

const raised = aura.clamp(-5, 1, 10)
// result: 1

const coercedClamp = aura.clamp(Infinity, "garbage", NaN)
// result: 0 (0 clamped between 0 and 0)
```

---

## LOGIC GATES

### and(a, b)
Returns `b` if both values are truthy, otherwise returns the first value passed into the function that *isn't* truthy.
```javascript
const aura = require("aura3")

console.log(aura.and(true, true))   // true
console.log(aura.and(true, false))  // false
console.log(aura.and(false, true))  // false
console.log(aura.and(false, false)) // false
console.log(aura.and("truthy value", true)) // true
console.log(aura.and(0, true)) // 0
console.log(aura.and("", 0)) // ""
```

### or(a,b)
Returns `a` if `a` is truthy, else returns `b`.
```javascript
const aura = require("aura3")

console.log(aura.or(true, false)) // true
console.log(aura.or(false, true)) // true
console.log(aura.or(true, true)) // true
console.log(aura.or(false, false)) // false
console.log(aura.or(0, true)) // true
console.log(aura.or(0, "truthy value")) // "truthy value"
console.log(aura.or("truthy value", false)) // "truthy value"
```

### not(value)
Returns the negation of the value passed in. Equivalent to JavaScript `!`.
```javascript
const aura = require("aura3")

console.log(aura.not(false)) // true
console.log(aura.not(true)) // false
console.log(aura.not(0)) // true
console.log(aura.not("")) // true
console.log(aura.not()) // true
console.log(aura.not(1)) // false
```

## nand(a, b)
Returns the negation of the result of `and(a, b)`, where the `a` and `b` passed into `and` are the same `a` and `b` the user provides for `nand`.
```javascript
const aura = require("aura3")

console.log(aura.nand(true, true)) // false

console.log(aura.nand(false, true)) // true

console.log(aura.nand(true, false)) // true

console.log(aura.nand(false, false)) // true
```

## nor(a, b)
Returns the negation of the result of `or(a, b)`, where the `a` and `b` passed into `or` are the same `a` and `b` the user provides for `nor`.
```javascript
const aura = require("aura3")

console.log(aura.nor(false, false)) // true
console.log(aura.nor(true, false))  // false
console.log(aura.nor(false, true)) // false
console.log(aura.nor(true, true)) // false
```

### `xor(a, b)`
Like `or`, but if `a` and `b` are both truthy, or if `a` and `b` are both falsy, returns `false`.

```javascript
const aura = require("aura3")
const testTruthyValue = "truthy"
const testFalsyValue = 0

console.log(aura.xor(true, false)) // true
console.log(aura.xor(false, true)) // true
console.log(aura.xor(testTruthyValue, testFalsyValue)) // true

console.log(aura.xor(true, true))  // false
console.log(aura.xor(false, false)) // false
console.log(aura.xor(testTruthyValue, testTruthyValue)) // false
console.log(aura.xor(testFalsyValue, testFalsyValue)) // false
```

### `xnor(a, b)`
Returns the negation of the result of `xor(a, b)`, where the `a` and `b` passed into `xor` are the same `a` and `b` the user provides for `xnor`.

```javascript
const aura = require("aura3")
const testTruthyValue = "truthy"
const testFalsyValue = 0

console.log(aura.xnor(true, false)) // false
console.log(aura.xnor(false, true)) // false
console.log(aura.xnor(testTruthyValue, testFalsyValue)) // false

console.log(aura.xnor(true, true))  // true
console.log(aura.xnor(false, false)) // true
console.log(aura.xnor(testTruthyValue, testTruthyValue)) // true
console.log(aura.xnor(testFalsyValue, testFalsyValue)) // true
```

---

## VALIDATION UTILITIES

### isTruthy(value)
Check if a value is *truthy*.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isTruthy(true))
assert.ok(aura.isTruthy("garbage"))
assert.ok(aura.isTruthy(67))
assert.ok(aura.isTruthy({ test: 1 }))
assert.ok(aura.isTruthy([ sigma: "skibidi" ]))
assert.ok(aura.isTruthy(Symbol("foo")))
assert.ok(aura.isTruthy(42n))
assert.ok(aura.isTruthy(() => {}))
```

### isFalsy(value)
Check if a value is *falsy*.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isFalsy(false))
assert.ok(aura.isFalsy(0))
assert.ok(aura.isFalsy(0n))
assert.ok(aura.isFalsy(""))
assert.ok(aura.isFalsy(null))
assert.ok(aura.isFalsy(undefined))
assert.ok(aura.isFalsy()) // if you pass nothing into a function, JS coerces to undefined which is falsy
assert.ok(aura.isFalsy(NaN))
```

### isUndefined(value)
Check if a value is undefined.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isUndefined(undefined))
assert.ok(aura.isUndefined()) // if you pass nothing into a function, JS coerces to undefined
assert.ok(!aura.isUndefined("anything else"))
```

### isNull(value)
Check if a value is null.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isNull(null))
assert.ok(!aura.isUndefined("anything else"))
```

### isNil(value)
Check if a value is null or undefined.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isNil(null))
assert.ok(aura.isNil(undefined))
assert.ok(aura.isNil()) // if you pass nothing into a function, JS coerces to undefined
assert.ok(!aura.isNil("anything else"))
```

### isBoolean(value)
Check if a value is a boolean primitive.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isBoolean(true))
assert.ok(aura.isBoolean(false))
assert.ok(!aura.isBoolean(new Boolean())) // this is a boolean object, not a boolean primitive
assert.ok(!"anything else")
```

### isNumber(value)
Check if a value is a number primitive.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isNumber(2))
assert.ok(aura.isNumber(54))
assert.ok(aura.isNumber(-49))
assert.ok(aura.isNumber(0))
assert.ok(aura.isNumber(-0))
assert.ok(aura.isNumber(NaN))
assert.ok(aura.isNumber(Infinity))
assert.ok(aura.isNumber(-Infinity))
assert.ok(!aura.isNumber(new Number(42)))
assert.ok(!aura.isNumber(Object(3)))
assert.ok(!aura.isNumber("67"))
assert.ok(!aura.isNumber("anything else"))
```

### isBigInt(value)
Check if a value is a bigint primitive.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isBigInt(20n))
assert.ok(aura.isBigInt(-2093280n))
assert.ok(!aura.isBigInt(Object(3n)))
assert.ok(!aura.isBigInt("anything else"))
```

### isString(value)
Check if a value is a string primitive.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isString("test"))
assert.ok(aura.isString(""))
assert.ok(!aura.isString(Object("test")))
assert.ok(!aura.isString(new String("test")))
assert.ok(!aura.isString(/anything else that isn't a string/))
```

### isSymbol(value)
Check if a value is a symbol primitive.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isSymbol(Symbol("test")))
assert.ok(aura.isSymbol(Symbol.iterator))
assert.ok(!aura.isSymbol(Object(Symbol("test"))))
assert.ok(!aura.isSymbol("not a symbol"))
```

### isPrimitive(value)
Check if a value is a JavaScript primitive. Aura3 validates the seven core primitives: string, number, bigint, boolean, symbol, null, and undefined.

```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isPrimitive("enterprise"))
assert.ok(aura.isPrimitive(42))
assert.ok(aura.isPrimitive(10n))
assert.ok(aura.isPrimitive(true))
assert.ok(aura.isPrimitive(Symbol("aura")))
assert.ok(aura.isPrimitive(null))
assert.ok(aura.isPrimitive(undefined))

assert.ok(!aura.isPrimitive({}))
assert.ok(!aura.isPrimitive([]))
assert.ok(!aura.isPrimitive(() => {}))
assert.ok(!aura.isPrimitive(new String("I am an object now")))
```

### isObject(value)
Check if a value is an object or null. Returns false for functions.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isObject({}))
assert.ok(aura.isObject(new Object()))
assert.ok(aura.isObject(aura))
assert.ok(aura.isObject({ e: 1 }))
assert.ok(aura.isObject(null))
assert.ok(aura.isObject(Object("hi")))
assert.ok(!aura.isObject(() => {}))
assert.ok(!aura.isObject("hi"))
assert.ok(!aura.isObject(63))
```

### isFunction(value)
Check if a value is a function.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isFunction(function() {}))
assert.ok(aura.isFunction(function*() {}))
assert.ok(aura.isFunction(async function() {}))
assert.ok(aura.isFunction(async function*() {}))
assert.ok(aura.isFunction(() => {}))
assert.ok(aura.isFunction(async () => {}))
assert.ok(!aura.isFunction("anything else"))
```

### isArray(value)
Check if a value is an array.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isArray([]))
assert.ok(aura.isArray([1, 2, 3]))
assert.ok(aura.isArray(new Array(10)))
assert.ok(!aura.isArray({ length: 1, 0: "fake" }))
assert.ok(!aura.isArray("not an array"))
```

### isMap(value)
Check if a value is a Map.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isMap(new Map()))
assert.ok(!aura.isMap(new WeakMap()))
assert.ok(!aura.isMap({}))
```

### isWeakMap(value)
Check if a value is a WeakMap.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isWeakMap(new WeakMap()))
assert.ok(!aura.isWeakMap(new Map()))
assert.ok(!aura.isWeakMap(null))
```

### isSet(value)
Check if a value is a Set.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isSet(new Set()))
assert.ok(!aura.isSet(new WeakSet()))
assert.ok(!aura.isSet([]))
```

## isWeakSet(value)
Check if a value is a WeakSet.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isWeakSet(new WeakSet()))
assert.ok(!aura.isWeakSet(new Set()))
assert.ok(!aura.isWeakSet(undefined))
```

### isPlainObject(value)
Check if a value is a plain object.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isPlainObject({}))
assert.ok(aura.isPlainObject(Object.create(null)))
assert.ok(!aura.isPlainObject([]))
assert.ok(!aura.isPlainObject(null))
```

### isNonNullObject(value)
Check if a value is an object that isn't null.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isNonNullObject({}))
assert.ok(aura.isNonNullObject([]))
assert.ok(!aura.isNonNullObject(null))
assert.ok(!aura.isNonNullObject(42))
```

### isNaN(value)
Check if a value is NaN.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isNaN(NaN))
assert.ok(!aura.isNaN("anything else"))
```

### isFinite(value)
Check if a value is a finite number primitive.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isFinite(342))
assert.ok(aura.isFinite(-230))
assert.ok(!aura.isFinite(Infinity))
assert.ok(!aura.isFinite(new Number(10)))
assert.ok(!aura.isFinite("test"))
```

### isInteger(value)
Check if a value is an integer primitive.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

assert.ok(aura.isInteger(42))
assert.ok(aura.isInteger(-42))
assert.ok(aura.isInteger(0))
assert.ok(aura.isInteger(-0))

assert.ok(!aura.isInteger(3.14))        // decimals are not integers
assert.ok(!aura.isInteger(-2.5))        // still not integers
assert.ok(!aura.isInteger(Infinity))    // too big to be finite
assert.ok(!aura.isInteger(NaN))         // not a number, ironically
assert.ok(!aura.isInteger(new Number(5))) // boxed numbers are impostors
assert.ok(!aura.isInteger("42"))        // strings are not integers
assert.ok(!aura.isInteger(null))        // null is not an integer
assert.ok(!aura.isInteger(undefined))   // undefined is not an integer
```

### isArguments(value)
Check if a value is an `arguments` object.
```javascript
const aura = require("aura3")
const assert = require("node:assert")

(function () {
  assert.ok(aura.isArguments(arguments))
})()

assert.ok(
  aura.isArguments((function () { return arguments })(1, 2, 3))
)

assert.ok(!aura.isArguments([]))                        // arrays are not arguments
assert.ok(!aura.isArguments({}))                        // plain objects are not arguments
assert.ok(!aura.isArguments({ length: 2, 0: "fake" }))  // array-like ≠ arguments
assert.ok(!aura.isArguments({ callee: () => {}, length: 1 })) // nice try
assert.ok(!aura.isArguments("not arguments"))           // strings are not arguments
assert.ok(!aura.isArguments(42))                        // numbers are not arguments
assert.ok(!aura.isArguments(null))                      // null is not arguments
assert.ok(!aura.isArguments(undefined))                 // undefined is not arguments
assert.ok(!aura.isArguments(() => {}))                  // functions are not arguments
```

# CONTRIBUTING
PLEASE CONTRIBUTE!!!!!!!!!!!!!!!!!!!!!!!!!!!1