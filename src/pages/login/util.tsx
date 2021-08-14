export function phoneNumberFormatter(currPhoneValue: string, nextPhoneNumberValue: string) {
    let validatedNextInput = nextPhoneNumberValue.replace(/[^\d]/g, '');

    if (!currPhoneValue || nextPhoneNumberValue.length > currPhoneValue.length) {
        // before parentheses ()
        if (validatedNextInput.length < 4) {
            return validatedNextInput;
        }

        // after parentheses but incomplete (xxx)
        if (validatedNextInput.length < 7) {
            return `(${validatedNextInput.slice(0, 3)}) ${validatedNextInput.slice(3)}`;
        }

        // after parentheses and incomplete dash
        return `(${validatedNextInput.slice(0, 3)}) ${validatedNextInput.slice(3, 6)}-${validatedNextInput.slice(6, 10)}`;
    }

}
