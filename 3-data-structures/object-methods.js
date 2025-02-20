const states = {
  or: {
    name: "Oregon",
    counter: 0,
    surrender() {
      return "Oregon gives up!"
    },
  },
  vt: {
    name: "Vermont",
    counter: 0,
  },
  ny: {
    name: "New York",
    counter: 0,
  },
  me: {
    name: "Maine",
    counter: 0,
  },
  md: {
    name: "Maryland",
    counter: 0,
  },
  fl: {
    name: "Florida",
    counter: 0,
  },

  display(state) {
    if (this[state]) {
      return this[state].name
    }
    return "That state ID is not in our database"
  },

  addState(code, name) {
    // todo: check for existing keys
    this[code] = {
      name: name,
      counter: 0,
    }
  },

  battle: function (state1, state2) {
    if (this[state1].surrende) {
      console.log(this[state1].surrender())
      console.log(`${this[state2].name} wins`)
      this[state2].counter++
      return
    } else if (this[state2].surrender) {
      console.log(this[state2].surrender())
      console.log(`${this[state1].name} wins`)
      this[state1].counter += 1
      return
    }

    if (Math.random() > 0.5) {
      console.log(`${this[state1].name} wins`)
      this[state1].counter++
    } else {
      console.log(`${this[state2].name} wins`)
      this[state2].counter += 1
    }
  },

  war(state1, state2, battleCount) {
    while (battleCount > 0) {
      this.battle(state1, state2)
      battleCount -= 1
    }
    if (this[state1].counter > this[state2].counter) {
      console.log(`${this[state1].name} wins the war!`)
    } else {
      console.log(`${this[state2].name} wins the war!`)
    }
  },
}

// console.log(states.md)
// console.log(states.display("md"))
// console.log(states.display("ca"))

states.addState("ca", "California")
// states.battle("fl", "ca")

// console.log(states)

// states.war("ca", "or", 10)

console.log(states.or.name)
console.log(states.or.surrender())
