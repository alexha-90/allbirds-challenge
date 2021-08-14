import React, { useState } from 'react';
import { loginInputFields, INPUT_FIELDS } from "./fields";
import { phoneNumberFormatter } from "./util";
import { DEFAULT_MAX_FIELD_LENGTH } from "../../constants";
import { submitLoginData } from "../../api/submitLogin";
import './style.scss';
//====================================================================================================================//

interface Props {
    setIsAuthenticated: any;
}

function LoginPage(props: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formValues, setFormValues] = useState({
        [INPUT_FIELDS.FIRST_NAME]: "",
        [INPUT_FIELDS.LAST_NAME]: "",
        [INPUT_FIELDS.PHONE_NUMBER]: "",
        [INPUT_FIELDS.EMAIL_ADDRESS]: "",
        [INPUT_FIELDS.PASSWORD]: "",
        [INPUT_FIELDS.PASSWORD_CONFIRMATION]: ""
    });

    const [hasValidationError, setHasValidationErrors] = useState({
        [INPUT_FIELDS.FIRST_NAME]: false,
        [INPUT_FIELDS.LAST_NAME]: false,
        [INPUT_FIELDS.PHONE_NUMBER]: false,
        [INPUT_FIELDS.EMAIL_ADDRESS]: false,
        [INPUT_FIELDS.PASSWORD]: false,
        [INPUT_FIELDS.PASSWORD_CONFIRMATION]: false
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.id;
        let newFieldValue = e.target.value;
        if (fieldName === INPUT_FIELDS.PHONE_NUMBER) {
            const currPhoneValue = formValues[INPUT_FIELDS.PHONE_NUMBER];
            // @ts-ignore
            newFieldValue = phoneNumberFormatter(currPhoneValue, newFieldValue);
        }
        // @ts-ignore
        setFormValues({
            ...formValues,
            [fieldName]: newFieldValue
        })
    };

    const onSubmitLoginForm = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        const res: any = await submitLoginData(formValues);
        if (res.status === 400) {
            setHasValidationErrors({
                [INPUT_FIELDS.FIRST_NAME]: res.message.includes(INPUT_FIELDS.FIRST_NAME),
                [INPUT_FIELDS.LAST_NAME]: res.message.includes(INPUT_FIELDS.LAST_NAME),
                [INPUT_FIELDS.PHONE_NUMBER]: res.message.includes(INPUT_FIELDS.PHONE_NUMBER),
                [INPUT_FIELDS.EMAIL_ADDRESS]: res.message.includes(INPUT_FIELDS.EMAIL_ADDRESS),
                [INPUT_FIELDS.PASSWORD]: res.message.includes(INPUT_FIELDS.PASSWORD),
                [INPUT_FIELDS.PASSWORD_CONFIRMATION]: res.message.includes(INPUT_FIELDS.PASSWORD_CONFIRMATION)
            })
        }
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
        if (res.status === 200) {
            props.setIsAuthenticated(true);
        }
    };

    console.log('FOR ALLBIRDS EVALUATOR\n===============================\nCurrent login form value state:\n', formValues);

    return (
        <div className="login-page">
            <h1>CREATE AN ACCOUNT</h1>
            <p className="evaluator-text">
                Evaluator - Check Developer's console to see field changes. If fields inputs are empty or not alphanumeric,
                you will see a registration error (simulating backend validation error). Also if phone number or email are not formatted
                correctly or passwords mismatched.
            </p>
            <form>
                {loginInputFields.map(field => (
                    <div className="form-field" id={field.name + "-input"} key={field.name}>
                        <label
                            style={{ color: hasValidationError[field.name] ? "red" : "black" }}
                            htmlFor={field.name}
                        >
                            {field.label.toUpperCase() + (field.required ? " *" : "")}
                        </label>
                        <input
                            type={field.type || "text"}
                            maxLength={field.maxLength || DEFAULT_MAX_FIELD_LENGTH}
                            name={field.name}
                            id={field.name}
                            autoComplete={field.autoComplete || ""}
                            placeholder={field.placeholder || ""}
                            value={formValues[field.name]}
                            onChange={handleOnChange}
                        />
                    </div>
                ))}
                <div className="submit-button">
                    <input
                        type="submit"
                        value={isSubmitting ? "SUBMITTING..." : "REGISTER"}
                        onClick={onSubmitLoginForm}
                    />
                </div>
            </form>
            <p className="legal-text">
                By creating an account, you agree to our&nbsp;
                <a href="https://www.allbirds.com/pages/allbirds-terms-of-use" target="_blank" rel="noreferrer">Terms of Use</a>&nbsp;
                and <a href="https://www.allbirds.com/pages/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>.
            </p>
            <p className="required-text">
                * REQUIRED FIELDS
            </p>
        </div>
    );
}

export default LoginPage;
