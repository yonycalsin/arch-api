import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpGoneException extends HttpException {
  public constructor(message: string = HttpStatusMessages.GONE, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.GONE)

    this.name = this.constructor.name
  }
}

export default HttpGoneException
