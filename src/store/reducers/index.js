import { combinedReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";

const rootReducer = combinedReducers({
  currentUser,
  errors
});

export default rootReducer;
