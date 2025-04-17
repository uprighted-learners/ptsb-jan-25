import { mongoose } from "../db.js"

const PURPOSES = ["meat", "dairy", "draught", "show", "pet"]

const Breed = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 200,
  },
  species: {
    type: String,
    required: true,
    enum: ["taurus", "indicus"],
    default: "taurus",
  },
  description: {
    type: String,
    maxLength: 10000,
  },
  primaryPurpose: {
    type: String,
    required: true,
    enum: PURPOSES,
  },
  secondaryPurpose: {
    type: String,
    enum: PURPOSES,
  },
  minAdultWeight: {
    type: Number,
    min: 0,
  },
  maxAdultWeight: {
    // TODO: custom validator to enforce max > min
    type: Number,
    min: 0,
  },
})

export default mongoose.model("breeds", Breed)
