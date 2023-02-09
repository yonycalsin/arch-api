import type { Middleware } from '@arch-api/rest'
import type HttpNextHandler from '../Definitions/HttpNextHandler'
import type HttpRequest from '../Definitions/HttpRequest'
import type HttpResponse from '../Definitions/HttpResponse'

interface NextApiRouteMiddleware extends Middleware<HttpRequest, HttpResponse, HttpNextHandler> {}

export default NextApiRouteMiddleware
