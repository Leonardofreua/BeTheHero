const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  deleteValidate: function() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      })
    });
  },

  queryParamsValidate: function() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      })
    });
  }
}