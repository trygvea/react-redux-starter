import React from 'react'
import ReactDOM from 'react-dom'

require("../style/app.css")

const HelloReact = props =>
    <div className="hello">
        <h1>Hello {props.greet}</h1>
    </div>

ReactDOM.render(
    <HelloReact greet="World!"/>,
    document.getElementById('app')
)