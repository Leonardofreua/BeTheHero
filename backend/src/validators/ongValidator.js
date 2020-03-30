const { celebrate, Segments, Joi } = require('celebrate');

 function ongValidate() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(13),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    })
  });
}

module.exports = ongValidate();