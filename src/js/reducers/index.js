import { combineReducers } from "redux"

import user from "./userReducer"
import lastMonthScore from "./lastMonthScore"

export default combineReducers({
  user,
  lastMonthScore
})
