const express = require("express");
const auth = require("../middlewares/auth");
const User = require("../models/User");
const authRoute = express.Router();

authRoute
  .post("/login", (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found.",
        });
      } else {
        user.comparePassword(req.body.password, async function (err, isMatch) {
          if (isMatch && !err) {
            const token = await user.generateAuthToken();
            res.cookie("jwt", token);
            res.json({ success: true, token, user });
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Wrong password.",
            });
          }
        });
      }
    });
  })
  .delete("/logout", auth, async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token != req.token;
      });
      await req.user.save();
      res.send({ success: true, message: "Logged out" });
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = authRoute;
