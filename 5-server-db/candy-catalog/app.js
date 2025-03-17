import express from "express"
const app = express()

app.use(express.json())

const candy = [
  {
    id: 1,
    name: "skittles",
    rating: 5,
  },
  {
    id: 2,
    name: "Idaho Spud",
    rating: 1,
  },
  {
    id: 3,
    name: "Sour Patch Kids",
    rating: 8,
  },
]

// get all
app.get("/", (req, res) => {
  res.send(candy)
})

app.get("/best-candy", (req, res) => {
  let max = 0
  let result
  for (let c of candy) {
    if (c.rating > max) {
      max = c.rating
      result = c
    }
  }
  //   res.send(result)
  //   let val
  //   if (condition) {
  //     val = a
  //   } else {
  //     val = b
  //   }

  //   // ternary operator
  //   val = condition ? a : b

  const result2 = candy.reduce((highest, current) => {
    return current.rating > highest.rating ? current : highest
  })
  res.send(result2)
})

// get one by id
app.get("/:candyId", (req, res) => {
  const thisCandy = candy.find((c) => c.id == req.params.candyId)
  res.send(thisCandy)
})

// update rating
app.put("/:candyId", (req, res) => {
  const { rating } = req.body
  const thisCandy = candy.find((c) => c.id == req.params.candyId)
  const index = candy.findIndex((c) => c.id == req.params.candyId)
  thisCandy.rating = rating
  candy[index] = thisCandy
  res.send(`updated item ${thisCandy.name}`)
  console.log(candy)
})

// add a new candy
app.post("/", (req, res) => {
  const { id, name, rating } = req.body
  const newCandy = { name }
  if (rating) newCandy.rating = rating
  if (id) newCandy.id = id

  candy.push(newCandy)
  res.send(`Added ${name}`)
  console.log(candy)
})

app.delete("/:candyId", (req, res) => {
  const index = candy.findIndex((c) => c.id == req.params.candyId)
  candy.splice(index, 1)
  res.send(`deleted id ${req.params.candyId}`)
  console.log(candy)
})

app.listen(4000, () => {
  console.log(`listening at 4000`)
})
