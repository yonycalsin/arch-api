interface ExceptionOptions {
  cause?: unknown
  code?: string
}

abstract class Exception extends Error {
  public readonly code?: string

  public constructor(message?: string, options?: ExceptionOptions) {
    super(message, {
      cause: options?.cause,
    })

    this.name = this.constructor.name

    this.code = options?.code
  }
}

export type { ExceptionOptions }

export default Exception
