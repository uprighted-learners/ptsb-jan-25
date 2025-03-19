import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
const router = express.Router()
import fs from "fs"

const CANDY_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "../candy.json"
)

// get all
router.get("/", (req, res) => {
  const data = fs.readFileSync(CANDY_PATH)
  res.send(data)
})

router.get("/best-candy", (req, res) => {
  const data = fs.readFileSync(CANDY_PATH)
  const candy = JSON.parse(data)

  const result1 = candy.reduce((highest, current) => {
    return current.rating > highest.rating ? current : highest
  })
  res.send(result1)
})

// get one by id
router.get("/:candyId", (req, res) => {
  const data = fs.readFileSync(CANDY_PATH)
  const candy = JSON.parse(data)

  const thisCandy = candy.find((c) => c.id == req.params.candyId)
  res.send(thisCandy)
})

// update rating
router.put("/:candyId", (req, res) => {
  const data = fs.readFileSync(CANDY_PATH)
  const candy = JSON.parse(data)

  const { rating } = req.body
  const thisCandy = candy.find((c) => c.id == req.params.candyId)
  const index = candy.findIndex((c) => c.id == req.params.candyId)
  thisCandy.rating = rating
  candy[index] = thisCandy

  fs.writeFileSync(CANDY_PATH, JSON.stringify(candy))

  res.send(`updated item ${thisCandy.name}`)
})

// add a new candy
router.post("/", (req, res) => {
  const data = fs.readFileSync(CANDY_PATH)
  const candy = JSON.parse(data)

  const { id, name, rating } = req.body
  const newCandy = { name }
  if (rating) newCandy.rating = rating
  if (id) newCandy.id = id

  candy.push(newCandy)

  fs.writeFileSync(CANDY_PATH, JSON.stringify(candy))

  res.send(`Added ${name}`)
})

router.delete("/:candyId", (req, res) => {
  const data = fs.readFileSync(CANDY_PATH)
  const candy = JSON.parse(data)

  const index = candy.findIndex((c) => c.id == req.params.candyId)
  candy.splice(index, 1)

  fs.writeFileSync(CANDY_PATH, JSON.stringify(candy))

  res.send(`deleted id ${req.params.candyId}`)
})

export default router
