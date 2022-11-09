import { combineReducers } from "redux";
import candidates from "./candidates";
import user from "./user";


export default combineReducers({
  candidates: candidates,
  user: user
});
