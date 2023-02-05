import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpBadGatewayException extends HttpException {
  public constructor(message = HttpStatusMessages.BAD_GATEWAY, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.BAD_GATEWAY)

    this.name = this.constructor.name
  }
}

export default HttpBadGatewayException
