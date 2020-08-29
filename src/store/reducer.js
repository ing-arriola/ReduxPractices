const initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "STORE":
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter }),
      };

    default:
      break;
  }
  return state;
};

export default reducer;
