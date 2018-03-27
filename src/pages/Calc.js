import React, {Component} from 'react';

import {connect} from "react-redux";

import {plus, minus, reset, plusDelay} from "../actions/calc";

class Calc extends Component {

    render() {
        return (
            <div>
                <p>this is {this.props.calc.count}</p>
                <button onClick={() => this.props.plus()}>plus</button>
                <button onClick={() => this.props.minus()}>minus</button>
                <button onClick={() => this.props.reset()}>reset</button>
                <button onClick={() => this.props.plusDelay()}>plus_delay</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {calc: state.calc}
}

const mapDispatchToProps = (dispatch) => ({
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus()),
    reset: () => dispatch(reset()),
    plusDelay: () => dispatch(plusDelay())
})

export default connect(mapStateToProps, mapDispatchToProps)(Calc)