require("./config/db");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const cartRoute = require("./routes/cartRoute");
const auth = require("./middlewares/auth");

const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/book", auth, bookRoute);
app.use("/cart", auth, cartRoute);

app.get("/my_profile", auth, (req, res) => {
  res.send(req.user);
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Server started and running on PORT ${port}`);
});
