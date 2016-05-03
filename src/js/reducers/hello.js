import * as types from '../actions';

export default (state = {counter:0}, action = {}) => {
    switch (action.type) {
        case types.HELLO_INCREMENT:
            return {counter: state.counter+1}
        default:
            return state
    }
}