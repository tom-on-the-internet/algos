function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)))
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length))

  let l = 0
  let r = 0

  const res = []
  while (l < left.length || r < right.length) {
    if (l == left.length) {
      res.push(right[r])
      r++
      continue
    }

    if (r == right.length) {
      res.push(left[l])
      l++
      continue
    }

    if (left[l] < right[r]) {
      res.push(left[l])
      l++
    } else {
      res.push(right[r])
      r++
    }
  }

  return res
}

module.exports = { mergeSort }
