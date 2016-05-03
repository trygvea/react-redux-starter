import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import HelloRedux from './components/helloRedux'
import rootReducer from './reducers';

require("../style/app.css")

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <HelloRedux />
    </Provider>,
    document.getElementById('app')
)
