import { combineReducers } from 'redux'

import questionsReducer from '../router/AdminRedux/redux/reducers'
import  userReducer from '../router/Login/redux/reducer'
export default combineReducers({
  
  questions: questionsReducer,
  user: userReducer,


})
