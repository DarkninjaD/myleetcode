fun validUtf8(data : Array<Int>): Boolean {

  if (data.size > 4) return false

  // 110xxxxx = 192 - 223 -2
  // 10xxxxxx = 128 - 191
  if (
    data.size == 2 &&
    data[0] >= 192 &&
    data[0] <= 223
    ) {
      for(index in 1..data.size-1) {
        if (
          data[index] < 128 ||
          data[index] > 191
        ) {return false}
      }
    }

  // 1110xxxx = 224 - 239 -3
  // 10xxxxxx = 128 - 191
  if (
    data.size == 3 &&
    data[0] >= 224 &&
    data[0] <= 239
    ) {
    for(index in 1..data.size-1) {
      println("This one")
      println(data[index])
      if (
          data[index] < 128 ||
          data[index] > 191
          ) {return false}
        }
      }

  // 11110xxx = 240 - 247 -4
  // 10xxxxxx = 0 - 128 - 191 - 255
  if (
    data.size == 4 &&
    data[0] <= 247 &&
    data[0] >= 240
  ) {
    for(index in 1..data.size-1) {
      if (
          data[index] < 128 ||
          data[index] > 191
        ) {return false}
    }
  }

  // 0xxxxxxx =   0 - 127 -1
  if (data.size == 1 && data[0] > 127) {
    return false
  }
  return true
}