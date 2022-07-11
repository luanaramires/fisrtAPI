import { celebrate, Joi, Segments } from 'celebrate';

export const ModelCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({

    })
});

export const ModelUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({

    })
});

