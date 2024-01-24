const { colorPencil } = require("./pencil")
const test = require("node:test")
const assert = require("node:assert")

test("one", () => {
  assert.strictEqual(colorPencil(["Red", "Blue", "Red", "Blue", "Red"]), 14)
})

test("two", () => {
  assert.strictEqual(colorPencil(["Blue"]), 2)
})

test("three", () => {
  assert.strictEqual(colorPencil(["Red", "Yellow", "Green", "Blue"]), 11)
})

test("four", () => {
  assert.strictEqual(
    colorPencil(["Blue", "Blue", "Blue", "Red", "Red", "Red"]),
    13
  )
})
