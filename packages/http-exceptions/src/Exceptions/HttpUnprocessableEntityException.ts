import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpUnprocessableEntityException extends HttpException {
  public constructor(message = HttpStatusMessages.UNPROCESSABLE_ENTITY, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.UNPROCESSABLE_ENTITY)

    this.name = this.constructor.name
  }
}

export default HttpUnprocessableEntityException
