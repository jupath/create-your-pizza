const initialState = {
  time: null,
  ingredients: [],
  price: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...this.state,
        time: action.order.time,
        ingredients: action.order.ingredients,
        price: action.order.price,
      };
    default:
      return state;
  }
};
