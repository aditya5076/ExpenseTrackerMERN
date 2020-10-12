const mongoose = require('mongoose');

// create schema-->means act like columns and here we are setting the condi tht data must be text,amount only
const TransacSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'please add text'],
  },
  amount: {
    type: Number,
    required: [true, 'please add +ve or -ve number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransacSchema);
