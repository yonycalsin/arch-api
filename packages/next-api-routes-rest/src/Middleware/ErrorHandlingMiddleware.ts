import { Exception } from '@arch-api/exceptions'
import { HttpException, HttpInternalServerErrorException } from '@arch-api/http-exceptions'
import type { HttpExceptionMapperResolver } from '@arch-api/http-exceptions-mappers'
import { getHttpStatusMessage, HttpStatuses } from '@arch-api/http-status'
import type HttpNextHandler from '../Definitions/HttpNextHandler'
import type HttpRequest from '../Definitions/HttpRequest'
import type HttpResponse from '../Definitions/HttpResponse'

class ErrorHandlingMiddleware {
  private readonly httpExceptionMapperResolver: HttpExceptionMapperResolver

  public constructor(httpExceptionMapperResolver: HttpExceptionMapperResolver) {
    this.httpExceptionMapperResolver = httpExceptionMapperResolver
  }

  public async execute(error: Error, request: HttpRequest, response: HttpResponse, next: HttpNextHandler) {
    if (!(error instanceof Error)) {
      return next()
    }

    console.time('[ErrorHandlingMiddleware]')

    console.timeLog('[ErrorHandlingMiddleware][error]', error)

    if (error instanceof HttpException) {
      return this.httpExceptionToResponse(response, error)
    }

    if (error instanceof Exception) {
      let httpExceptionMapper = this.httpExceptionMapperResolver.resolve(error)

      if (httpExceptionMapper) {
        /**
         * @todo handle the exceptions types correctly
         * @author yonycalsin
         */
        const httpException = httpExceptionMapper.toHttpException(error)

        return this.httpExceptionToResponse(response, httpException)
      }
    }

    const httpException = new HttpInternalServerErrorException(
      getHttpStatusMessage(HttpStatuses.INTERNAL_SERVER_ERROR),
      { cause: error },
    )

    return this.httpExceptionToResponse(response, httpException)
  }

  private httpExceptionToResponse(response: HttpResponse, httpException: HttpException) {
    const responseData = {
      error: {
        message: httpException.message,
        ...httpException?.data,
      },
      data: null,
    }

    console.timeLog('[ErrorHandlingMiddleware][response]', responseData)

    console.timeEnd()

    return response.status(httpException.httpStatus!).json(responseData)
  }
}

export default ErrorHandlingMiddleware
