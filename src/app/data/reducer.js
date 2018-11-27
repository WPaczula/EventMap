import { combineReducers } from 'redux'
import user from './user/reducer'
import category from './category/reducer'
import event from './event/reducer'

export default combineReducers({
  user,
  event,
  category,
})
