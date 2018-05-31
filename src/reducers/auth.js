const initialState = {
  uid: '',
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...this.state,
        uid: action.user.uid,
        name: action.user.name,
      };
    case 'USER_LOGOUT':
      return {
        ...this.state,
        ...initialState,
      };
    default:
      return state;
  }
};
