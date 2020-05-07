const express = require("express");
const User = require("../models/User");
const userRoute = express.Router();

userRoute.post("/new", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    await user.generateAuthToken();
    res
      .status(201)
      .send({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
});

module.exports = userRoute;
