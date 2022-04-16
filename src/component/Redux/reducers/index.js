import { combineReducers } from "redux";
import todoRiducer from "./todoRiducer";

const rootReducer = combineReducers({
  todoRiducer,
});

export default rootReducer;
