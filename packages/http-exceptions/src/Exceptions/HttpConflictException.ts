import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpConflictException extends HttpException {
  public constructor(message = HttpStatusMessages.CONFLICT, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.CONFLICT)

    this.name = this.constructor.name
  }
}

export default HttpConflictException
