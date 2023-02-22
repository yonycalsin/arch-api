import type { Exception } from '@arch-api/exceptions'
import type { HttpException } from '@arch-api/http-exceptions'

type ExceptionClass = typeof Exception

abstract class HttpExceptionMapper<E extends ExceptionClass | Exception, H extends HttpException> {
  public readonly exception: E extends ExceptionClass ? E : never

  public constructor(exception: E extends ExceptionClass ? E : never) {
    this.exception = exception
  }

  public abstract toHttpException(exception: E extends Exception ? E : never): H
}

export default HttpExceptionMapper
