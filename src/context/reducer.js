function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      state.counter = state.counter + 1;
      return {...state};
    case 'DECREASE':
      state.counter = state.counter - 1;
      return {...state};
    default:
      return state;
  }
}

export {reducer} ;