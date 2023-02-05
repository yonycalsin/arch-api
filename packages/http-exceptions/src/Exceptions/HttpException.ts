import type { HttpStatuses } from '@arch-api/http-status'

type HttpExceptionData = Record<string, any>

interface HttpExceptionOptions {
  cause?: unknown
  data?: HttpExceptionData
}

class HttpException extends Error {
  public readonly data?: HttpExceptionData

  public readonly httpStatus?: HttpStatuses

  public constructor(message?: string, options?: HttpExceptionOptions, httpStatus?: HttpStatuses) {
    super(message, {
      cause: options?.cause,
    })

    this.name = this.constructor.name

    this.data = options?.data

    this.httpStatus = httpStatus
  }
}

export type { HttpExceptionOptions }

export default HttpException
