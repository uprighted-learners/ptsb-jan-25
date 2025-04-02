import { mongoose } from "../db.js"

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    maxLength: 200,
    unique: true, // TODO: not enforced
  },
  password: {
    type: String,
    required: true,
  },
  favoriteCow: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cow",
  },
})

export default mongoose.model("users", User)
