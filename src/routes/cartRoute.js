const express = require("express");
const Cart = require("../models/Cart");
const cartRoute = express.Router();

cartRoute
  .get("/list", async (req, res) => {
    try {
      const cartList = await Cart.find({ user_id: req.user._id });
      res.send({ success: true, cartList });
    } catch (error) {}
  })
  .post("/add", async (req, res) => {
    try {
      const cart = new Cart({
        book_id: req.body.book_id,
        user_id: req.user._id,
      });
      await cart.save();
      res.send({ success: true, message: "Added to card" });
    } catch (error) {
      res.status(500).send({ success: false, message: error });
    }
  })
  .delete("/remove/:id", async (req, res) => {
    try {
      console.log(req.body);
      await Cart.deleteOne({
        book_id: req.params.id,
        user_id: req.user._id,
      });
      res.send({ success: true, message: "Removed from card" });
    } catch (error) {
      res.status(500).send({ success: false, message: error });
    }
  })
  .delete("/remove_all", async (req, res) => {
    try {
      await Cart.deleteMany({ user_id: req.user._id });
      res.send({ success: true, message: "Removed from card" });
    } catch (error) {
      res.status(500).send({ success: false, message: error });
    }
  });

module.exports = cartRoute;
