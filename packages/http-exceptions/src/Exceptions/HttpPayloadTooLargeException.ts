import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpPayloadTooLargeException extends HttpException {
  public constructor(message = HttpStatusMessages.REQUEST_TOO_LONG, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.REQUEST_TOO_LONG)

    this.name = this.constructor.name
  }
}

export default HttpPayloadTooLargeException
