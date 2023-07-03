const Joi = require('joi');

// Define the product validation schema
const productSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.empty': 'Name is required',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
  }),
  description: Joi.string().allow('').optional(),
});

module.exports = productSchema;
