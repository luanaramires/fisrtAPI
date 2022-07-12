import { celebrate, Joi, Segments } from 'celebrate';

export const CustomerCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({

    })
});

export const CustomerUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({

    })
});

