import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpBadRequestException extends HttpException {
  public constructor(message = HttpStatusMessages.BAD_REQUEST, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.BAD_REQUEST)

    this.name = this.constructor.name
  }
}

export default HttpBadRequestException
