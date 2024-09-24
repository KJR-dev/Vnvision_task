import Joi from "joi"

export const todoCreateValidator = Joi.object({
    todo: Joi.object({
        todoName: Joi.string().required(),
        status: Joi.string().valid('completed', 'pending').required()
    }).required()
})

export const todoGetDeleteValidator = Joi.object({
    todosId: Joi.number().integer().required()
});

export const todoGetAllValidator = Joi.object({
    status: Joi.string().valid('completed', 'pending')
});

export const todoUpdateValidator = Joi.object({
    todo: Joi.object({
        status: Joi.string().valid('completed', 'pending').required()
    }).required()
})