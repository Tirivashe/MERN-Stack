//This file combines all the other reducers
import { combineReducers } from 'redux'
import itemReducer from './itemReducer'

//exports all the reducers in this main reducer inside of an object or as an object. 'combineReducers' acts as a higher-order component, kinda
export default combineReducers({
    item: itemReducer
})