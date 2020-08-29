const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "ADD":
      return {
        counter: state.counter + action.value,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "SUBSTRACT":
      return {
        counter: state.counter - action.value,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
