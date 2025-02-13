const restaurant = {
  name: "Gigi's Pizza Shack",
  address: "123 Main St, Portland OR 97200",
  tags: [
    "delicious",
    "pizza",
    "arcade",
    "family",
    "beer",
    "take-out",
    "dine-in",
  ],
  website: "http://www.gigispizza.com/",
  staff: {
    owner: {
      name: "Gigi",
      "phone number": "123-234-3456",
    },
    manager: {
      name: "Rose",
      "phone number": "234-345-4567",
    },
    chef: {
      name: "Musa",
      "phone number": "345-456-5678",
    },
  },
}

restaurant.socialMedia = {
  instagram: "@gigispizzagram",
  twitter: "@gigispizza",
  tiktok: "@gigispizzaontiktok",
}

delete restaurant.staff.manager

restaurant.staff.bartender = {
  name: "Pamella",
  "phone number": "456-789-0123",
}

restaurant.staff.chef = { name: "Pedro" }
restaurant.staff.chef.lastName = "Abruzzi"
restaurant.staff.chef["phone number"] = "20919199048"

console.log(restaurant)

// const advertisement = `Order Gigi's Famous Pizza at <a href="${restaurant.website}order">gigispizza.com</a>`
const advertisement = `Oder Gigi's Famous Pizza from our chef ${
  restaurant.staff.chef.name
} ${restaurant.staff.chef.lastName}! ${restaurant.tags.at(
  -1
)} or ${restaurant.tags.at(-2)}`
console.log(advertisement)

// restaurant.tags.push("cocktails")
// const beerIndex = restaurant.tags.indexOf("beer")
// restaurant.tags.splice(beerIndex, 0, "cocktails")

// // console.log(restaurant.name.toUpperCase())
// console.log(restaurant.tags)
// console.log(restaurant.tags[1])

// console.log(restaurant.staff)
// console.log(restaurant.staff.owner)
// console.log(restaurant.staff.owner.name.toUpperCase())

// console.log(restaurant.staff.dishwasher)
// console.log(restaurant.staff.dishwasher.name)

// console.log(restaurant.staff.dishwasher && restaurant.staff.dishwasher.name)
// console.log(restaurant.staff.dishwasher?.name)
