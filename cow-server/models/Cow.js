import { mongoose } from "../db.js"

// notes:
// keep track of a cow's parentage?
// and all health info (inseminations/pregnancies/births, vaccines, etc)
// TODO: give each cow a user?

const Cow = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  sex: {
    type: String,
    enum: ["M", "F"],
  },
  castratedDate: {
    type: Date,
  },
  dob: {
    type: Date,
    required: true,
    max: [Date.now, "Cows cannot be born in the future"],
    default: Date.now,
  },
  deceasedDate: {
    type: Date,
    max: [Date.now, "Cows cannot die in the future"],
  },
  breed: {
    // type: mongoose.ObjectId, ???
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Breed",
  },
  appearance: {
    type: String,
    maxLength: 5000,
  },
  weight: {
    type: Number,
    min: 0,
  },
  weightDate: {
    type: Date,
    // TODO: can this be set only if a weight exists?
    default: Date.now,
    max: [Date.now, "Cows cannot be weighed in the future"],
  },
  weightUnit: {
    type: String,
    default: "lb",
  },
})

export default mongoose.model("cows", Cow)
