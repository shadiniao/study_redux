import React, {Component} from 'react';
import {reduxForm, Field, Form} from "redux-form";
import {connect} from "react-redux";

const required = value => (value
    ? undefined
    : '必填')
const maxLength = max => value => {
    return value && value.length > max
        ? `只能填${max}个字`
        : undefined
}

const maxLength3 = maxLength(3)

function renderField({
    input,
    label,
    type,
    meta: {
        touched,
        error,
        warning
    }
}) {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type}/> {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}

class MyForm extends Component {
    _submit(value) {
        console.log(value)
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props
        return (
            <Form onSubmit={handleSubmit(value => this._submit(value))}>
                <Field
                    name="name"
                    component={renderField}
                    type="text"
                    label="name:"
                    validate={[required, maxLength3]}/>

                <Field name="code" component={renderField} type="text" label="code:"/>

                <button type="submit" disabled={pristine || submitting}>submit</button>
                <button type="reset" disabled={submitting} onClick={reset}>reset</button>
            </Form>
        )
    }
}

MyForm = reduxForm({form: 'form1'})(MyForm)
export default connect(state => ({
    initialValues: {
        name: 'zyz',
        code: '001'
    }
}),)(MyForm)