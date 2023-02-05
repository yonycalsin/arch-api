import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpMethodNotAllowedException extends HttpException {
  public constructor(message = HttpStatusMessages.METHOD_NOT_ALLOWED, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.METHOD_NOT_ALLOWED)

    this.name = this.constructor.name
  }
}

export default HttpMethodNotAllowedException
