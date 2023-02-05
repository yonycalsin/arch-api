import type { Responder } from '@arch-api/rest'
import type HttpResponse from '../Definitions/HttpResponse'

interface NextApiRouteResponder<P> extends Responder<P, HttpResponse> {}

export default NextApiRouteResponder
