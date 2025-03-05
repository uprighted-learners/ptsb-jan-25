const status = "off"

const statusLookup = {
  off: ["filling"],
  filling: ["agitating", "draining"],
  agitating: ["draining"],
  draining: ["spinning", "filling", "off"],
  spinning: ["filling", "off"],
}

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve)
  })
}

const proceed = () => {
  // call the lookup table to perform part 3 of state machine
}

const parseInput = (input) => {
  // show error if it's not a two word response
  const inputArr = input.split(" ")
  //   return {
  //     action: inputArr[0],
  //     item: inputArr[1],
  //   }
  return inputArr[0], inputArr[1]
}

const currentRoom = "foyer"

const read = (item) => {
  const items = rooms[currentRoom].items
  if (items.includes(item)) {
    if (item.actions.includes("read")) {
      console.log(item.action())
    }
  } else {
    console.log(`there is no ${item} in this room`)
  }
}

const play = async () => {
  console.log("there's a sign and a book in here")

  //   const q1 = await ask("Where do you want to go? ")
  const q1 = await ask("what do you want to do?")
  //   const action = parseInput(q1)
  const [action, item] = parseInput(q1)

  switch (action) {
    case "move":
      moveRooms(item)
    case "read":
      readItem(item)
  }

  switch (q1) {
    case "read sign":
      // perform read sign action
      break
    case "read book":
      break
    case "foyer":
      proceed(q1)
      console.log("you go to the foyer")
      break
    case "powder room":
      console.log("you go to the powder room")
      break
    default:
      console.log("Please choose one of the available rooms")
  }

  rl.close()
}

play()
