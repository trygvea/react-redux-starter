import React from 'react';
import {connect} from 'react-redux';
import {helloIncrement} from '../actions'

const HelloCounter = props =>
    <button onClick={props.onIncrement}>
        {props.value}
    </button>

const mapStateToProps = (state, ownProps) => ({
    value: state.getIn(['hello', 'counter']) || 0
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrement: () => dispatch(helloIncrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloCounter)
