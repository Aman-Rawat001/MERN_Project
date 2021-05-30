const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
require("./db/conn.js"); //importing database connection
// const User = require("./model/userSchema.js");

// telling that our input data is in the form of json and convert in into object.
app.use(express.json());

// link the express router files/request handling to make route easy.
app.use(require("./router/auth.js"));

const PORT = process.env.PORT;

// Middelware
// const middleware = (req, res, next) => {
//   console.log("Middleware is working");
//   next();
// };

// Express Stuff
app.get("/signin", (req, res) => {
  res.send("SignIn Form");
});
app.get("/signup", (req, res) => {
  res.send("SignUp Form");
});
// app.get("/about", (req, res) => {
//   res.send("About me");
// });
app.get("/contact", (req, res) => {
  res.send("Contact Form");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
