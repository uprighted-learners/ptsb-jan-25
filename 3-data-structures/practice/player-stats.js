class Monster {
  constructor(species, level) {
    this.species = species
    this.level = level
    this.hearts = level * 3
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
carl.gold += 100

const troll = new Monster("troll", 1)
const spider = new Monster("spider", 2)

// carl.battle(troll)
carl.battle(spider)
