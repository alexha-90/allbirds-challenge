import React, { useState } from 'react';
import './style.scss';
//====================================================================================================================//

const INPUT_FIELDS = {
    FIRST_NAME: "firstName",
    LAST_NAME: "lastName",
    PHONE_NUMBER: "phoneNumber",
    EMAIL_ADDRESS: "emailAddress",
    PASSWORD: "password",
    PASSWORD_CONFIRMATION: "passwordConfirmation"
};

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
        console.log(e.target.id);
        console.log(e.target.value);
        // setFormValues({
        //     [INPUT_FIELDS.FIRST_NAME]: ""
        // });
        // setFormValues({
        //     ...formValues,
        //     [e.target.id]: [e.target.value]
        // })


    };



    return (
        <div className="login-page">
            <h1>CREATE AN ACCOUNT</h1>
            <p>
                Registering makes checkout fast and easy and saves your order information in your account.
            </p>
            <div className="form-wrapper">
                <form>
                    <label>
                        FIRST NAME
                        <input
                            type="text"
                            maxLength={50}
                            id={INPUT_FIELDS.FIRST_NAME}
                            autoComplete="given-name"
                            value={formValues[INPUT_FIELDS.FIRST_NAME]}
                            onChange={handleOnChange}
                        />
                    </label>


                    {/*<input type="submit" value="REGISTER" />*/}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;


/*
                        <input
                            name="email"
                            type="email"
                            id="}
                            maxLength={50}
                            autoComplete="given-name"
                            value={""}
                            onChange={handleOnChange}
                        />
 */
