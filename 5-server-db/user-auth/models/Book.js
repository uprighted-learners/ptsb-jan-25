import { mongoose } from "../db.js"

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
