import { combineReducers } from "redux";
import { dataReducer } from "./datareducer";
export default combineReducers({
  data: dataReducer,
});
