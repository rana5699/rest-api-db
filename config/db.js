const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = config.db.url;
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Monog Db Atlas connected Sucssesfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
