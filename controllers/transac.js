const { text } = require('express');
const Transaction = require('../models/TransacModel');
// @desc get all transaction
// @route GET /api/v1/transaction
exports.getTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: 'Srver error',
    });
  }
};

// @desc add all transaction
// @route POST /api/v1/transaction
exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (e) {
    //   this cond is used to void the hang when user donot enter any input
    if (e.name === 'ValidationError') {
      const mesg = await Object.values(e.errors).map((val) => val.message); //here we converted the error of obj into list of obj
      return res.status(400).json({
        success: false,
        error: mesg,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Srver error',
      });
    }
  }
};
// @desc delete all transaction
// @route DELETE /api/v1/transaction/:id
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    //   means id doest not atch with item's id
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'id not found',
      });
    }
    // if above cond is false and to dele transac
    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: 'Srver error',
    });
  }
};
