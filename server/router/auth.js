const express = require("express");
// we are using express backend router not react router for each page db connectivity.
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate.js"); // middleware

require("../db/conn.js");
const User = require("../model/userSchema.js");

router.get("/", (req, res) => {
  res.send("Hello World from a server router.");
});

// Registration route.
// we are sending data in /register path.
router.post("/register", async (req, res) => {
  // object destrucuring.
  // console.log(req.body);
  const { name, email, phone, work, password, cpassword } = req.body; // gettting input from front-end.
  //validation.
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all input fields." });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matched" });
    } else {
      //if user not exist save that values in User collection.
      const user = new User({ name, email, phone, work, password, cpassword });
      // pre hashing middleware is running.
      await user.save();
      res.status(201).json({ message: "user successfully registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route backend after registration.
// we chk 3 conditions for log in
//1. input details must be not empty.
//2. email should be registered in db.
//3. password should be same as corresponding email.

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation-1.
    if (!email || !password) {
      return res.status(400).json({ error: "Plz Fill the data" });
    }
    //validation-2.
    // if it find same email then it will return all document related to email else return null.
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      //comparing hash password from db.
      const isMatch = await bcrypt.compare(password, userLogin.password);
      // console.log(userLogin)

      //generating jwt token by calling user define fun.
      const token = await userLogin.generateAuthToken();
      console.log("JWT Token is : ");
      console.log(token);
      //saving jwtoken in cookies.
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credientials" });
      } else {
        res.json({ message: "user sigin successfully." });
      }
    } else {
      res.status(400).json({ message: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// about us page.
router.get("/serverabout", authenticate, (req, res) => {
  console.log("About Page");
  res.send(req.rootUser);
});

module.exports = router;
