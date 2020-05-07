const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CartSchema = new Schema({
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

const Cart = model("Cart", CartSchema);

module.exports = Cart;
