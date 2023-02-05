import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpNotImplementedException extends HttpException {
  public constructor(message: string = HttpStatusMessages.NOT_IMPLEMENTED, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.NOT_IMPLEMENTED)

    this.name = this.constructor.name
  }
}

export default HttpNotImplementedException
