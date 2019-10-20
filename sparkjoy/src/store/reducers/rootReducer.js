import loginReducer from './loginReducer'
import itemReducer from './itemReducer'
import productReducer from './productReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
  login: loginReducer,
  item: itemReducer,
  product:productReducer,
  firestore: firestoreReducer
});

export default rootReducer

