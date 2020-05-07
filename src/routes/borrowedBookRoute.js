const express = require("express");
const BorrowedBook = require("../models/BorrowedBook");
const borrowedBookRoute = express.Router();

borrowedBookRoute
  .get("/list", (req, res) => {
    res.send("Borrowed Books list");
  })
  .post("/new", (req, res) => {
    res.send("borrowing new book");
  })
  .delete("/return", (req, res) => {
    res.send("Returning back the book");
  })
  .delete("/return_all", (req, res) => {
    res.send("Returning back the book");
  });

module.exports = borrowedBookRoute;
