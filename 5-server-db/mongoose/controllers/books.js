import express from "express"
import Book from "../models/Book.js"
import { mongoose } from "../db.js"
const router = express.Router()

router.get("/", async (req, res) => {
  const books = await Book.find()
  res.send(books)
})

router.get("/:bookId", async (req, res) => {
  const book = await Book.findOne({
    _id: req.params.bookId,
  })
  res.send(book)
})

router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body)
    await newBook.save()
    res.send("success")
  } catch (err) {
    res.status(422).send(err.message)
  }
})

router.put("/:bookId", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.bookId)) {
    res.send("invalid book id")
  } else {
    const filter = { _id: req.params.bookId }
    const body = req.body
    const options = { upsert: true }
    // upsert means "update or insert"
    // it will create a document if it doesn't find one that matches the filter
    // it is "false" by default
    // so we only need to set it if we want upsert to be true

    const data = await Book.updateOne(filter, body, options)
    console.log(data)
    if (data.modifiedCount === 1) {
      res.send("modified book")
    } else if (data.upsertedCount === 1) {
      res.send("created new book")
    } else {
      res.send("something went wrong")
    }
  }
})

router.delete("/:bookId", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.bookId)) {
    res.send("invalid book id")
  } else {
    const data = await Book.deleteOne({ _id: req.params.bookId })
    if (data.deletedCount === 1) {
      res.send("success")
    } else {
      res.send("book not found")
    }
  }
})

export default router
