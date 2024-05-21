const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://yousuf_76:mongo7620@cluster0.cloitjd.mongodb.net/?retryWrites=true&w=majority');
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;

