import Exception, { ExceptionOptions } from './Exception'

class NotAcceptableException extends Exception {
  public constructor(message?: string, options?: ExceptionOptions) {
    super(message, options)

    this.name = this.constructor.name
  }
}

export default NotAcceptableException
