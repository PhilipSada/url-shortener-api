const mongoose = require("mongoose");

async function db() {

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}


module.exports = db;
