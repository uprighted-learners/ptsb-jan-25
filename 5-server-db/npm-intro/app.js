// const cowsay = require("cowsay") // CommonJS style import
import cowsay from "cowsay" // ES Module style import

cowsay.list((err, cows) => console.log(cows))

console.log(cowsay.say({ text: "I'm a cow!", f: "companion-cube" }))
