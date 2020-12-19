const mongoose = require("mongoose");
const password = "root";
const dbname = "prouser";

mongoose
  .connect(
    `mongodb+srv://tejas:${password}@cluster0.3dhoj.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then((ok) => console.log("Connected to mongodb"))
  .catch((err) => console.log("Error found ", err));

module.exports = mongoose;
