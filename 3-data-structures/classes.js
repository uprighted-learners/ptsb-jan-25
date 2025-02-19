/* 
    ? Classes
    template or blueprint for creating objects
*/

class Medal {
  constructor(rank, sport, year) {
    this.rank = rank
    this.sport = sport
    this.year = year
  }
}

class OlympicAthlete {
  constructor(fullName, sport, country) {
    const coolnessFactor = Math.floor(Math.random() * 100)

    this.name = fullName
    this.sport = sport
    this.country = country
    this.medals = []
    this.yearsCompeted = []
    this.coolnessFactor = coolnessFactor
  }

  compete(year, medal) {
    if (!this.yearsCompeted.includes(year)) {
      this.yearsCompeted.push(year)
    }

    if (medal) this.medals.push(new Medal(medal, this.sport, year))
  }
}

const simone = new OlympicAthlete("Simone Biles", "gymnastics", "USA")
const katie = new OlympicAthlete("Katie Ledecky", "swimming", "USA")
const faith = new OlympicAthlete("Faith Kipyegon", "running", "Kenya")

simone.compete(2024)
katie.compete(2024)

katie.compete(2020, "gold")
katie.compete(2020, "gold")
katie.compete(2020, "silver")
katie.compete(2020, "silver")
katie.compete(2020)

katie.compete(2016)

console.log(katie)
console.log(simone)
console.log(faith)

// const simone = {
//   fullName: "Simone Biles",
//   sport: "gymnastics",
//   country: "USA",
//   yearsCompeted: [],
//   medals: [],
// }

// const katie = {
//   fullName: "Katie Ledecky",
//   sport: "swimming",
//   country: "USA",
//   yearsCompeted: [],
//   medals: [],
// }
