import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpServiceUnavailableException extends HttpException {
  public constructor(message: string = HttpStatusMessages.SERVICE_UNAVAILABLE, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.SERVICE_UNAVAILABLE)

    this.name = this.constructor.name
  }
}

export default HttpServiceUnavailableException
