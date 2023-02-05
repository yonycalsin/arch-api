import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpNotFoundException extends HttpException {
  public constructor(message = HttpStatusMessages.NOT_FOUND, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.NOT_FOUND)

    this.name = this.constructor.name
  }
}

export default HttpNotFoundException
