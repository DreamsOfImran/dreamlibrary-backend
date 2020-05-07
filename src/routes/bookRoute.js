const express = require("express");
const Book = require("../models/Book");
const Cart = require("../models/Cart");
const bookRoute = express.Router();

bookRoute
  .get("/list", async (req, res) => {
    try {
      const list = await Book.find();
      const cartList = await Cart.find({ user_id: req.user._id });
      const bookList = list.map((book) => {
        console.log(cartList);
        if (cartList.some((cart) => cart.book_id === book._id)) {
          return { ...book._doc, status: true };
        } else {
          return { ...book._doc, status: false };
        }
      });
      res.send({ success: true, books: bookList });
    } catch (error) {}
  })
  .get("/status/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book) {
        const cart = await Cart.findOne({
          book_id: book._id,
          user_id: req.user._id,
        });
        if (cart) {
          res.send({ success: false, message: "Already in cart", cart: true });
        } else {
          res.send({ success: false, message: "Not in cart", cart: false });
        }
      } else {
        res.send({ success: false, message: "Book not found" });
      }
    } catch (error) {}
  })
  .get("/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.send({ success: true, book });
    } catch (error) {}
  })
  .post("/new", async (req, res) => {
    try {
      const book = new Book(req.body);
      await book.save();
      res.send({ success: true, message: "Added new book" });
    } catch (error) {
      res.status(500).send({ success: false, message: error });
    }
  })
  .delete("/remove/:id", async (req, res) => {
    try {
      await Book.deleteOne({ _id: req.params.id });
      res.send({ success: true, message: "Removed book" });
    } catch (error) {
      res.status(500).send({ success: false, message: error });
    }
  });

module.exports = bookRoute;
