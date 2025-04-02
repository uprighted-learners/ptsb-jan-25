import mongoose from "mongoose"

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("connected to db")
  } catch (err) {
    console.warn(`db error: ${err}`)
  }
}

export { dbConnect, mongoose }
