import { React, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import propTypes from "prop-types";

const FormInput = ({class_Name, name, label, type, underLabel, placeholder, handleChange}) => {
    return (
        <Fragment>
            <Form.Group className={class_Name} controlId={name}>
				{ label ? (<Form.Label> {label} </Form.Label>) : '' }
				<Form.Control type={type} placeholder={placeholder} onChange={handleChange} />
				{ underLabel ? 
                (<Form.Text className="text-muted">
					{ underLabel }
				</Form.Text> ) : '' }
			</Form.Group>
        </Fragment>
    )
}

FormInput.propTypes = {
    class_Name: propTypes.string,
    name: propTypes.string,
    label: propTypes.string,
    type: propTypes.string,
    underLabel: propTypes.string,
    placeholder: propTypes.string,
    handleChange: propTypes.object
};

export default FormInput
