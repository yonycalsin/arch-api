import { HttpStatuses } from '@arch-api/http-status'
import type HttpResponse from '../Definitions/HttpResponse'
import type NextApiRouteResponder from './NextApiRouteResponder'

class NotFoundNextApiRouteResponder implements NextApiRouteResponder<never> {
  public answer(response: HttpResponse): HttpResponse {
    return response.status(HttpStatuses.NOT_FOUND).end()
  }
}

export default NotFoundNextApiRouteResponder
