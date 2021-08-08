import React from "react";
import { connect } from "react-redux";
import { counterReducer } from "./../reducers/reducers";

function Click() {
  return (
    <div>
      <button onClick={() => console.log("Hello there!")}>Click Me</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = { counterReducer };

export default connect(mapStateToProps, mapDispatchToProps)(Click);
