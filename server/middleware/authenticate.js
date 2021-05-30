const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("../model/userSchema.js");

const Authenticate = async (req, res, next) => {
  app.use(cookieParser()); // for get the value of cookie.
  try {
    const token = req.cookies.jwtoken; // getting token from users browser.
    console.log("cookie :" + token);
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY); // verifying token and SECRET KEY.

    const rootUser = await User.findOne({
      // compairing that token from db.
      _id: verifyToken._id,
      "tokens.token": token, // "tokens.token" is present in db.
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("Unautherized: No token provided");
    console.log("ERROR IS : " + err);
  }
};

module.exports = Authenticate;
