function quickSort(arr, first = 0, last = arr.length - 1) {
  if (first >= last) {
    return arr
  }

  let pivotIdx = last
  let l = first
  let temp

  while (l < pivotIdx) {
    if (arr[l] <= arr[pivotIdx]) {
      l++
      continue
    }

    temp = arr[l]
    arr[l] = arr[pivotIdx - 1]
    arr[pivotIdx - 1] = arr[pivotIdx]
    arr[pivotIdx] = temp
    pivotIdx--
  }

  quickSort(arr, first, pivotIdx - 1)
  quickSort(arr, pivotIdx + 1, last)

  return arr
}

module.exports = { quickSort }
