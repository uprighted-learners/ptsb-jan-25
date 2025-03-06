const nameInput = document.getElementById("name-input")
const contents = document.getElementById("contents")
const speciesHeader = document.getElementById("species-header")
const spriteWrapper = document.getElementById("sprite-wrapper")
const typeWrapper = document.getElementById("type-wrapper")
const statsWrapper = document.getElementById("stats")

const clearContents = () => {
  speciesHeader.innerHTML = ""
  typeWrapper.innerHTML = ""
  spriteWrapper.innerHTML = ""
  statsWrapper.innerHTML = ""
}

const addStat = (key, val) => {
  const keySpan = document.createElement("span")
  const valSpan = document.createElement("span")

  keySpan.classList.add("right-align")
  valSpan.classList.add("left-align")

  keySpan.innerText = key
  valSpan.innerText = val

  statsWrapper.append(keySpan, valSpan)
}

const createContents = (data) => {
  // TODO: capitalize first letter
  speciesHeader.innerText = data.species.name

  // add image
  const image = document.createElement("img")
  image.src = data.sprites.front_default
  spriteWrapper.appendChild(image)

  // add height and weight
  addStat("height", data.height)
  addStat("weight", data.weight)

  // add stats
  data.stats.forEach((stat) => {
    addStat(stat.stat.name, stat.base_stat)
  })

  // add types
  const typeArray = []
  data.types.forEach((type) => {
    typeArray.push(type.type.name)
  })
  typeWrapper.innerText = typeArray.join(", ")
}

const search = async (pokemonName) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    if (res.status === 404) {
      throw new Error(`${pokemonName} is not a pokemon`)
    }

    const data = await res.json()
    createContents(data)
  } catch (err) {
    // TODO: surface error to user
    console.log(err)
  }
}

nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    clearContents()
    search(e.target.value)
  }
})
