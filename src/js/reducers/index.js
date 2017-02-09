import { combineReducers } from "redux"

import auth from "./authReducer"
import user from "./userReducer"
import lastMonthScore from "./lastMonthScore"

export default combineReducers({
  auth,
  user,
  lastMonthScore
})
