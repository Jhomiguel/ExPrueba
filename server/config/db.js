const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DBConnection;
