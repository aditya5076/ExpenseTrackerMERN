import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { numberWithCommas } from '../utils/Commas';

const Transaction = ({ transaction1 }) => {
  const { deleteTransac } = useContext(GlobalContext); //note write the same func as of defined in globalstate
  // to check the
  const sign = transaction1.amount < 0 ? '-' : '+';
  return (
    <>
      <li className={transaction1.amount < 0 ? 'minus' : 'plus'}>
        {transaction1.text}{' '}
        <span>
          {sign}${numberWithCommas(Math.abs(transaction1.amount))}
        </span>
        <button
          onClick={() => deleteTransac(transaction1._id)}
          className='delete-btn'>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
