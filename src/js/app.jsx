import React from 'react'
import ReactDOM from 'react-dom'

const HelloReact = props =>
    <div>
        <h1>Hello {props.greet}</h1>
    </div>;

ReactDOM.render(
    <HelloReact greet="World!"/>,
    document.getElementById('app')
)