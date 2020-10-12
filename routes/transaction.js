const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require('../controllers/transac');

// router.get('/', (req, res) => res.send('hey')); //alearding set the loc in app,js

router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTransactions);

module.exports = router;
