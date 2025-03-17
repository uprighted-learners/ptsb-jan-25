import express from "express"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* 
    A CRUD app stores and manages information

    * Create (POST)
    * Read (GET)
    * Update (PUT)
    * Delete (DELETE)
*/

const products = ["shoes", "apples", "snowboards", "guitars"]

// read all
app.get("/all", (req, res) => {
  res.send(products)
})

// read one
app.get("/products/:index", (req, res) => {
  res.send(products[req.params.index])
})

// load page
app.get("/input", (req, res) => {
  res.send(`
        <form method="post" action="/add">
            <input type="text" name="product" placeholder="add product here">
        </form>
        `)
})

// create
app.post("/add", (req, res) => {
  products.push(req.body.product)
  console.log(products)
  res.send("success")
})

// update
// idempotent (you can do the same operation multiple times
// and it's the same as if you did it once)
app.put("/add-new", (req, res) => {
  const { product } = req.body
  if (!products.includes(product)) {
    products.push(product)
  }
  console.log(products)
})

app.delete("/remove/:index", (req, res) => {
  const deleted = products[req.params.index]
  if (deleted) {
    products.splice(req.params.index, 1)
    console.log(products)
    res.send(`deleted ${deleted}`)
  } else {
    res.send(`no item at index ${req.params.index}`)
  }
})

app.listen(4000, (req, res, next) => {
  console.log(`listening`)
})
