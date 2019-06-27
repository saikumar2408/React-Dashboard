import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { TextInput, Checkbox } from '../../FormikInputs';

const loginFormScheme = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is a required field'),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is a required field')
});

export default class LoginFrom extends Component{
render(){
    return(
<Formik
    validationSchema={loginFormScheme}
    initialValues={{
        email: '',
        password: '',
        remember: false,
    }}
    onSubmit={(values) => {
        alert(values.email + "and password" + values.password);
        this.props.SubmitClicked(values.email, values.password, values.remember);

    }}
>
    {({
        touched,
        errors,
        values,
    }) => (
            <FormikForm style={{ margin: "20px" }}>
                <Form.Row>
                    <Form.Group controlId="formHorizontalEmail">
                        <Field
                            required
                            // autoFocus
                            autoComplete="on"
                            name="email"
                            className="form-input"
                            placeholder="email *"
                            component={TextInput}
                            isInvalid={touched.email && errors.email}
                        />
                        <ErrorMessage
                            name="email"
                            render={(msg) => <Form.Control.Feedback type="invalid">
                                {msg}
                            </Form.Control.Feedback>
                            }
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="formHorizontalPassword">
                        <Field
                            required
                            type="password"
                            name="password"
                            placeholder="Password *"
                            className="form-input"
                            component={TextInput}
                            isInvalid={touched.password && errors.password}
                        />
                        <ErrorMessage
                            name="password"
                            render={(msg) => <Form.Control.Feedback type="invalid">
                                {msg}
                            </Form.Control.Feedback>
                            }
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Field
                        component={Checkbox}
                        name="remember"
                        id="remember"
                        label="Remember Me"
                    />
                </Form.Row>
                <Form.Group>
                    <Button style={{ marginTop: '20px' }} variant="outline-primary" type="submit">Sign in</Button>
                </Form.Group>
            </FormikForm>
        )}
</Formik>
    )
}
}