import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// initial state
const initialState = {
  transactions: [
    // dummy transations
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 300 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camera', amount: 150 },
  ],
  error: null,
  loading: true,
};

// create context
export const GlobalContext = createContext(initialState);

// provider component function
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions for GET--->backend stuff
  async function getTransac() {
    try {
      const response = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'get_transac',
        payload: response.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'transac_error',
        payload: err.response.data.error,
      });
    }
  }

  // actions for delete the item
  async function deleteTransac(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: 'delete_trans',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'transac_error',
        payload: err.response.data.error,
      });
    }
  }
  // actions for add transac item
  async function addTransac(transaction) {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);
      dispatch({
        type: 'add_trans',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'transac_error',
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransac,
        addTransac,
        getTransac,
        error: state.error,
        loading: state.loading,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
