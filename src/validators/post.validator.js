import Joi from "joi";

const postValidationSchema = Joi.object({
  body: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  title: Joi.string().required(),
});

const postUpdateValidationSchema = Joi.object({
  body: Joi.string(),
  description: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  title: Joi.string(),
});

export const ValidatePostData = async (data) => {
  let { error, value } = postValidationSchema.validate(data);
  return {
    err: error,
    value,
  };
};

export const ValidatePostUpdateData = async (data) => {
  let { error, value } = postUpdateValidationSchema.validate(data);
  return {
    err: error,
    value,
  };
};
