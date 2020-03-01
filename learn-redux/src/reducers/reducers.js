// REDUCER FUNCTIONS
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

const characterReducer = (
  state = {
    name: "Borat",
    class: "Diplomat"
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: "Kelsey" };
    default:
      return state;
  }
};

export { counterReducer, characterReducer };
