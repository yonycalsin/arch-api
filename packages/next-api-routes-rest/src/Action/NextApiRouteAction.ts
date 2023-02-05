import type { Action } from '@arch-api/rest'
import type HttpRequest from '../Definitions/HttpRequest'
import type HttpResponse from '../Definitions/HttpResponse'

interface NextApiRouteAction extends Action<HttpRequest, HttpResponse> {}

export default NextApiRouteAction
