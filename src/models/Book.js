const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
  },
  published_on: {
    type: Date,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
  },
});

const Book = model("Book", BookSchema);

module.exports = Book;
