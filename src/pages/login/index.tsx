import React, { useState } from 'react';
import { loginInputFields, INPUT_FIELDS } from "./fields";
import { DEFAULT_MAX_FIELD_LENGTH } from "../../constants";
import './style.scss';
//====================================================================================================================//


function LoginPage() {
    const [formValues, setFormValues] = useState({
        [INPUT_FIELDS.FIRST_NAME]: "",
        [INPUT_FIELDS.LAST_NAME]: "",
        [INPUT_FIELDS.PHONE_NUMBER]: "",
        [INPUT_FIELDS.EMAIL_ADDRESS]: "",
        [INPUT_FIELDS.PASSWORD]: "",
        [INPUT_FIELDS.PASSWORD_CONFIRMATION]: ""
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldValue = e.target.value;
        // @ts-ignore
        setFormValues({
            ...formValues,
            [e.target.id]: fieldValue
        })
    };

    console.log('Current field state:', formValues)

    return (
        <div className="login-page">
            <h1>CREATE AN ACCOUNT</h1>
            <p>
                Evaluator - Check Developer's console to see field changes
            </p>
            <form>
                {loginInputFields.map(field => (
                    <div className="form-field" id={field.name + "-input"} key={field.name}>
                        <label htmlFor={field.name}>
                            {field.label.toUpperCase()}
                        </label>
                        <input
                            type={field.type || "text"}
                            maxLength={field.maxLength || DEFAULT_MAX_FIELD_LENGTH}
                            name={field.name}
                            id={field.name}
                            autoComplete={field.autoComplete || ""}
                            value={formValues[field.name]}
                            onChange={handleOnChange}
                        />
                    </div>
                ))}
                <div className="submit-button">
                    <input type="submit" value="REGISTER" />
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
