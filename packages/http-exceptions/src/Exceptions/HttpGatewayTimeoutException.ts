import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpGatewayTimeoutException extends HttpException {
  public constructor(message = HttpStatusMessages.GATEWAY_TIMEOUT, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.GATEWAY_TIMEOUT)

    this.name = this.constructor.name
  }
}

export default HttpGatewayTimeoutException
