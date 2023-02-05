import type { z } from 'zod'
import { fromZodError } from 'zod-validation-error'
import { HttpBadRequestException } from '@arch-api/http-exceptions'
import type { Validator, ValidatorPayload } from '@arch-api/validator'

class ZodValidator<T> implements Validator<T> {
  protected schema: z.ZodTypeAny

  protected constructor(schema: z.SomeZodObject) {
    this.schema = schema
  }

  public validate(payload: ValidatorPayload<T>): T {
    const result = this.schema.safeParse(payload)

    if (result.success) {
      return result.data as T
    }

    const errorMessage = fromZodError(result.error)

    throw new HttpBadRequestException(errorMessage.message, {
      data: {
        code: 'ZV:001',
      },
    })
  }
}

export default ZodValidator
