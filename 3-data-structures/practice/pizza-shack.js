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
  menu: {
    sizes: {
      small: 18,
      medium: 22,
      large: 25,
    },
    toppings: {
      mushrooms: 1,
      "red bell pepper": 1,
      pepperoni: 3,
      pineapple: 1.5,
      olives: 1,
      anchovies: 3,
      "cream cheese": 2,
    },
  },
  orders: [],
  till: 0,
  // todo: take an arbitrary number of args instead of an array
  order(size, toppings) {
    size = size.toLowerCase()
    if (!this.menu.sizes[size]) {
      return `${size} is not a size we offer`
    }

    let price = 0
    price += this.menu.sizes[size]

    for (topping of toppings) {
      if (!this.menu.toppings[topping.toLowerCase()]) {
        return `${topping} is not a topping we offer`
      }
      price += this.menu.toppings[topping.toLowerCase()]
    }

    this.orders.push({ size, toppings, status: "pending" })
    this.till += price

    return `Your ${size} pizza will cost $${price.toFixed(2)}`
  },

  cookPizza() {
    const index = this.orders.findIndex((order) => order.status == "pending")
    this.orders[index].status = "in the oven"
  },

  sellPizza() {
    if (this.orders[0]?.status === "in the oven") {
      const pizza = this.orders.shift()
      return `Your ${pizza.size} pizza is ready!`
    } else if (!this.orders[0]) {
      return "Would you like to order a pizza?"
    } else {
      return `Your pizza will be ready momentarily`
    }
  },
}

console.log(restaurant.order("small", ["Pineapple", "anchovies"]))
console.log(restaurant.order("large", ["Cream Cheese", "mushrooms"]))
console.log(restaurant.order("extra large", ["cream cheese", "mushrooms"]))
console.log(restaurant.order("medium", ["cream cheese", "SAUSAGE"]))

restaurant.cookPizza()
restaurant.cookPizza()
// console.log(restaurant.orders)
console.log(restaurant.sellPizza())
console.log(restaurant.sellPizza())
console.log(restaurant.sellPizza())

// console.log(restaurant)

// restaurant.socialMedia = {
//   instagram: "@gigispizzagram",
//   twitter: "@gigispizza",
//   tiktok: "@gigispizzaontiktok",
// }

// delete restaurant.staff.manager

// restaurant.staff.bartender = {
//   name: "Pamella",
//   "phone number": "456-789-0123",
// }

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
