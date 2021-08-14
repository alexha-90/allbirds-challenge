import React, { useState } from 'react';
import { loginInputFields, INPUT_FIELDS } from "./fields";
import { phoneNumberFormatter } from "./util";
import { DEFAULT_MAX_FIELD_LENGTH } from "../../constants";
import { submitLoginData } from "../../api/submitLogin";
import './style.scss';
//====================================================================================================================//


function LoginPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formValues, setFormValues] = useState({
        [INPUT_FIELDS.FIRST_NAME]: "",
        [INPUT_FIELDS.LAST_NAME]: "",
        [INPUT_FIELDS.PHONE_NUMBER]: "",
        [INPUT_FIELDS.EMAIL_ADDRESS]: "",
        [INPUT_FIELDS.PASSWORD]: "",
        [INPUT_FIELDS.PASSWORD_CONFIRMATION]: ""
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
        await submitLoginData(formValues);
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
    };


    console.log('FOR ALLBIRDS EVALUATOR\n===============================\nCurrent login form value state:\n', formValues);

    return (
        <div className="login-page">
            <h1>CREATE AN ACCOUNT</h1>
            <p className="evaluator-text">
                Evaluator - Check Developer's console to see field changes. If fields inputs are not alphanumeric,
                you will see a registration error (simulating backend validation error).
            </p>
            <form>
                {loginInputFields.map(field => (
                    <div className="form-field" id={field.name + "-input"} key={field.name}>
                        <label htmlFor={field.name}>
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
