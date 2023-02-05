import type ValidatorPayload from './ValidatorPayload'

interface Validator<T> {
  validate(payload: ValidatorPayload<T>): T
}

export default Validator
