const {
  enterpriseTest,
  printAuditSummary
} = require("enterprise-10x-testing-framework-js")

const aura = require("../index")

const zero = require("@positive-numbers/zero")
const one = require("@positive-numbers/one")
const False = require("false-value")
const True = require("true-value")
const isNegativeZero = require("is-negative-zero")
const undefined = require("undefined-is-a-function").undefined
const isnan = require("@is-(unknown)/is-nan")

enterpriseTest("aura3 Enterprise-Grade Unified Suite", (assert) => {
  // --- SECTION 1: ARRAY UTILITIES ---
  const compactInput = [
    one,
    -5,
    zero,
    False(),
    "hello",
    -10.5,
    undefined(),
    "world"
  ]
  const compactResult = aura.compact(compactInput)

  assert(
    compactResult.length === 5,
    "compact should remove falsy values but keep all other values"
  )

  const flattenInput = [one, [2, [3, 4]], 5]
  const flattenResult = aura.flatten(flattenInput)

  assert(flattenResult.length === 5, "flatten should resolve nested structures")

  // --- SECTION 2: ADDITION ---
  assert(aura.add(one, one) === 2, "add should sum positive integers")
  assert(aura.add(-5, -10) === -15, "add should sum negative integers")
  assert(aura.add(2, 0.5) === 2.5, "add should handle positive decimals")
  assert(aura.add(-2.5, 1.2) === -1.3, "add should handle negative decimals")
  assert(aura.add("67", 2) === 2, "add should coerce non-number values to 0")
  assert(
    aura.add(2, Infinity) === 2,
    "add should coerce non-finite values to 0"
  )
  assert(aura.add(2, NaN) === 2, "add should coerce NaN to zero\n")

  // --- SECTION 3: SUBTRACTION ---
  assert(
    aura.subtract(5, one) === 4,
    "subtract should reverse state for positive subtrahends"
  )
  assert(
    aura.subtract(10, -5) === 15,
    "subtracting negative should trigger stateful addition"
  )
  assert(
    aura.subtract(-10.5, -2.5) === -8,
    "subtracting negative from negative should work"
  )
  assert(
    aura.subtract(Infinity, 5) === -5,
    "subtract should coerce non-finite value to zero"
  )
  assert(
    aura.subtract(5, "67") === 5,
    "subtract should coerce non-number value to zero"
  )
  assert(aura.subtract(2, NaN) === 2, "subtract should coerce NaN to zero\n")

  // --- SECTION 4: MULTIPLICATION ---
  assert(aura.multiply(3, 2) === 6, "multiply should calculate 3 * 2")
  assert(
    aura.multiply(-4, -5) === 20,
    "multiply should resolve double negatives to positive"
  )
  assert(
    aura.multiply(-3, 2) === -6,
    "multiply should maintain sign for single negative"
  )
  assert(
    aura.multiply(2, 4.5) === 9,
    "multiply should support decimal multiplicands"
  )
  assert(
    aura.multiply("67", 3) === 0,
    "multiply should coerce non-number value to zero"
  )
  assert(
    aura.multiply(Infinity, 67) === 0,
    "multiply should coerce non-finite value to zero"
  )
  assert(aura.multiply(2, NaN) === 0, "multiply should coerce NaN to zero\n")

  // --- SECTION 5: DIVISION ---
  assert(aura.divide(10, 2) === 5, "divide should perform standard division")
  assert(
    aura.divide(-10, -2) === 5,
    "divide should return positive for two negatives"
  )
  assert(
    aura.divide(10, 0) === Infinity,
    "divide by zero should return infinity"
  )
  assert(
    aura.divide(10, -0) === -Infinity,
    "divide by negative zero should return negative infinity"
  )
  assert(isnan(aura.divide(0, 0)), "divide 0/0 should return NaN")
  assert(
    aura.divide(Infinity, 4) === 0,
    "divide should coerce non-finite value to zero"
  )
  assert(
    aura.divide("67", 67) === 0,
    "divide should coerce non-number value to zero"
  )
  assert(aura.divide(2, NaN) === Infinity, "divide should coerce NaN to zero\n")

  // --- SECTION 6: EXPONENTIATION ---
  assert(aura.power(2, 3) === 8, "power should calculate 2^3")
  assert(
    aura.power(-2, 3) === -8,
    "negative base with odd exponent should be negative"
  )
  assert(
    aura.power(-2, 2) === 4,
    "negative base with even exponent should be positive"
  )
  assert(aura.power(2, -1) === 0.5, "power should handle negative exponents")
  assert(
    aura.power(5, zero) === one,
    "any number to power of zero should be one"
  )
  assert(
    Math.abs(aura.power(2, 0.5) - 1.4142135623730951) < 0.00001,
    "power should approximate sqrt(2) for exponent 0.5"
  )
  assert(
    Math.abs(aura.power(8, aura.divide(one, 3)) - 2) < 0.00001,
    "power should calculate 8^(1/3) as 2"
  )
  assert(
    Math.abs(aura.power(10, -0.5) - 0.3162277) < 0.0001,
    "power should handle negative decimal exponents"
  )
  assert(
    aura.power(567, "67") === one,
    "power should coerce non-number value to zero"
  )
  assert(
    aura.power(Infinity, 3) === 0,
    "power should coerce non-finite value to zero"
  )
  assert(aura.power(2, NaN) === 1, "power should coerce NaN to zero\n")

  // --- SECTION 7: INVERTING & ABS ---
  assert(aura.invert(5) === -5, "invert should negate 5 to -5")
  assert(isNegativeZero(aura.invert(0)), "invert should negate 0 to -0")
  assert(
    isNegativeZero(aura.invert("67")),
    "invert should negate non-number value to negative zero"
  )
  assert(
    aura.invert(Infinity) === -Infinity,
    "invert should negate infinity to negative infinity"
  )
  assert(isNegativeZero(aura.invert(NaN)), "invert should coerce NaN to zero\n")

  assert(
    aura.abs(-42) === 42,
    "abs should orchestrate inversion for negative 42"
  )
  assert(aura.abs(10) === 10, "abs should return positive value as-is")
  assert(aura.abs("67") === 0, "abs should coerce non-number value to zero")
  assert(aura.abs(Infinity) === 0, "abs should coerce non-finite value to zero")
  assert(aura.abs(NaN) === 0, "abs should coerce NaN to zero\n")

  // --- SECTION 8: FLOOR ---
  assert(
    aura.floor(2.9) === 2,
    "floor should strip decimals from positive numbers"
  )
  assert(
    aura.floor(-2.1) === -3,
    "floor should move down the number line for negative numbers"
  )
  assert(aura.floor(5) === 5, "floor should return integers unchanged")
  assert(aura.floor("67") === 0, "floor should coerce non-number value to zero")
  assert(
    aura.floor(Infinity) === 0,
    "floor should coerce non-finite value to zero"
  )
  assert(aura.floor(NaN) === 0, "floor should coerce NaN to zero\n")

  // --- SECTION 9: CEIL & ROUND ---
  assert(aura.ceil(2.1) === 3, "ceil should move 2.1 up to 3")
  assert(aura.ceil(-2.9) === -2, "ceil should move -2.9 up to -2")
  assert(aura.ceil("67") === 0, "ceil should coerce non-number value to zero")
  assert(
    aura.ceil(Infinity) === 0,
    "ceil should coerce non-finite value to zero"
  )
  assert(aura.ceil(NaN) === 0, "ceil should coerce NaN to zero\n")

  assert(aura.round(2.4) === 2, "round should round 2.4 down to 2")
  assert(aura.round(2.5) === 3, "round should round 2.5 up to 3")
  assert(
    aura.round(-2.51) === -3,
    "round should handle negative midpoint biases"
  )
  assert(aura.round("67") === 0, "round should coerce non-number value to zero")
  assert(
    aura.round(Infinity) === 0,
    "round should coerce non-finite value to zero"
  )
  assert(aura.round(NaN) === 0, "round should coerce NaN to zero\n")

  // --- MODULO ---
  assert(aura.modulo(10, 3) === 1, "modulo should return 1 for 10 % 3")
  assert(
    aura.modulo(-10, 3) === 2,
    "modulo should handle negative dividends per floor-division logic"
  )
  assert(
    isnan(aura.modulo(10, zero)),
    "modulo by zero should return NaN"
  )
  assert(
    isnan(aura.modulo(32, "67")),
    "modulo should coerce non-number value to zero"
  )
  assert(
    isnan(aura.modulo(50, Infinity)),
    "modulo should coerce non-finite value to zero"
  )
  assert(
    isnan(aura.modulo(2, NaN)),
    "modulo should coerce NaN to zero\n"
  )

  // --- SIGN ---
  assert(aura.sign(5) === 1, "sign should return 1 for positive numbers")
  assert(aura.sign(-5) === -1, "sign should return -1 for negative numbers")
  assert(aura.sign(0) === 0, "sign should return 0 for positive zero")
  assert(
    isNegativeZero(aura.sign(-0)),
    "sign should return -0 for negative zero"
  )
  assert(
    aura.sign("garbage") === 0,
    "sign should coerce non-number value to zero"
  )
  assert(aura.sign(NaN) === 0, "sign should coerce NaN to zero")
  assert(
    aura.sign(Infinity) === 1,
    "sign should sign positive infinite value as positive"
  )
  assert(
    aura.sign(-Infinity) === -1,
    "sign should sign negative infinite value as negative\n"
  )

  // --- TRUNC ---
  assert(
    aura.trunc(2.9) === 2,
    "trunc should remove decimals from positive numbers"
  )
  assert(
    aura.trunc(-2.9) === -2,
    "trunc should remove decimals from negative numbers"
  )
  assert(aura.trunc(5) === 5, "trunc should return integers unchanged")
  assert(aura.trunc(0) === 0, "trunc should return positive zero as-is")
  assert(isNegativeZero(aura.trunc(-0)), "trunc should preserve negative zero")
  assert(aura.trunc("67") === 0, "trunc should coerce non-number value to zero")
  assert(
    aura.trunc(Infinity) === 0,
    "trunc should coerce non-finite value to zero"
  )
  assert(aura.trunc(NaN) === 0, "trunc should coerce NaN to zero\n")

  // --- MIN & MAX
  assert(
    aura.max(5, 10) === 10,
    "max should identify 10 as the greater value"
  )
  assert(aura.max(-5, -10) === -5, "max should handle negative comparison")
  assert(
    aura.max(5, "garbage") === 5,
    "max should coerce non-number to zero (comparing 5 and 0)"
  )
  assert(
    aura.max(Infinity, -5) === 0,
    "max should coerce non-finite to zero (comparing 0 and -5)"
  )
  assert(
    aura.max(NaN, NaN) === 0,
    "max should return zero for dual NaN inputs\n"
  )

  assert(
    aura.min(5, 10) === 5,
    "min should identify 5 as the lesser value"
  )
  assert(aura.min(-5, -10) === -10, "min should handle negative comparison")
  assert(
    aura.min(5, "garbage") === 0,
    "min should coerce non-number to zero (comparing 5 and 0)"
  )
  assert(
    aura.min(Infinity, 5) === 0,
    "min should coerce non-finite to zero (comparing 0 and 5)"
  )
  assert(
    aura.min(NaN, NaN) === 0,
    "min should return zero for dual NaN inputs\n"
  )

  // --- CLAMP ---
  assert(aura.clamp(5, 1, 10) === 5, "clamp should keep value within bounds")
  assert(
    aura.clamp(15, 1, 10) === 10,
    "clamp should cap value at upper bound"
  )
  assert(
    aura.clamp(-5, 1, 10) === 1,
    "clamp should raise value to lower bound"
  )
  assert(aura.clamp(5, 5, 5) === 5, "clamp should handle identical bounds")
  assert(
    aura.clamp(5, 10, 1) === 10,
    "clamp with reversed bounds should prioritize lower bound"
  )
  assert(
    aura.clamp(Infinity, -5, 5) === 0,
    "clamp should coerce non-finite value to zero"
  )
  assert(
    aura.clamp(5, "garbage", 10) === 5,
    "clamp should coerce non-number lower bound to zero"
  )
  assert(
    aura.clamp(5, 1, NaN) === 1,
    "clamp should coerce non-finite upper bound to zero"
  )
  assert(
    aura.clamp(NaN, NaN, NaN) === 0,
    "clamp should handle triple NaN coercion\n"
  )

  // --- LOGICAL AND ---
  assert(
    aura.and(1, True()) === True(),
    "and should return second operand (true) when first is trthy"
  )
  assert(
    aura.and("truthy", False()) === False(),
    "and should return second operand (false) when first is truthy"
  )
  assert(
    aura.and(False(), True()) === False(),
    "and should return first operand (false) when not(a) is truthy"
  )

  const falseInput = zero
  assert(
    aura.and(falseInput, True()) === falseInput,
    "and must strictly return the first false object\n"
  )

  // --- LOGICAL OR ---
  assert(
    aura.or(one, zero) === one,
    "or should return the first truthy value (1)"
  )
  assert(
    aura.or(zero, 2) === 2,
    "or should return the second value if the first is falsy"
  )
  assert(
    aura.or(False(), zero) === zero,
    "or should return the second falsy value if both are falsy"
  )
  assert(
    aura.or("hello", "world") === "hello",
    "or should return the first truthy string and ignore the second"
  )

  const valA = "aura"
  const valB = "standard"
  assert(
    aura.or(valA, valB) === valA,
    "or should successfully navigate the random alphabet branch to return 'a'"
  )

  // Verify it handles our custom True/False packages
  assert(
    aura.or(False(), True()) === True(),
    "or should return True() when first operand is False()\n"
  )

  // --- LOGICAL NOT ---
  assert(
    aura.not(True()) === False(),
    "not should negate true to false"
  )
  assert(
    aura.not(False()) === True(),
    "not should negate false to true"
  )
  assert(
    aura.not(0) === True(),
    "not should negate 0 to true"
  )
  assert(
    aura.not("truthy") === False(),
    "not should negate truthy string to false\n"
  )

  // --- LOGICAL NAND ---
  assert(
    aura.nand(True(), True()) === False(),
    "nand should return false for two truthy values"
  )
  assert(
    aura.nand(False(), True()) === True(),
    "nand should return true if at least one is falsy"
  )
  assert(
    aura.nand(zero, zero) === True(),
    "nand should return true for two falsy zeros"
  )
  assert(
    aura.nand("truthy", False()) === True(),
    "nand should handle truthy strings and return true\n"
  )

  // --- LOGICAL NOR ---
  assert(
    aura.nor(False(), False()) === True(),
    "nor should return true when both operands are falsy"
  )
  assert(
    aura.nor(one, zero) === False(),
    "nor should return false if the first operand is truthy"
  )
  assert(
    aura.nor(zero, one) === False(),
    "nor should return false if the second operand is truthy"
  )
  assert(
    aura.nor(True(), True()) === False(),
    "nor should return false for dual truthy inputs\n"
  )

  // --- LOGICAL XOR ---
  assert(
    aura.xor(True(), False()) === True(),
    "xor should return true if operands are different"
  )
  assert(
    aura.xor(False(), True()) === True(),
    "xor should return true if operands are different"
  )
  assert(
    aura.xor(True(), True()) === False(),
    "xor should return false if both are true"
  )
  assert(
    aura.xor(False(), False()) === False(),
    "xor should return false if both are false"
  )
  assert(
    aura.xor(one, zero) === True(),
    "xor should handle truthy/falsy coercion\n"
  )

  // --- LOGICAL XNOR ---
  assert(
    aura.xnor(True(), True()) === True(),
    "xnor should return true if both are true"
  )
  assert(
    aura.xnor(False(), False()) === True(),
    "xnor should return true if both are false"
  )
  assert(
    aura.xnor(True(), False()) === False(),
    "xnor should return false if operands differ"
  )
  assert(
    aura.xnor(one, one) === True(),
    "xnor should return true for coerced truthy values via the xor-not pipeline\n"
  )

  // --- isTruthy and isFalsy ---
  assert(
    aura.isTruthy(one) === True(),
    "isTruthy should identify 1 as truthy"
  )
  assert(
    aura.isTruthy(zero) === False(),
    "isTruthy should identify 0 as not truthy"
  )
  assert(
    aura.isFalsy("") === True(),
    "isFalsy should identify empty strings as falsy"
  )
  assert(
    aura.isFalsy(True()) === False(),
    "isFalsy should identify true as not falsy\n"
  )

  // --- UNDEFINED AUDITS ---
  assert(
    aura.isUndefined(undefined()) === True(),
    "isUndefined should identify undefined as undefined"
  )
  assert(
    aura.isUndefined() === True(),
    "isUndefined should identify no arguments as undefined"
  )
  assert(
    aura.isUndefined(null) === False(),
    "isUndefined should identify null as not undefined"
  )
  assert(
    aura.isUndefined(zero) === False(),
    "isUndefined should identify the zero constant as not undefined\n"
  )

  // --- NULL AUDITS ---
  assert(
    aura.isNull(null) === True(),
    "isNull should identify null as null"
  )
  assert(
    aura.isNull({}) === False(),
    "isNull should identify an empty object as not null"
  )
  assert(
    aura.isNull(undefined()) === False(),
    "isNull should identify undefined as not null"
  )
  assert(
    aura.isNull(zero) === False(),
    "isNull should identify the zero constant as not null\n"
  )

  // --- NIL AUDITS ---
  assert(
    aura.isNil(null) === True(),
    "isNil should identify null as nil"
  )
  assert(
    aura.isNil(undefined()) === True(),
    "isNil should identify undefined as nil"
  )
  assert(
    aura.isNil(zero) === False(),
    "isNil should identify the zero constant as not nil"
  )
  assert(
    aura.isNil("") === False(),
    "isNil should identify an empty string as not nil\n"
  )

  // --- BOOLEAN AUDITS ---
  assert(
    aura.isBoolean(True()) === True(),
    "isBoolean should identify true as true"
  )
  assert(
    aura.isBoolean(False()) === True(),
    "isBoolean should identify false as true"
  )
  assert(
    aura.isBoolean(new Object(True())) === False(),
    "isBoolean should identify boolean objects as false"
  )
  assert(
    aura.isBoolean("true") === False(),
    "isBoolean should identify strings as not booleans\n"
  )

  // --- NUMBER AUDITS ---
  assert(
    aura.isNumber(42) === True(),
    "isNumber should identify integer primitives as numbers"
  )
  assert(
    aura.isNumber(3.14) === True(),
    "isNumber should identify float primitives as numbers"
  )
  assert(
    aura.isNumber(zero) === True(),
    "isNumber should identify the zero constant as a number"
  )
  assert(
    aura.isNumber(NaN) === True(),
    "isNumber should identify NaN as a number primitive"
  )
  assert(
    aura.isNumber(Infinity) === True(),
    "isNumber should identify Infinity as a number primitive"
  )
  assert(
    aura.isNumber(-Infinity) === True(),
    "isNumber should identify negative Infinity as a number primitive"
  )
  assert(
    aura.isNumber(new Number(10)) === False(),
    "isNumber should reject Number objects (non-primitive)"
  )
  assert(
    aura.isNumber("10") === False(),
    "isNumber should reject numeric strings"
  )
  assert(
    aura.isNumber(null) === False(),
    "isNumber should reject null\n"
  )

  // --- BIGINT AUDITS ---
  assert(
    aura.isBigInt(10n) === True(),
    "isBigInt should identify bigint primitives"
  )
  assert(
    aura.isBigInt(BigInt(9007199254740991)) === True(),
    "isBigInt should identify values created via BigInt constructor"
  )
  assert(
    aura.isBigInt(Object(10n)) === False(),
    "isBigInt should reject BigInt objects (non-primitive)"
  )
  assert(
    aura.isBigInt(10) === False(),
    "isBigInt should reject standard number primitives"
  )
  assert(
    aura.isBigInt("10n") === False(),
    "isBigInt should reject string representations of bigints"
  )
  assert(
    aura.isBigInt(null) === False(),
    "isBigInt should return false for null\n"
  )

  // --- STRING AUDITS ---
  assert(
    aura.isString("enterprise") === True(),
    "isString should identify string primitives as true"
  )
  assert(
    aura.isString("") === True(),
    "isString should identify empty string primitives as true"
  )
  assert(
    aura.isString(String("10x")) === True(),
    "isString should identify strings cast via String() constructor"
  )
  assert(
    aura.isString(new String("legacy")) === False(),
    "isString should reject String objects to maintain primitive-strictness"
  )
  assert(
    aura.isString(42) === False(),
    "isString should reject number primitives"
  )
  assert(
    aura.isString(null) === False(),
    "isString should return false for null"
  )
  assert(
    aura.isString(undefined()) === False(),
    "isString should return false for undefined"
  )
  assert(
    aura.isString({ toString: () => "I am a string" }) === False(),
    "isString should reject objects with toString methods\n"
  )

  // --- SYMBOL AUDITS ---
  assert(
    aura.isSymbol(Symbol()) === True(),
    "isSymbol should identify anonymous symbol primitives"
  )
  assert(
    aura.isSymbol(Symbol("enterprise")) === True(),
    "isSymbol should identify named symbol primitives"
  )
  assert(
    aura.isSymbol(Symbol.for("global")) === True(),
    "isSymbol should identify global symbols from the registry"
  )
  assert(
    aura.isSymbol(Symbol.iterator) === True(),
    "isSymbol should identify well-known built-in symbols"
  )
  assert(
    aura.isSymbol(Object(Symbol())) === False(),
    "isSymbol should reject Symbol objects (non-primitive)"
  )
  assert(
    aura.isSymbol("symbol") === False(),
    "isSymbol should reject strings that happen to name the type"
  )
  assert(
    aura.isSymbol(null) === False(),
    "isSymbol should return false for null"
  )
  assert(
    aura.isSymbol(zero) === False(),
    "isSymbol should return false for the zero constant\n"
  )

  // --- UNIFIED PRIMITIVE PIPELINE ---
  assert(
    aura.isPrimitive("enterprise") === True(),
    "isPrimitive should validate string primitives"
  )
  assert(
    aura.isPrimitive(42) === True(),
    "isPrimitive should validate number primitives"
  )
  assert(
    aura.isPrimitive(10n) === True(),
    "isPrimitive should validate bigint primitives"
  )
  assert(
    aura.isPrimitive(True()) === True(),
    "isPrimitive should validate boolean primitives"
  )
  assert(
    aura.isPrimitive(Symbol("aura")) === True(),
    "isPrimitive should validate symbol primitives"
  )
  assert(
    aura.isPrimitive(null) === True(),
    "isPrimitive should validate null as a primitive"
  )
  assert(
    aura.isPrimitive(undefined()) === True(),
    "isPrimitive should validate undefined as a primitive"
  )
  assert(
    aura.isPrimitive({}) === False(),
    "isPrimitive should reject objects (structural type)"
  )
  assert(
    aura.isPrimitive([]) === False(),
    "isPrimitive should reject arrays (structural type)"
  )
  assert(
    aura.isPrimitive(() => { }) === False(),
    "isPrimitive should reject functions (executable type)\n"
  )

  // --- OBJECT AUDITS ---
  assert(
    aura.isObject({}) === True(),
    "isObject should identify plain objects as true"
  )
  assert(
    aura.isObject([]) === True(),
    "isObject should identify arrays as true"
  )
  assert(
    aura.isObject(null) === True(),
    "isObject should return true for null per enterprise requirements"
  )
  assert(
    aura.isObject(() => { }) === False(),
    "isObject should return false for functions"
  )
  assert(
    aura.isObject(42) === False(),
    "isObject should return false for number primitives"
  )
  assert(
    aura.isObject("string") === False(),
    "isObject should return false for string primitives\n"
  )

  // --- FUNCTION AUDITS ---
  assert(
    aura.isFunction(function () { }) === True(),
    "isFunction should identify standard functions"
  )
  assert(
    aura.isFunction(() => { }) === True(),
    "isFunction should identify arrow functions"
  )
  assert(
    aura.isFunction(Math.max) === True(),
    "isFunction should identify built-in functions"
  )
  assert(
    aura.isFunction({}) === False(),
    "isFunction should return false for objects"
  )
  assert(
    aura.isFunction(null) === False(),
    "isFunction should return false for null"
  )
  assert(
    aura.isFunction(undefined()) === False(),
    "isFunction should return false for undefined\n"
  )

  // --- ARRAY AUDITS ---
  assert(
    aura.isArray([]) === True(),
    "isArray should identify empty array literals as true"
  )
  assert(
    aura.isArray([one, 2, "three"]) === True(),
    "isArray should identify populated arrays"
  )
  assert(
    aura.isArray(new Array(10)) === True(),
    "isArray should identify arrays created via constructor"
  )
  assert(
    aura.isArray({ length: 1, 0: "fake" }) === False(),
    "isArray should reject array-like objects"
  )
  assert(
    aura.isArray("") === False(),
    "isArray should reject string primitives despite having a length property"
  )
  assert(
    aura.isArray(null) === False(),
    "isArray should return false for null"
  )
  assert(
    aura.isArray(undefined()) === False(),
    "isArray should return false for undefined\n"
  )

  // --- MAP AUDITS ---
  assert(
    aura.isMap(new Map()) === True(),
    "isMap should identify new Map instances"
  )
  assert(
    aura.isMap(new Map([["key", "value"]])) === True(),
    "isMap should identify populated Map instances"
  )
  assert(
    aura.isMap(new WeakMap()) === False(),
    "isMap should reject WeakMap instances"
  )
  assert(
    aura.isMap({}) === False(),
    "isMap should reject plain objects\n"
  )

  // --- WEAKMAP AUDITS ---
  assert(
    aura.isWeakMap(new WeakMap()) === True(),
    "isWeakMap should identify new WeakMap instances"
  )
  assert(
    aura.isWeakMap(new Map()) === False(),
    "isWeakMap should reject standard Map instances"
  )
  assert(
    aura.isWeakMap(null) === False(),
    "isWeakMap should return false for null\n"
  )

  // --- SET AUDITS ---
  assert(
    aura.isSet(new Set()) === True(),
    "isSet should identify new Set instances"
  )
  assert(
    aura.isSet(new Set([one, 2, 3])) === True(),
    "isSet should identify populated Set instances"
  )
  assert(
    aura.isSet(new WeakSet()) === False(),
    "isSet should reject WeakSet instances"
  )
  assert(
    aura.isSet([]) === False(),
    "isSet should reject arrays\n"
  )

  // --- WEAKSET AUDITS ---
  assert(
    aura.isWeakSet(new WeakSet()) === True(),
    "isWeakSet should identify new WeakSet instances"
  )
  assert(
    aura.isWeakSet(new Set()) === False(),
    "isWeakSet should reject standard Set instances"
  )
  assert(
    aura.isWeakSet(undefined()) === False(),
    "isWeakSet should return false for undefined\n"
  )

  // --- PLAIN OBJECT AUDITS ---
  assert(
    aura.isPlainObject({}) === True(),
    "isPlainObject should identify literals"
  )
  assert(
    aura.isPlainObject(Object.create(null)) === True(),
    "isPlainObject should identify null-prototype objects"
  )
  assert(
    aura.isPlainObject(new Date()) === False(),
    "isPlainObject should reject Date instances"
  )
  assert(
    aura.isPlainObject(null) === False(),
    "isPlainObject should reject null even though it is an object type\n"
  )

  // --- NON-NULL OBJECT AUDITS ---
  assert(
    aura.isNonNullObject({ e: one }) === True(),
    "isNonNullObject should identify truthy objects"
  )
  assert(
    aura.isNonNullObject([]) === True(),
    "isNonNullObject should identify arrays as non-null objects"
  )
  assert(
    aura.isNonNullObject(null) === False(),
    "isNonNullObject should reject null"
  )
  assert(
    aura.isNonNullObject(undefined()) === False(),
    "isNonNullObject should reject undefined\n"
  )

  // --- NAN AUDITS ---
  assert(
    aura.isNaN(NaN) === True(),
    "isNaN should identify NaN as NaN"
  )
  assert(
    aura.isNaN(0) === False(),
    "isNaN should reject zero"
  )
  assert(
    aura.isNaN(42) === False(),
    "isNaN should reject number primitives that are not NaN"
  )
  assert(
    aura.isNaN(Infinity) === False(),
    "isNaN should reject Infinity"
  )
  assert(
    aura.isNaN(-Infinity) === False(),
    "isNaN should reject negative Infinity"
  )
  assert(
    aura.isNaN("NaN") === False(),
    "isNaN should reject string representations of NaN"
  )
  assert(
    aura.isNaN(new Number(NaN)) === False(),
    "isNaN should reject Number objects (non-primitive)"
  )
  assert(
    aura.isNaN(undefined()) === False(),
    "isNaN should reject undefined"
  )
  assert(
    aura.isNaN(null) === False(),
    "isNaN should reject null"
  )
  assert(
    aura.isNaN({}) === False(),
    "isNaN should reject objects"
  )
  assert(
    aura.isNaN([]) === False(),
    "isNaN should reject arrays"
  )
  assert(
    aura.isNaN(isnan) === False(),
    "isNaN should reject functions"
  )

  // --- FINITE AUDITS ---
  assert(
    aura.isFinite(42) === True(),
    "isFinite should identify positive integers as finite"
  )
  assert(
    aura.isFinite(-42) === True(),
    "isFinite should identify negative integers as finite"
  )
  assert(
    aura.isFinite(3.14) === True(),
    "isFinite should identify decimal numbers as finite"
  )
  assert(
    aura.isFinite(zero) === True(),
    "isFinite should identify the zero constant as finite"
  )
  assert(
    aura.isFinite(one) === True(),
    "isFinite should identify the one constant as finite"
  )

  assert(
    aura.isFinite(Infinity) === False(),
    "isFinite should reject positive Infinity"
  )
  assert(
    aura.isFinite(-Infinity) === False(),
    "isFinite should reject negative Infinity"
  )
  assert(
    aura.isFinite(NaN) === False(),
    "isFinite should reject NaN\n"
  )

  assert(
    aura.isFinite("42") === False(),
    "isFinite should reject numeric strings"
  )
  assert(
    aura.isFinite("enterprise") === False(),
    "isFinite should reject non-numeric strings"
  )
  assert(
    aura.isFinite(null) === False(),
    "isFinite should reject null"
  )
  assert(
    aura.isFinite(undefined()) === False(),
    "isFinite should reject undefined"
  )
  assert(
    aura.isFinite({}) === False(),
    "isFinite should reject plain objects"
  )
  assert(
    aura.isFinite([]) === False(),
    "isFinite should reject arrays"
  )
  assert(
    aura.isFinite(new Number(10)) === False(),
    "isFinite should reject Number objects (non-primitive)"
  )
  assert(
    aura.isFinite(() => { }) === False(),
    "isFinite should reject functions\n"
  )

  // --- INTEGER AUDITS ---
  assert(
    aura.isInteger(42) === True(),
    "isInteger should identify positive integer primitives"
  )
  assert(
    aura.isInteger(-42) === True(),
    "isInteger should identify negative integer primitives"
  )
  assert(
    aura.isInteger(zero) === True(),
    "isInteger should identify the zero constant as an integer"
  )
  assert(
    aura.isInteger(one) === True(),
    "isInteger should identify the one constant as an integer"
  )

  assert(
    aura.isInteger(3.14) === False(),
    "isInteger should reject decimal numbers"
  )
  assert(
    aura.isInteger(-2.5) === False(),
    "isInteger should reject negative decimals"
  )
  assert(
    aura.isInteger(NaN) === False(),
    "isInteger should reject NaN"
  )
  assert(
    aura.isInteger(Infinity) === False(),
    "isInteger should reject positive Infinity"
  )
  assert(
    aura.isInteger(-Infinity) === False(),
    "isInteger should reject negative Infinity"
  )

  assert(
    aura.isInteger("42") === False(),
    "isInteger should reject numeric strings"
  )
  assert(
    aura.isInteger("enterprise") === False(),
    "isInteger should reject non-numeric strings"
  )
  assert(
    aura.isInteger(null) === False(),
    "isInteger should reject null"
  )
  assert(
    aura.isInteger(undefined()) === False(),
    "isInteger should reject undefined"
  )
  assert(
    aura.isInteger({}) === False(),
    "isInteger should reject plain objects"
  )
  assert(
    aura.isInteger([]) === False(),
    "isInteger should reject arrays"
  )
  assert(
    aura.isInteger(new Number(10)) === False(),
    "isInteger should reject Number objects (non-primitive)"
  )
  assert(
    aura.isInteger(() => { }) === False(),
    "isInteger should reject functions\n"
  )

  // --- SAFE INTEGER AUDITS ---
  assert(
    aura.isSafeInteger(42) === True(),
    "isSafeInteger should identify positive safe integers"
  )
  assert(
    aura.isSafeInteger(-42) === True(),
    "isSafeInteger should identify negative safe integers"
  )
  assert(
    aura.isSafeInteger(zero) === True(),
    "isSafeInteger should identify the zero constant as a safe integer"
  )
  assert(
    aura.isSafeInteger(one) === True(),
    "isSafeInteger should identify the one constant as a safe integer"
  )

  // boundary tests
  assert(
    aura.isSafeInteger(Number.MAX_SAFE_INTEGER) === True(),
    "isSafeInteger should accept MAX_SAFE_INTEGER"
  )
  assert(
    aura.isSafeInteger(Number.MIN_SAFE_INTEGER) === True(),
    "isSafeInteger should accept MIN_SAFE_INTEGER"
  )

  // out-of-range integers
  assert(
    aura.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) === False(),
    "isSafeInteger should reject integers above MAX_SAFE_INTEGER"
  )
  assert(
    aura.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) === False(),
    "isSafeInteger should reject integers below MIN_SAFE_INTEGER"
  )

  // decimals
  assert(
    aura.isSafeInteger(3.14) === False(),
    "isSafeInteger should reject decimal numbers"
  )
  assert(
    aura.isSafeInteger(-2.5) === False(),
    "isSafeInteger should reject negative decimals"
  )

  // non-finite
  assert(
    aura.isSafeInteger(Infinity) === False(),
    "isSafeInteger should reject Infinity"
  )
  assert(
    aura.isSafeInteger(-Infinity) === False(),
    "isSafeInteger should reject negative Infinity"
  )
  assert(
    aura.isSafeInteger(NaN) === False(),
    "isSafeInteger should reject NaN"
  )

  // non-numbers
  assert(
    aura.isSafeInteger("42") === False(),
    "isSafeInteger should reject numeric strings"
  )
  assert(
    aura.isSafeInteger("enterprise") === False(),
    "isSafeInteger should reject non-numeric strings"
  )
  assert(
    aura.isSafeInteger(null) === False(),
    "isSafeInteger should reject null"
  )
  assert(
    aura.isSafeInteger(undefined()) === False(),
    "isSafeInteger should reject undefined"
  )
  assert(
    aura.isSafeInteger({}) === False(),
    "isSafeInteger should reject plain objects"
  )
  assert(
    aura.isSafeInteger([]) === False(),
    "isSafeInteger should reject arrays"
  )
  assert(
    aura.isSafeInteger(new Number(10)) === False(),
    "isSafeInteger should reject Number objects (non-primitive)"
  )
  assert(
    aura.isSafeInteger(() => { }) === False(),
    "isSafeInteger should reject functions\n"
  )

    // --- ARGUMENTS AUDITS ---
    ;(function () {
      assert(
        aura.isArguments(arguments) === True(),
        "isArguments should identify real arguments objects"
      )
    })()

  assert(
    aura.isArguments((function () { return arguments })(1, 2, 3)) === True(),
    "isArguments should identify arguments returned from functions"
  )

  assert(
    aura.isArguments([]) === False(),
    "isArguments should reject arrays"
  )

  assert(
    aura.isArguments({}) === False(),
    "isArguments should reject plain objects"
  )

  assert(
    aura.isArguments({ length: 2, 0: "fake", 1: "args" }) === False(),
    "isArguments should reject array-like objects"
  )

  assert(
    aura.isArguments({ callee: function () { }, length: 1 }) === False(),
    "isArguments should reject objects mimicking arguments"
  )

  assert(
    aura.isArguments("not arguments") === False(),
    "isArguments should reject strings"
  )

  assert(
    aura.isArguments(42) === False(),
    "isArguments should reject number primitives"
  )

  assert(
    aura.isArguments(null) === False(),
    "isArguments should reject null"
  )

  assert(
    aura.isArguments(undefined()) === False(),
    "isArguments should reject undefined"
  )

  assert(
    aura.isArguments(() => { }) === False(),
    "isArguments should reject functions"
  )

})

printAuditSummary()
