/* 
    Convert the input string into a list of ints
    Slice off the last digit. That is the check digit.
    Reverse the digits.
    Double every other element in the reversed list (starting with the first number in the list).
    Subtract nine from numbers over nine.
    Sum all values.
    Take the second digit of that sum.
    If that matches the check digit, the whole card number is valid.
*/

const ccNumber = "4556737586899855"

const creditCardValidator = (inputNum) => {
  if (inputNum.length !== 16 || isNaN(Number(inputNum))) {
    return "Please enter a complete 16-digit credit card number"
  }

  const numArray = Array.from(inputNum)
  const checkDigit = numArray.pop()
  numArray.reverse()

  const doubledNums = numArray.map((el, index) => {
    if (!(index % 2)) {
      let num = el * 2
      if (num > 9) num -= 9
      return num
    }
    return Number(el)
  })

  const sum = doubledNums.reduce((a, b) => a + b)
  const secondDigit = sum.toString()[1]

  return secondDigit == checkDigit
}

console.log(creditCardValidator(ccNumber))
