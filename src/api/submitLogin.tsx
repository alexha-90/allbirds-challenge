import { INPUT_FIELDS } from "../pages/login/fields";
//====================================================================================================================//

// act as a mock for backend validation
function mockBackendValidation(inputData: any) {
    const validationRes = [];

    let regex  = /[^a-z\d]/i;
    for (const fieldName in inputData) {
        // empty input
        if (!inputData[fieldName]) {
            validationRes.push(fieldName);
        }

        switch (fieldName) {
            case INPUT_FIELDS.PHONE_NUMBER: {
                if (inputData[fieldName].length !== 14) {
                    validationRes.push(fieldName);
                }
                break;
            }
            case INPUT_FIELDS.EMAIL_ADDRESS: {
                // NOTE: copied regex pattern from web
                regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regex.test(inputData[fieldName])) {
                    validationRes.push(fieldName);
                }
                break;
            }
            case INPUT_FIELDS.PASSWORD:
            case INPUT_FIELDS.PASSWORD_CONFIRMATION: {
                if (inputData[INPUT_FIELDS.PASSWORD] !== inputData[INPUT_FIELDS.PASSWORD_CONFIRMATION]) {
                    validationRes.push(INPUT_FIELDS.PASSWORD, INPUT_FIELDS.PASSWORD_CONFIRMATION);
                }
                break;
            }
            default:
                if (regex.test(inputData[fieldName])) {
                    validationRes.push(fieldName);
                }
                break;
        }
    }
    return validationRes;

}

export async function submitLoginData(data: any) {
    const mockRes = mockBackendValidation(data);
    try {
        if (mockBackendValidation.length === 0) {
            return {
                "status": 200,
                "data": {},
                "message": ""
            };
        } else {
            return {
                "status": 400,
                "data": {},
                "message": mockRes
            };
        }
    } catch (err) {
        throw new Error(err);
    }
}
