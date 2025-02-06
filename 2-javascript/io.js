/*
    ? IO - Input Output
    * Process
        * an event that runs in the foreground or background on a computer
    * Node.js allows us to access its process via a process object
    * this allows us to handle user input and internal output
        * using process.stdin and process.stdout
*/

const process = require("process")

process.stdout.write("hello world \n")
process.stdout.write("backslash n makes a new line \n")
process.stdout.write("\t backslash t makes a tab \n")

/*
    ? EVENT LISTENERS
    * .once() is an example of an event listener
        * it listens for a data event
        * it takes an event name
        * and a callback function
        * the callback is triggered when the event occurs
*/

const inputHandler = (data) => {
  console.log(`you said: ${data}`)
  //   process.exit()
}

process.stdout.write("What do you have to say?: ")
process.stdin.once("data", inputHandler)

// ? .on() method is a listener
// it allows to listen to continuous data stream

process.stdin.on("data", (input) => {
  const text = input.toString().trim()

  if (text == "quit") {
    console.log("Goodbye")
    process.exit()
  }

  console.log(`you said: ${text}`)
})

/* 
    ? Readline
    Readline provides an interface we can use to interact with the process
    in a more coherent way
*/

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// rl.question("What is your name? ", (data) => {
//   rl.setPrompt(`Nice to meet you, ${data}`)
//   rl.prompt()
//   rl.question("Where are you from? ", (data2) => {
//     rl.setPrompt(`I hear ${data2} is nice \n`)
//     rl.prompt()
//     rl.close()
//   })
// })

// just use this function exactly as written
async function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve)
  })
}

async function start() {
  const question1 = await ask("What is your name? ")
  console.log(`Nice to meet you, ${question1}`)

  const question2 = await ask("Where are you from? ")
  if (question2 == "Idaho") {
    console.log("I'm sorry to hear that")
  } else {
    console.log(`I hear ${question2} is nice \n`)
  }

  rl.close()
}

start()
