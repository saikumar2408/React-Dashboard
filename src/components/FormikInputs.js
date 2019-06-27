import React from 'react';
import DatePicker from 'react-datepicker';
import { Form } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';

export const TextInput = ({
    field, // { name, value, onChange, onBlur }
    ...props
}) =>
    (
        <Form.Control type="text" {...field} {...props} />
    );

export const DateInput = ({
    field, // { name, value, onChange, onBlur }
    form: { setFieldValue, handleChange },
    ...props
}) => (
        <DatePicker
            className="form-control"
            {...field}
            {...props}
            selected={field.value}
// tslint:disable-next-line: jsx-no-lambda
            onChange={(dateTime) => {
                setFieldValue(
                    field.name,
                    dateTime
                );
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            value={field.value.toLocaleString("en-in", { formatMatcher: "best fit" })}
        />
        // <Form.Control type="date" {...field} {...props} />
    );

export const DropdownInput = ({
    field, // { name, value, onChange, onBlur }
    ...props
}) => (
        <Form.Control as="select" {...field} {...props}>
            <option value="" hidden>Select one</option>
            {
                props.options && props.options.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>{option.text}</option>
                ))
            }
        </Form.Control>
    );

export const DropdownMultiInput = ({
    field, // { name, value, onChange, onBlur }
    form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
        <Form.Control
            multiple
            as="select"
            {...field}
            {...props}
// tslint:disable-next-line: jsx-no-lambda
            onChange={(evt) =>
                setFieldValue(
                    field.name,
                    [].slice
                        .call(evt.target.selectedOptions)
                        .map((option) => option.value)
                )
            }
        >
            <option value="" hidden>Select one</option>
            {props.options && props.options.map((option) => (
                <option key={option.value} value={option.value} disabled={option.disabled}>{option.text}</option>
            ))}
        </Form.Control>
    );

// Checkbox input
export const Checkbox = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched, setFieldValue },
    id,
    label,
    className,
    ...props
}) => {
    return (
        <Form.Check
            id={id}
            name={name}
            value={value}
            checked={value}
            onChange={onChange}
            className="form-label"
            label="Remember me"
            onBlur={onBlur}
        />
    );
};

// // Checkbox group
// class CheckboxGroup extends React.Component<any> {
//     handleChange = (event: any) => {
//         const target = event.currentTarget;
//         let valueArray = [...this.props.value] || [];

//         if (target.checked) {
//             valueArray.push(target.id);
//         } else {
//             valueArray.splice(valueArray.indexOf(target.id), 1);
//         }

//         this.props.onChange(this.props.id, valueArray);
//     };

//     handleBlur = () => {
//         // take care of touched
//         this.props.onBlur(this.props.id, true);
//     };

//     render() {
//         const { value, error, touched, label, className, children } = this.props;

//         const classes = classNames(
//             "input-field",
//             {
//                 "is-success": value || (!error && touched), // handle prefilled or user-filled
//                 "is-error": !!error && touched
//             },
//             className
//         );

//         return (
//             <div className={classes}>
//                 <fieldset>
//                     <legend>{label}</legend>
//                     {React.Children.map(children, child => {
//                         return React.cloneElement(child, {
//                             field: {
//                                 value: value.includes(child.props.id),
//                                 onChange: this.handleChange,
//                                 onBlur: this.handleBlur
//                             }
//                         });
//                     })}
//                     {touched && <InputFeedback error={error} />}
//                 </fieldset>
//             </div>
//         );
//     }
// }

// Radio input
export const RadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    ...props
}) => {
    return (
        <div>
            <input
                name={name}
                id={id}
                type="radio"
                value={id} // could be something else for output?
                checked={id === value}
                onChange={onChange}
                onBlur={onBlur}
                // className={classNames("radio-button")}
                {...props}
            />
            <label htmlFor={id} className="pl-2">{label}</label>
        </div>
    );
};

// Radio group
export const RadioButtonGroup = ({
    value,
    error,
    touched,
    id,
    label,
    className,
    children,
    isInvalid,
}) => {
    return (
        // <div className={classes}>
        <fieldset>
            {children}

            {
                isInvalid
                && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            }
            {/* <Form.Control.Feedback type="invalid">"asdasd"</Form.Control.Feedback> */}
            {/* {touched && <InputFeedback error={error} />} */}
        </fieldset>
        // </div>
    );
};
