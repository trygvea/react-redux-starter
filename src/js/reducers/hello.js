import { Map } from 'immutable';
import * as types from '../actions';

export default (state = Map().set('counter',0), action = {}) => {
    switch (action.type) {
        case types.HELLO_INCREMENT:
            return state.update('counter', counter => counter + 1)
        default:
            return state
    }
}