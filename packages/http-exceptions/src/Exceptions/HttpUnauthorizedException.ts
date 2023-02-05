import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpUnauthorizedException extends HttpException {
  public constructor(message: string = HttpStatusMessages.UNAUTHORIZED, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.UNAUTHORIZED)

    this.name = this.constructor.name
  }
}

export default HttpUnauthorizedException
