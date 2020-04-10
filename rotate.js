function rotate(str, num) {
      let newStr = ''
      let y = str.length - 1
      if (num <= 0 || num > str.length) {
        return str
      }
      for (let i = 0; i < str.length; i++) {
        if (i < (str.length - num)) {
          newStr += str[i]
        } else {
          newStr = str[y] + newStr
          y--
        }
      }
      return newStr
    }
    console.log(rotate('abcdef', 1))