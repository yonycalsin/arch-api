import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpVersionNotSupportedException extends HttpException {
  public constructor(message: string = HttpStatusMessages.HTTP_VERSION_NOT_SUPPORTED, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.HTTP_VERSION_NOT_SUPPORTED)

    this.name = this.constructor.name
  }
}

export default HttpVersionNotSupportedException
