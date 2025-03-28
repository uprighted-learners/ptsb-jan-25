import express from "express"
const router = express.Router()

// connect to the database server

import { MongoClient, ObjectId } from "mongodb"
const client = new MongoClient("mongodb://localhost:27017/")
client.connect()

const getCollection = () => {
  // get a database from the server
  const db = client.db("BooksAPI")
  // get a collection from the database
  const collection = db.collection("books")
  return collection
}

router.get("/", async (req, res) => {
  // .find() returns a cursor that can be iterated over
  // or turned into an array
  // with no arguments, .find() returns everything in the collection
  const booksCursor = getCollection().find()
  const books = await booksCursor.toArray()
  res.send(books)
})

router.get("/:bookId", async (req, res) => {
  const book = await getCollection().findOne({
    // we have to turn the string into an ObjectId
    // because in the database, all ids are
    // instances of the type ObjectId
    _id: new ObjectId(req.params.bookId),
  })
  res.send(book)
})

// router.post("/", async (req, res) => {
//   await getCollection().insertOne(req.body)
//   res.send("success")
// })

// This endpoint does the same thing as above, but more safely
router.post("/", async (req, res) => {
  // add a new entry, only if the fields are included
  if (req.body.title && req.body.author) {
    // "insert" means "add a new document"
    const result = await getCollection().insertOne({
      title: req.body.title || "untitled",
      author: req.body.author || "unkown author",
    })
  } else {
    res.status(422).send("invalid entry")
  }
  res.send(`added ${req.body.title} by ${req.body.author}`)
})

export default router
