import { mongoose } from "../db.js"

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // TODO: is this enforced?
    maxLength: 60,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "not a valid email address"],
  },
  // we won't put any other constraints here
  // because we won't be storing actual passwords
  // we'll actually store an encoded hash string instead
  password: {
    type: String,
    required: true,
  },
})

export default mongoose.model("users", User)
