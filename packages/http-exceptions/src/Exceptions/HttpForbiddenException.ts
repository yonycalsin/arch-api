import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpForbiddenException extends HttpException {
  public constructor(message: string = HttpStatusMessages.FORBIDDEN, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.FORBIDDEN)

    this.name = this.constructor.name
  }
}

export default HttpForbiddenException
