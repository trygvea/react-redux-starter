import { combineReducers } from 'redux'
import hello from './hello'
import geolocation from './geolocation'

export default combineReducers({
    hello,
    geolocation
})
