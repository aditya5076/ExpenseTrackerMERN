export default (state, action) => {
  switch (action.type) {
    case 'get_transac':
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case 'delete_trans':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case 'add_trans':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'transac_error':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
