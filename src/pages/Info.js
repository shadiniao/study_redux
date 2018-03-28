import React, {Component} from 'react';
import {connect} from "react-redux";
import {infoRequest, infoError, infoSuccess} from '../actions/info'

class Info extends Component {
    _content() {
        const {loading, info, error} = this.props
        if (loading) {
            return '正在读取中'
        } else {
            if (error) {
                return error
            } else {
                return (
                    <div>
                        {info}
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.infoRequest()}>send</button>
                {this._content()}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        infoRequest: () => {
            dispatch(infoRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)