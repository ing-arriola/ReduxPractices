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
    case "DELETE":
      //One way to delete an element from an array without mutation
      //let newArray=[...state.result]
      //newArray.splice(elementToBeDeleted,1)
      //So, if the received id (action.id) isn't equal to the current element.id
      // it means that the current element is not what we want to delete, but when both are equal
      //it means the result is going to be false so, that element is not going to be longer included on the new array
      const newArray = state.result.filter(
        (element) => element.id !== action.id
      );
      return {
        ...state,
        result: newArray,
        //
        //result: newArray;
      };

    default:
      break;
  }
  return state;
};

export default reducer;
