import validate from "validate.js"

const rules = {
    email: {
        presence: {
            allowEmpty: false,
            message: "^An email is required"
        },
        email: {
            allowEmpty: false,
            message: "^Please enter a valid email address"
        }
    },
    password: {
        presence: {
            allowEmpty: false,
            message: "^A password is required"
        },
        length: {
            minimum: 6,
            message: "^Password must be at least 5 characters"
        }
    }
}
export const validator = (fieldName, value) => {
    const formValues = {}
    const formFields = {}
    formValues[fieldName] = value
    formFields[fieldName] = rules[fieldName]
    const result = validate(formValues, formFields)
    if (result) {
        return result[fieldName][0]
    }
    return null
}