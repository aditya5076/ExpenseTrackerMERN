import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { numberWithCommas } from '../utils/Commas';

const Income = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  // filter the item which > 0 and then added it with accumaltor usinng reduce
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // for this filtered item which is < 0 and then added the item using accumal(reduce)
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          {numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          {numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};

export default Income;
