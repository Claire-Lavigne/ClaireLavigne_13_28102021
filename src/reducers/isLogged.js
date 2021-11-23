// indicate the type of action being performed.
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

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
    case LOG_IN:
      console.log("action", action);
      return {
        ...state,
        isLogged: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case LOG_OUT:
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
