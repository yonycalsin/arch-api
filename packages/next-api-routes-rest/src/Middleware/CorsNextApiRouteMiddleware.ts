import NextCors from 'nextjs-cors'

import type { NextHandler } from 'next-connect'
import type HttpRequest from '../Definitions/HttpRequest'
import type HttpResponse from '../Definitions/HttpResponse'
import type NextApiRouteMiddleware from './NextApiRouteMiddleware'

type CorsNextApiRouteMiddlewareOptions = NonNullable<Parameters<typeof NextCors>[2]>

class CorsNextApiRouteMiddleware implements NextApiRouteMiddleware {
  public static readonly DEFAULT_CORS_OPTIONS: CorsNextApiRouteMiddlewareOptions = {
    origin: '*',
  }

  public static CORS_OPTIONS: CorsNextApiRouteMiddlewareOptions = {}

  public static create() {
    return new CorsNextApiRouteMiddleware()
  }

  public async execute(request: HttpRequest, response: HttpResponse, next: NextHandler): Promise<any> {
    await NextCors(request, response, {
      ...CorsNextApiRouteMiddleware.DEFAULT_CORS_OPTIONS,
      ...CorsNextApiRouteMiddleware.CORS_OPTIONS,
    })

    return next()
  }
}

export default CorsNextApiRouteMiddleware
