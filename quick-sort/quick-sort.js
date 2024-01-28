function quickSort(arr, first = 0, last = arr.length - 1) {
  if (first >= last) {
    return arr
  }

  let r = first
  let l = r - 1
  let temp

  while (r < last) {
    if (arr[r] > arr[last]) {
      r++
      continue
    }
    l++

    temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    r++
  }

  l++
  temp = arr[l]
  arr[l] = arr[last]
  arr[last] = temp

  quickSort(arr, first, l - 1)
  quickSort(arr, l + 1, last)

  return arr
}

module.exports = { quickSort }
