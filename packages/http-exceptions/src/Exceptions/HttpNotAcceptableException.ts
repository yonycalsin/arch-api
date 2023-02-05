import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpNotAcceptableException extends HttpException {
  public constructor(message: string = HttpStatusMessages.NOT_ACCEPTABLE, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.NOT_ACCEPTABLE)

    this.name = this.constructor.name
  }
}

export default HttpNotAcceptableException
