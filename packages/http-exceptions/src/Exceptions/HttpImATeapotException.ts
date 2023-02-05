import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpImATeapotException extends HttpException {
  public constructor(message = HttpStatusMessages.IM_A_TEAPOT, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.IM_A_TEAPOT)

    this.name = this.constructor.name
  }
}

export default HttpImATeapotException
