import Exception, { ExceptionOptions } from './Exception'

class PreconditionFailedException extends Exception {
  public constructor(message?: string, options?: ExceptionOptions) {
    super(message, options)

    this.name = this.constructor.name
  }
}

export default PreconditionFailedException
