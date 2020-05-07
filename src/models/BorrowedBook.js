const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const BorrowedBookSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book_id: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
});

const BorrowedBook = model("BorrowedBook", BorrowedBookSchema);

module.exports = BorrowedBook;
