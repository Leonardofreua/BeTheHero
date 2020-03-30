const { celebrate, Segments, Joi } = require('celebrate');

 function profileValidate() {
  return celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown()
  });
}

module.exports = profileValidate();