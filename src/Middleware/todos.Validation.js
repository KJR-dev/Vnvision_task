import ExpressError from "../Util/ExpressError.js";
import { todoCreateValidator,todoGetDeleteValidator,todoUpdateValidator,todoGetAllValidator } from "../Validator/todos.Validator.js";


export const todoCreateValidation = (req, res, next) => {
    const { error } = todoCreateValidator.validate(req.body);
    if (error) {
        throw new ExpressError(400, true, "Error from todo create validation", error.details[0].message);
    } else {
        next();
    }
}

export const todoGetDeleteValidation = (req, res, next) => {
    const { error } = todoGetDeleteValidator.validate(req.params);
    if (error) {
        throw new ExpressError(400, true, "Error from get and delete validation", error.details[0].message);
    } else {
        next();
    }
}

export const todoGetAllValidation = (req, res, next) => {
    const { error } = todoGetAllValidator.validate(req.query);
    if (error) {
        throw new ExpressError(400, true, "Error from get and delete validation", error.details[0].message);
    } else {
        next();
    }
}

export const todoUpdateValidation = (req, res, next) => {

    const paramsValidation = todoGetDeleteValidator.validate(req.params);

    const bodyValidation = todoUpdateValidator.validate(req.body);

    const errorMessages = [];

    if (paramsValidation.error) {
        errorMessages.push(`Params: ${paramsValidation.error.details.map(detail => detail.message).join(', ')}`);
    }

    if (bodyValidation.error) {
        errorMessages.push(`Body: ${bodyValidation.error.details.map(detail => detail.message).join(', ')}`);
    }

    if (errorMessages.length > 0) {
        throw new ExpressError(400, true, "Error from todo update validation", errorMessages.join(' and '));
    }

    next();
};
