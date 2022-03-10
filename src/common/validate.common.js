const Joi = require('joi');

const validateParam = (schema, name) => {
    return (req, res, next) => {
        console.log(schema, name);
    }
}

const validateBody = (schema, req) => {
    const validatorResult = schema.validate(req.body);
    return validatorResult;
}

const schemas = {
    idSchema: Joi.object().keys({
        param: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required
    }),
    authCandidateSignUpSchema: Joi.object().keys({
        fullname: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    }),
    authCandidateSignInSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    })
}

module.exports = {
    validateParam,
    validateBody,
    schemas
}