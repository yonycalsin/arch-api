type ExceptionData = Record<string, any>

interface ExceptionOptions {
  cause?: unknown
  data?: ExceptionData
}

class Exception extends Error {
  public readonly data?: ExceptionData

  public constructor(message?: string, options?: ExceptionOptions) {
    super(message, {
      cause: options?.cause,
    })

    this.name = this.constructor.name

    this.data = options?.data
  }
}

export type { ExceptionOptions }

export default Exception
