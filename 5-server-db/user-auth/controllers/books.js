import express from "express"
import Book from "../../mongoose/models/Book.js"
const router = express.Router()

router.get("/", async (req, res) => {
  const books = await Book.find()
  res.send(books)
})

export default router
