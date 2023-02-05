import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpPreconditionFailedException extends HttpException {
  public constructor(message = HttpStatusMessages.PRECONDITION_FAILED, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.PRECONDITION_FAILED)

    this.name = this.constructor.name
  }
}

export default HttpPreconditionFailedException
