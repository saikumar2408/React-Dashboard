import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form as FormikForm, ErrorMessage, yupToFormErrors } from 'formik';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { TextInput, Checkbox, DateInput } from '../../FormikInputs';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const loginFormScheme = Yup.object().shape({
    firstName: Yup.string().required("first name is required field"),
    email: Yup.string().email('Must be a valid email').required('Email is a required field'),
    dateOfBirth: Yup.date().required("DOB is required field"),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is a required field')
});

export default class Register extends Component {
    state={
        startDate:new Date()
    }
    handleChange=(e)=>{
       this.setState({startDate:e.value},()=>{
           console.log(this.state.startDate)
       })
    }
    render() {
        return (
            <Formik
                validationSchema={loginFormScheme}
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email: '',
                    dateOfBirth: new Date(),
                    password: '',
                }}
                onSubmit={(values) => {
                    alert(values.email + "and password" + values.password);
                    this.props.SubmitClicked(values);
                }}
            >
                {({
                    touched,
                    errors,
                    values,
                }) => (
                        <FormikForm style={{ margin: "20px" }}>
                            <Form.Row>
                                <Form.Group controlId="formHorizontalfName">
                                    <Field
                                        required
                                        // autoFocus
                                        autoComplete="on"
                                        name="firstName"
                                        className="form-input"
                                        placeholder="First Name *"
                                        component={TextInput}
                                        isInvalid={touched.firstName && errors.firstName}
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        render={(msg) => <Form.Control.Feedback type="invalid">
                                            {msg}
                                        </Form.Control.Feedback>
                                        }
                                    />
                                </Form.Group>
                                </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formHorizontalName">
                                    <Field
                                        required
                                        // autoFocus
                                        autoComplete="on"
                                        name="lastName"
                                        className="form-input"
                                        placeholder="Last Name"
                                        component={TextInput}
                                        isInvalid={touched.email && errors.email}
                                    />
                                </Form.Group>
                            </Form.Row>
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
                                <Form.Group controlId="formHorizontaldateOfBirth">
                                    {/* <DatePicker
                                        dateFormat="yyyy/MM/dd"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange} /> */}
                                    <Field
                                        required
                                        // autoComplete="on"
                                        name="dateOfBirth"
                                        // className="form-input"
                                        component={DateInput}
                                        placeholder="DD/MM/YYYY"
                                        isInvalid={touched.dateOfBirth && errors.dateOfBirth}
                                    />       
                                    <ErrorMessage
                                        name="dateOfBirth"
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
                            <Form.Group>
                                <Button style={{ marginTop: '20px' }} variant="outline-primary" type="submit">Sign Up</Button>
                            </Form.Group>
                        </FormikForm>
                    )}
            </Formik>
        )
    }
}