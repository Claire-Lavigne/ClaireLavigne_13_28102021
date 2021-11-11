// indicate the type of action being performed.
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

const initialState = {
  isLogged: false,
  userFirstName: "",
  userLastName: "",
};

// Set a state default value
const loggedReducer = (state = initialState, action) => {
  // The reducer looks at the action type field to decide what happens
  switch (action.type) {
    // Do something based on the different types of actions
    case LOG_IN:
      console.log(action);
      return {
        isLogged: true,
        userFirstName: action.payload.userFirstName,
        userLastName: action.payload.userLastName,
      };
    case LOG_OUT:
      return {
        isLogged: false,
      };
    default:
      return state;
  }
};
export default loggedReducer;
