const mongoose = require("mongoose");

// connecting mongo atlas DB
const DB = process.env.DATABASE;

mongoose
  //to remove warnings.
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("no connection");
  });
