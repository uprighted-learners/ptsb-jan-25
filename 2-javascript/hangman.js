const { log } = require("console")
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

async function play(input) {
  const word = Array.from(input.toUpperCase())
  const guessedWord = word.map((_) => "_")
  const missedLetters = []

  while (guessedWord.includes("_") && missedLetters.length <= 7) {
    console.log()

    const rawLetter = await ask("Guess a letter: ")
    const letter = rawLetter.toUpperCase()

    if (!(/[A-Z]/.test(letter) && letter.length === 1)) {
      console.log("Please enter a single letter character")
      continue
    }

    if (missedLetters.includes(letter) || guessedWord.includes(letter)) {
      console.log(`You already guessed ${letter}`)
      continue
    }

    if (word.includes(letter)) {
      word.forEach((l, i) => {
        if (l === letter) guessedWord[i] = letter
      })
    } else missedLetters.push(letter)

    console.log("=====================================")
    console.log(`Letters guessed wrong: ${missedLetters.join(", ")}`)
    console.log(guessedWord.join(" "))
    console.log()
  }

  if (missedLetters.length >= 7) {
    console.error(`You lost! The word is "${input}"`)
  }

  if (!guessedWord.includes("_")) {
    console.warn("You won!")
  }

  rl.close()
}

const wordChoices = [
  "hypochondriac",
  "legerdemain",
  "egregious",
  "antidisestablishmentarianism",
  "psyche",
  "whizz",
  "sphinx",
  "zephyr",
]

play(wordChoices[Math.floor(Math.random() * wordChoices.length)])
// play("a")

// until the word is complete (or the player runs out of turns)
// turn order:
//      ask for a letter
//      sort letter into...
//          list of missed letters
//          word
//              replace all correct instances of _ with letter
//      display status
// once word is complete, show success message
// if the player runs out of turns, show failure message (and show the word to be nice)
