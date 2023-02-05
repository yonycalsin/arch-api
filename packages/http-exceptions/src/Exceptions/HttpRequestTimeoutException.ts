import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpRequestTimeoutException extends HttpException {
  public constructor(message: string = HttpStatusMessages.REQUEST_TIMEOUT, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.REQUEST_TIMEOUT)

    this.name = this.constructor.name
  }
}

export default HttpRequestTimeoutException
