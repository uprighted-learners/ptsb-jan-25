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

// restaurant.staff.chef = { name: "Pedro" }
// restaurant.staff.chef.lastName = "Abruzzi"
// restaurant.staff.chef["phone number"] = "20919199048"

// console.log(restaurant)

// // const advertisement = `Order Gigi's Famous Pizza at <a href="${restaurant.website}order">gigispizza.com</a>`
// const advertisement = `Oder Gigi's Famous Pizza from our chef ${
//   restaurant.staff.chef.name
// } ${restaurant.staff.chef.lastName}! ${restaurant.tags.at(
//   -1
// )} or ${restaurant.tags.at(-2)}`
// console.log(advertisement)

// // to add cocktails to the end of the tags list
// restaurant.tags.push("cocktails")
// // to add cocktails right before beer
// const beerIndex = restaurant.tags.indexOf("beer")
// restaurant.tags.splice(beerIndex, 0, "cocktails")

// console.log(restaurant.name.toUpperCase())
// console.log(restaurant.tags) // this is an array, you can access it like an array
// console.log(restaurant.tags[1])

// console.log(restaurant.staff)
// console.log(restaurant.staff.owner)
// console.log(restaurant.staff.owner.name.toUpperCase())

// // you can always look for properties that don't exist
// console.log(restaurant.staff.dishwasher) // undefined
// // but if you check for properties *on* properties that don't exist (are undefined) ...
// // console.log(restaurant.staff.dishwasher.name) //TypeError: Cannot read properties of undefined (reading 'name')
// // you can avoid that by using the AND operatator to check for existence first
// console.log(restaurant.staff.dishwasher && restaurant.staff.dishwasher.name)
// // or use this shorthand, which does the same thing
// console.log(restaurant.staff.dishwasher?.name)
