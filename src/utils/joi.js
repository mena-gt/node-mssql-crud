const Joi = require ('joi');

const { BadRequest } = require ('./error.js');


const options = {
    abortEarly: false
};

const joiValidateAsync = (schema, inputDada) => {
    return joiValidate (options, schema, inputDada);
}

const toError = (errors) => {
    const description = {
        message: 'The form has errors!',
        errors: []
    };
    errors.details.forEach ((field) => {
        description.errors.push ({
            attribute: field.context.label,
            message: field.message,
        })
    });
    return description;
};

const joiValidate = (options, schema, inputData) => {
    return new Promise ((resolve, reject) => {
        schema.validateAsync (inputData, options)
            .then ((value) => resolve (value))
            .catch ((error) => reject (toError (error)));
    });
};

/*class JoiError extends BadRequest {
    // error status 400 bad request
    constructor (error) {
        this.description = 'There was a problem creating your resource.'
        this.details = [];
        error.details.forEach ((field) => {
            this.details.push ({
                attribute: field.context.label,
                message: field.message
            })
        });
        super (this.description, this.details);
    }
}*/

module.exports = {
    joiValidateAsync
}