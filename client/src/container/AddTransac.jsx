import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddTransac = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  // to add the transac defined it globalstate using context
  const { addTransac } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransac = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };
    addTransac(newTransac);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder='Enter text...'
            id='text'
            onFocus="this.value=' '"
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder='Enter amount...'
          />
        </div>
        <button
          className='btn'
          onClick={(document.getElementById('amount').value = '')}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransac;
