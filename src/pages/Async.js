import React, {Component} from 'react';

import {connect} from "react-redux";

import {ajax} from "../actions/async";

class Async extends Component {
    render() {
        const {loading, error, resp} = this.props.async
        return (
            <div>
                {loading
                    ? '正在loading'
                    : (error
                        ? error
                        : <p>{resp}</p>)}
                <button onClick={() => this.props.ajax()}>aaa</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({async: state.async})

export default connect(mapStateToProps, {ajax})(Async)