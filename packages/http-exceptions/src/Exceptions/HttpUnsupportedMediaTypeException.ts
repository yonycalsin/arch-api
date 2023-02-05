import { HttpStatuses, HttpStatusMessages } from '@arch-api/http-status'
import HttpException, { HttpExceptionOptions } from './HttpException'

class HttpUnsupportedMediaTypeException extends HttpException {
  public constructor(message: string = HttpStatusMessages.UNSUPPORTED_MEDIA_TYPE, options?: HttpExceptionOptions) {
    super(message, options, HttpStatuses.UNSUPPORTED_MEDIA_TYPE)

    this.name = this.constructor.name
  }
}

export default HttpUnsupportedMediaTypeException
