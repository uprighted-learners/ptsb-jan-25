import mongoose from "mongoose"

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/BooksAPI")
    console.log("connected to db")
  } catch (err) {
    console.warn(`db error: ${err}`)
  }
}

export { dbConnect, mongoose }
