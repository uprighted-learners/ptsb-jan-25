const getSounds = (species) => {
  // for a given species, return an array of all the sounds
  const catSounds = ["meow", "mew", "mrrp", "purrrr"]
  const dogSounds = ["bark", "ruff", "woof", "howwwwl"]
  const hedgehogSounds = ["huff", "meep", "snuffle"]
  const rabbitSounds = ["crunch", "snuffle", "chirp"]

  species = species.toLowerCase()

  if (species === "cat") {
    return catSounds
  } else if (species === "dog") {
    return dogSounds
  } else if (species === "hedgehog") {
    return hedgehogSounds
  } else if (species === "rabbit") {
    return rabbitSounds
  }
}

const animalGreeting = (animalName, species) => {
  if (typeof species !== "string") {
    return `idk what ${species} is, but it's not an animal`
  }

  const sounds = getSounds(species)
  if (!sounds) {
    return `If ${animalName} the ${species} made a sound, I didn't hear it`
  }

  const indx = Math.floor(Math.random() * sounds.length)
  const sound = sounds[indx]

  return `${animalName} the ${species} says ${sound}`
}

const animalChorus = (species, count) => {
  if (typeof species !== "string") {
    return `no animals here, just this pesky ${species}`
  }

  // given fractions of animals, assume they mean babies and round up
  count = Math.ceil(count)
  if (isNaN(count)) {
    return "try again with a number of animals please"
  }

  sounds = getSounds(species)

  if (count <= 0) {
    return "where did those noisy animals go?"
  } else if (count > 25) {
    return "they're swarming, run!!"
  }

  let chorus = ""
  while (count > 0) {
    count--
    const sound = sounds[Math.floor(Math.random() * sounds.length)]
    chorus += sound + " "
  }
  return chorus
}

// console.log(animalGreeting("Bob", 42))
// console.log(animalGreeting("Chuck", "goat"))
console.log(animalChorus("Cat", "10.15"))
console.log(animalChorus("Cat", "ten"))
