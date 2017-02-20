import { combineReducers } from "redux"

import auth from "./authReducer"
import employee from "./empoyeeReducer"
import user from "./userReducer"
import score from "./scoreReducer"

export default combineReducers({
  auth,
  user,
  score,
  employee
})
