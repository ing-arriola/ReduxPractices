import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actions from "../../store/action";
class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd5} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtract5} />
        <hr />
        <button onClick={this.props.onStore}>STORE DATA</button>
        <ul>
          {this.props.storedData.map((data) => (
            <li key={data.id} onClick={() => this.props.onDelete(data.id)}>
              {data.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedData: state.result,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actions.INCREMENT }),
    onDecrement: () => dispatch({ type: actions.DECREMENT }),
    onAdd5: () => dispatch({ type: actions.ADD, value: 5 }),
    onSubtract5: () => dispatch({ type: actions.SUBSTRACT, value: 5 }),
    onStore: () => dispatch({ type: actions.STORE }),
    onDelete: (elementId) => dispatch({ type: actions.DELETE, id: elementId }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
