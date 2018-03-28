import React, {Component} from 'react';
import {reduxForm, Field, Form} from "redux-form";

class MyForm extends Component {
    _submit(value) {
        console.log(value)
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props
        return (
            <Form onSubmit={handleSubmit(value => this._submit(value))}>
                <div>
                    <label htmlFor="name">name:</label>
                    <Field name="name" component="input" type="text"/>
                </div>

                <div>
                    <label htmlFor="code">code:</label>
                    <Field name="code" component="input" type="text"/>
                </div>
                <button type="submit" disabled={pristine || submitting}>submit</button>
                <button type="reset" disabled={pristine || submitting} onClick={reset}>reset</button>
            </Form>
        )
    }
}

export default reduxForm({form: 'form1'})(MyForm)