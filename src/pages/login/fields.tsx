interface loginInputField {
  label: string,
    name: string,
    autoComplete?: string,
    maxLength?: number,
    type?: string
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
    },
    {
        label: "LAST NAME",
        name: INPUT_FIELDS.LAST_NAME,
        autoComplete: "family-name",
    },
    {
        label: "PHONE NUMBER",
        maxLength: 16,
        name: INPUT_FIELDS.PHONE_NUMBER,
        autoComplete: "tel",
    },
    {
        label: "EMAIL",
        name: INPUT_FIELDS.EMAIL_ADDRESS,
        autoComplete: "email",
    },
    {
        type: "password",
        label: "PASSWORD",
        name: INPUT_FIELDS.PASSWORD,
    },
    {
        type: "password",
        label: "CONFIRM PASSWORD",
        name: INPUT_FIELDS.PASSWORD_CONFIRMATION,
    }
];
