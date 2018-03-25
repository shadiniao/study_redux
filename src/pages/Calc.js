import React, {Component} from 'react';

import {connect} from "react-redux";

import {plus, minus, reset, init} from "../actions/calc";

class Calc extends Component {
    componentWillMount() {
        console.log('constructor')
        this
            .props
            .init({
                id: this.props.id,
                data: {
                    count: 0
                }
            })
    }

    render() {
        return (
            <div>
                <p>this is {this.props.calc
                        ? this.props.calc.count
                        : '0'}</p>
                <button onClick={() => this.props.plus(this.props.id)}>plus</button>
                <button onClick={() => this.props.minus(this.props.id)}>minus</button>
                <button onClick={() => this.props.reset(this.props.id)}>reset</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log('mapStateToProps', state[props.id])
    return {
        calc: state.calc[props.id]
    }
}

const mapDispatchToProps = (dispatch) => ({
    plus: (id) => {
        dispatch(plus(id))
    },
    minus: (id) => dispatch(minus(id)),
    reset: (id) => dispatch(reset(id)),
    init: (data) => dispatch(init(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calc)