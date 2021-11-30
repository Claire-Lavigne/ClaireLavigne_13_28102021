import * as actionType from "../actions/ActionType";

const initialState = {
  isLogged: false,
  firstName: "",
  lastName: "",
};

// Set a state default value
const loggedReducer = (state = initialState, action) => {
  // The reducer looks at the action type field to decide what happens
  switch (action.type) {
    // Do something based on the different types of actions
    case actionType.LOG_IN:
      console.log("action", action);
      return {
        // copy data and update the copy
        ...state,
        isLogged: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case actionType.LOG_OUT:
      return {
        ...state,
        isLogged: false,
        firstName: "",
        lastName: "",
      };
    default:
      return state;
  }
};
export default loggedReducer;
