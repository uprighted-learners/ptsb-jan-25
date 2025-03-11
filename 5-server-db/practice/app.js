import chalk from "chalk"

// console.log(chalk.yellow("hello"))
// console.log(chalk.rgb(205, 49, 195).bold("Magenta?"))
// console.log(chalk.hex("#FFA500")("Orange!"))
// console.log(chalk.white.bgRed.bold(" n "))

console.log(chalk.bgBlack.yellow.bold.underline(" Alan "))
console.log(chalk.blue.bold.overline.underline.italic.inverse(" Kaleb "))
console.log(chalk.bgBlack.red.bold.underline(" Josh "))
console.log(chalk.blue.bgWhite.strikethrough(" Rob "))
console.log(chalk.magentaBright.bold(" Rosie "))
console.log(chalk.red.bgGreen.bold(" Pamella "))
console.log(chalk.white.bgRed.bold(" Sean "))
console.log(chalk.green.bgRed.bold(" Pamella "))
console.log(chalk.bgGreen.yellow.bold.underline(" Amos "))
console.log(chalk.bold.bgRed.strikethrough(" Nick "))

function getRGBNumber() {
  return Math.floor(Math.random() * 256)
}

setInterval(() => {
  console.clear()
  let output = ""
  for (let letter of "PTSB Jan 2025") {
    output += chalk.rgb(getRGBNumber(), getRGBNumber(), getRGBNumber())(letter)
  }
  console.log(output)
}, 100)
