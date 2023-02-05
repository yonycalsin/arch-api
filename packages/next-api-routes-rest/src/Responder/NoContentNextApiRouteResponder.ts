import { HttpStatuses } from '@arch-api/http-status'

import type HttpResponse from '../Definitions/HttpResponse'
import type NextApiRouteResponder from './NextApiRouteResponder'

class NoContentNextApiRouteResponder implements NextApiRouteResponder<never> {
  public answer(response: HttpResponse): HttpResponse {
    return response.status(HttpStatuses.NO_CONTENT).end()
  }
}

export default NoContentNextApiRouteResponder
