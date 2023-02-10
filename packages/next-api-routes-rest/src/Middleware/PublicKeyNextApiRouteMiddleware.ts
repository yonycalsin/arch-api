import debug from 'debug'
import { HttpUnauthorizedException } from '@arch-api/http-exceptions'

import type HttpNextHandler from '../Definitions/HttpNextHandler'
import type HttpRequest from '../Definitions/HttpRequest'
import type HttpResponse from '../Definitions/HttpResponse'
import type NextApiRouteMiddleware from './NextApiRouteMiddleware'

const logger = debug('arch-api:PublicKeyNextApiRouteMiddleware')

class PublicKeyNextApiRouteMiddleware implements NextApiRouteMiddleware {
  public static PUBLIC_KEY: string | null = null

  public static HEADER_NAME = 'X-Api-Public-Key'

  public static Middleware() {
    const middleware = new PublicKeyNextApiRouteMiddleware()

    return middleware.execute.bind(middleware)
  }

  public async execute(request: HttpRequest, response: HttpResponse, next: HttpNextHandler): Promise<unknown> {
    const { headers, query } = request

    const headerName = PublicKeyNextApiRouteMiddleware.HEADER_NAME

    const headerKey = headerName.toLowerCase()

    const apiPublicKey = headers[headerKey] || query[headerKey]

    logger({ headerName, headerKey, apiPublicKey })

    if (!apiPublicKey) {
      throw new HttpUnauthorizedException(`The "${headerName}" is required`)
    }

    const isApiPublicKeyValid = PublicKeyNextApiRouteMiddleware.PUBLIC_KEY === apiPublicKey

    if (!isApiPublicKeyValid) {
      throw new HttpUnauthorizedException(`The "${headerName}" is invalid`)
    }

    return next()
  }
}

export default PublicKeyNextApiRouteMiddleware
