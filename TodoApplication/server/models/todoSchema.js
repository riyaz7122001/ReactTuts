const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: [true, "Please proivde the data!"],
    },
    done: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  { timestamps: true }
);

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;
