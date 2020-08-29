const redux = require("redux");
const createStore = redux.createStore;

const iState = {
  counter: 0,
};

//Reducer, this must be created before create a store
const rootReducer = (state = iState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value,
      };

    default:
      break;
  }
  return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatch action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
