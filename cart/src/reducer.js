const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'REMOVE_ITEM':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    case 'INCREASE_ITEM':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };
    case 'DECREASE_ITEM':
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          })
          .filter((item) => item.amount !== 0),
      };
    case 'GET_TOTALS':
      const { total, amount } = state.cart.reduce(
        ({ total, amount }, item) => {
          return {
            total: parseFloat((total + item.price * item.amount).toFixed(2)),
            amount: amount + item.amount,
          };
        },
        { total: 0, amount: 0 }
      );
      return { ...state, amount, total };
    case 'LOADING':
      return { ...state, loading: true };
    case 'DISPLAY_ITEMS':
      return { ...state, loading: false, cart: action.payload };
    default:
      return state;
  }
};

export default reducer;
