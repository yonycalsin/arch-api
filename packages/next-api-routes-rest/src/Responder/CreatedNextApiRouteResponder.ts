import { HttpStatuses } from '@arch-api/http-status'
import type HttpResponse from '../Definitions/HttpResponse'
import type NextApiRouteResponder from './NextApiRouteResponder'

type CreatedNextApiRouteResponderPayload = string | number

class CreatedNextApiRouteResponder implements NextApiRouteResponder<CreatedNextApiRouteResponderPayload> {
  public answer(response: HttpResponse, payload: CreatedNextApiRouteResponderPayload): HttpResponse {
    return response.setHeader('Location', payload).status(HttpStatuses.CREATED).end()
  }
}

export default CreatedNextApiRouteResponder
