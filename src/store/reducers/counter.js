import * as actions from "../action";
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actions.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actions.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
