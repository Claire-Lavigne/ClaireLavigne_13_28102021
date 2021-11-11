import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: loggedReducer,
});

export default allReducers;
