const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

connectDB();

dotenv.config({ path: './config/config.env' });

const app = express();

// inorder to use req.body.text/amount will use bodyparser middleware
app.use(express.json());

// shows the status of urls
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const transactions = require('./routes/transaction');
const { static } = require('express');

app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running on ${process.env.NODE_ENV} mode on port ${PORT}`.red.bold
  )
);
