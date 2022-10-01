import Joi from "joi";

export const todoFormValidation = Joi.object({
    todoName: Joi.string().min(3).max(15).required().messages({
        'string.empty': 'Sorry this form cannot empty !',
        'string.min': 'Sorry minimum 3 symbols !',
        'string.max': 'Sorry, maximum 15 symbols !'
    })
})