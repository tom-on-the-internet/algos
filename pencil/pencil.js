function colorPencil(arr) {
  let colorTime = 0
  let switchTime = 0

  let prev = null
  for (const color of arr) {
    if (prev && prev !== color) {
      switchTime++
    }
    colorTime += 2
    prev = color
  }

  return colorTime + switchTime
}

module.exports = { colorPencil }
