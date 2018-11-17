import { combineReducers } from 'redux'
import user from './user/reducer'
import category from './category/reducer'

export default combineReducers({
  user,
  category,
})
