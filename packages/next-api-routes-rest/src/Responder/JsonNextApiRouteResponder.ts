import type HttpResponse from '../Definitions/HttpResponse'
import type NextApiRouteResponder from './NextApiRouteResponder'

type JsonNextApiRouteResponderPayload = Record<string, any>

class JsonNextApiRouteResponder implements NextApiRouteResponder<JsonNextApiRouteResponderPayload> {
  public answer(response: HttpResponse, payload: JsonNextApiRouteResponderPayload): HttpResponse {
    return response.json({
      data: payload,
      error: null,
    }) as any
  }
}

export default JsonNextApiRouteResponder
