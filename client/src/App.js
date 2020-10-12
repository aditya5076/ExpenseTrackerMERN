import React from 'react';
import './App.css';
import AddTransac from './container/AddTransac';
import Balance from './container/Balance';
import Header from './container/Header';
import Income from './container/Income';
import TransacList from './container/TransacList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className='container'>
          <Balance />
          <Income />
          <TransacList />
          <AddTransac />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
