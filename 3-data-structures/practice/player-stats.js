class Monster {
  constructor(species, level) {
    this.species = species
    this.level = level
    this.hearts = level * 3
  }
}

class Troll extends Monster {
  constructor(name, level) {
    super("troll", level)
    this.name = name
    this.mood = "grumpy"
  }
}

class Player {
  constructor(name) {
    this.name = name
    this.level = 1
    this.hearts = 10
    this.inventory = {
      weapon: ["dagger"],
      armor: ["helmet"],
      potion: [],
    }
    this.gold = 10
    this.boosts = 5
    this.inventorySlots = 10
  }

  #countInventory() {
    let count = 0
    for (let inventoryKey in this.inventory) {
      count += this.inventory[inventoryKey].length
    }
    return count
  }

  largestInventoryCategory() {
    let itemCount = 0
    let winningKey

    for (let inventoryKey in this.inventory) {
      const len = this.inventory[inventoryKey].length
      if (len > itemCount) {
        itemCount = len
        winningKey = inventoryKey
      }
    }

    return winningKey
  }

  #display(message, data) {
    console.log("\n==============")
    console.log(message)
    console.log(data)
    console.log("==============\n")
  }

  #makeInventoryList() {
    let displayData = ""
    const keys = Object.keys(this.inventory)
    keys.forEach(
      (key) => (displayData += `\t${key}: ${this.inventory[key].join(", ")}\n`)
    )
    return displayData
  }

  displayPlayerStats() {
    let displayData = ""
    for (let key in this) {
      if (key === "inventory") {
        displayData += "Inventory: \n"
        displayData += this.#makeInventoryList()
      } else {
        displayData += `${key}: ${this[key]}\n`
      }
    }
    this.#display("Player stats:", displayData)
  }

  displayInventory() {
    let displayData = this.#makeInventoryList()
    displayData += `\n${this.name} has ${
      this.inventorySlots - this.#countInventory()
    } slots available`

    this.#display(`${this.name} is carrying: `, displayData)
  }

  pickUpItem(itemName, itemType) {
    if (this.#countInventory() < this.inventorySlots) {
      this.inventory[itemType].push(itemName)
    } else {
      console.log(
        `Inventory exceeded, you may carry ${this.inventorySlots} items`
      )
    }
  }

  dropItem(itemName, itemType) {
    const itemArray = this.inventory[itemType]
    const index = itemArray.indexOf(itemName)
    itemArray.splice(index, 1)

    // this.inventory[itemType].splice(
    //   this.inventory[itemType].indexOf(itemName),
    //   1
    // )
  }

  battle(monster) {
    while (this.hearts > 3 && monster.hearts > 0) {
      // I hit the monster
      monster.hearts -= Math.floor(Math.random() * (this.level + 1))
      // the monster hits me
      this.hearts -= Math.floor(Math.random() * (monster.level + 1))
    }
  }
}

const carl = new Player("Carl")

carl.pickUpItem("short sword", "weapon")
carl.pickUpItem("long sword", "weapon")
carl.pickUpItem("shield", "armor")
carl.pickUpItem("shield", "armor")
carl.pickUpItem("strength potion", "potion")
carl.pickUpItem("strength potion", "potion")
carl.pickUpItem("strength potion", "potion")
carl.pickUpItem("health elixir", "potion")
carl.pickUpItem("poison", "potion")

carl.dropItem("health elixir", "potion")
carl.pickUpItem("poison", "potion")
carl.gold += 100

const chad = new Troll("Chad", 1)
const spider = new Monster("spider", 2)

// carl.battle(chad)
// carl.battle(spider)

// console.log(chad instanceof Troll) // true
// console.log(chad instanceof Monster) // true
// console.log(chad instanceof Object) // true
// console.log(chad instanceof Player) // false

// TODO: ??
// console.log(chad.hasOwnProperty("name")) // true
// console.log(chad.hasOwnProperty("hearts")) // true

carl.displayInventory()
// carl.largestInventoryCategory()
// carl.displayPlayerStats()
