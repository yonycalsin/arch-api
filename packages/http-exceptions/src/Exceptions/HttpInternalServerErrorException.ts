import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpInternalServerErrorException extends HttpException {
  public constructor(message: string = HttpStatusMessages.INTERNAL_SERVER_ERROR, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.INTERNAL_SERVER_ERROR)

    this.name = this.constructor.name
  }
}

export default HttpInternalServerErrorException
