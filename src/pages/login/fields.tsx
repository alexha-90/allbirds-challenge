interface loginInputField {
  label: string,
    name: string,
    autoComplete?: string,
    placeholder?: string,
    maxLength?: number,
    type?: string
    required: boolean,
}

// interface inputFields {
//   [INPUT_FIELDS.FIRST_NAME] : string,
//   [INPUT_FIELDS.LAST_NAME] : string,
//   [INPUT_FIELDS.PHONE_NUMBER] : string,
//   [INPUT_FIELDS.EMAIL_ADDRESS] : string,
//   [INPUT_FIELDS.PASSWORD] : string,
//   [INPUT_FIELDS.PASSWORD] : string,
// }

export const INPUT_FIELDS = {
    FIRST_NAME: "firstName",
    LAST_NAME: "lastName",
    PHONE_NUMBER: "phoneNumber",
    EMAIL_ADDRESS: "emailAddress",
    PASSWORD: "password",
    PASSWORD_CONFIRMATION: "passwordConfirmation"
};

export const loginInputFields: Array<loginInputField> = [
    {
        label: "FIRST NAME",
        name: INPUT_FIELDS.FIRST_NAME,
        autoComplete: "given-name",
        required: true
    },
    {
        label: "LAST NAME",
        name: INPUT_FIELDS.LAST_NAME,
        autoComplete: "family-name",
        required: true
    },
    {
        label: "PHONE NUMBER",
        maxLength: 14,
        name: INPUT_FIELDS.PHONE_NUMBER,
        autoComplete: "tel",
        placeholder: "(xxx) xxx-xxxx",
        required: false
    },
    {
        label: "EMAIL",
        name: INPUT_FIELDS.EMAIL_ADDRESS,
        autoComplete: "email",
        required: true
    },
    {
        type: "password",
        label: "PASSWORD",
        name: INPUT_FIELDS.PASSWORD,
        required: true
    },
    {
        type: "password",
        label: "CONFIRM PASSWORD",
        name: INPUT_FIELDS.PASSWORD_CONFIRMATION,
        required: true
    }
];
