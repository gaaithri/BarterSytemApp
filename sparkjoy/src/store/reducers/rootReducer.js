import loginReducer from './loginReducer'
import itemReducer from './itemReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
  login: loginReducer,
  item: itemReducer,
  firestore: firestoreReducer
});

export default rootReducer

