import { combineReducers } from "redux"

import auth from "./authReducer"
import user from "./userReducer"
import score from "./scoreReducer"

export default combineReducers({
  auth,
  user,
  score
})
