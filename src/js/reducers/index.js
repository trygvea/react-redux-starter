import { combineReducers } from 'redux-immutable'   // regular redux combineReducers doesnt work with immutable
import hello from './hello'
import geolocation from './geolocation'

export default combineReducers({
    hello,
    geolocation
})
