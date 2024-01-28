const { quickSort } = require("./quick-sort")
const test = require("node:test")
const assert = require("node:assert")

test("it sorts a simple array", () => {
  assert.deepStrictEqual(quickSort([9, 2, 10, 3, 5]), [2, 3, 5, 9, 10])
})

test("it sorts an array", () => {
  assert.deepStrictEqual(
    quickSort([4, 9, 2, 4, 6, 1, 0, 23, 8, 6]),
    [0, 1, 2, 4, 4, 6, 6, 8, 9, 23]
  )
})

test("it handles an empty array", () => {
  assert.deepStrictEqual(quickSort([]), [])
})

test("it handles negative numbers", () => {
  assert.deepStrictEqual(quickSort([4, -2, 0, -8, 1]), [-8, -2, 0, 1, 4])
})

test("it handles single numbers ", () => {
  assert.deepStrictEqual(quickSort([4]), [4])
})

test("it sorts a long array", () => {
  assert.deepStrictEqual(
    quickSort([
      63, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 1,
    ]),
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63,
    ]
  )
})
