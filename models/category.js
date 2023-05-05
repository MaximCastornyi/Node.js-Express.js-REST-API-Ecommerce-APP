import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trm: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);
