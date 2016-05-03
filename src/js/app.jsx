import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import HelloRedux from './components/helloRedux'
import rootReducer from './reducers';
import storage from './util/storage';

const APP_STORAGE_KEY = 'react-redux-starter';
var initialState = storage.get(APP_STORAGE_KEY) || {}

const store = createStore(rootReducer, initialState)

store.subscribe(() => {
    //console.group("Saving changed state, new state is");console.log(store.getState().toJS());console.groupEnd();
    if (!storage.get('debug')) {
        storage.set(APP_STORAGE_KEY, store.getState());
    }
})

ReactDOM.render(
    <Provider store={store}>
        <HelloRedux />
    </Provider>,
    document.getElementById('app')
)
