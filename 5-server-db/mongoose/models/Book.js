import { mongoose } from "../db.js"

// most of the options are optional
// but you ALWAYS need a type
// and you should always at least think about
// - whether it should be required
// - whether it should be unique
// - whether it should have a default
// - size/value constraints

const Book = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 500,
      trim: true,
    },
    author: {
      type: String,
      default: "Author Unknown",
    },
    rating: Number,
    genre: {
      type: String,
      enum: ["nonfiction", "history", "sci fi", "whatever"],
    },
    tags: [String],
  },
  { timestamps: true }
)

export default mongoose.model("books", Book)
