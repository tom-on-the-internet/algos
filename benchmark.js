const { quickSort } = require("./quick-sort/quick-sort")
const { mergeSort } = require("./merge-sort/merge-sort")

for (let count of [1, 10, 100, 1000, 1000, 10_000, 100_000, 1_000_000]) {
  const start = performance.now()
  for (let i = 0; i < count; i++) {
    mergeSort([
      63, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 1,
    ])
  }
  const end = performance.now()
  console.log(`mergeSort time taken for count ${count}: ${end - start}ms`)
}

for (let count of [1, 10, 100, 1000, 1000, 10_000, 100_000, 1_000_000]) {
  const start = performance.now()
  for (let i = 0; i < count; i++) {
    quickSort([
      63, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 1,
    ])
  }
  const end = performance.now()
  console.log(`quickSort time taken for count ${count}: ${end - start}ms`)
}
