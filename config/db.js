const mongoose = require('mongoose');

const uri =
  'mongodb+srv://hustle123:hustle123@cluster0.mm8tj.mongodb.net/expenseTracker?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      // to avoid the waring from atlas use below
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `mongodb connested: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`error:${err.message}`.blue);
    process.exit(1);
  }
};

module.exports = connectDB;
