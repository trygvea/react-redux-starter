import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const reducer = (state = {counter:0}, action = {}) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter+1}
        default:
            return state
    }
}

const store = createStore(reducer)

const HelloRedux = props =>
    <div className="hello">
        <h1>Hello {props.greet}</h1>
        <button onClick={props.onIncrement}>
            {props.value}
        </button>
    </div>

const HelloReduxContainer = connect(
        state => ({ value: state.counter }),
        dispatch => ({ onIncrement: () => dispatch({type:'INCREMENT'}) })
)(HelloRedux)

ReactDOM.render(
    <Provider store={store}>
        <HelloReduxContainer />
    </Provider>,
    document.getElementById('app')
)
