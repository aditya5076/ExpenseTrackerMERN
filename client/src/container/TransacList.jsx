import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';

const TransacList = () => {
  const { transactions, getTransac } = useContext(GlobalContext);
  // console.log(context);

  // for http backend
  useEffect(() => {
    getTransac();
  }, []);
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => (
          <Transaction transaction1={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TransacList;
