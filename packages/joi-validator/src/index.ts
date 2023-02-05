import Joi from 'joi'
import type { Validator, ValidatorPayload } from '@arch-api/validator'
import { HttpBadRequestException } from '@arch-api/http-exceptions'

class JoiValidator<T> implements Validator<T> {
  protected schema: Joi.AnySchema

  protected constructor(schema: Joi.AnySchema) {
    this.schema = schema.options({
      stripUnknown: true,
      abortEarly: false,
      errors: {
        wrap: {
          label: false,
        },
      },
    })
  }

  public validate(payload: ValidatorPayload<T>): T {
    const result = this.schema.validate(payload)

    if (Joi.isError(result.error)) {
      const firstError = result.error.details[0]

      const validationErrorMessage = firstError.message

      throw new HttpBadRequestException(validationErrorMessage, {
        data: {
          code: 'JV:001',
        },
      })
    }

    return result.value as T
  }
}

export default JoiValidator
