import { HttpStatuses } from '@arch-api/http-status'
import nextConnect from 'next-connect'
import type HttpRequest from '../Definitions/HttpRequest'
import type HttpResponse from '../Definitions/HttpResponse'

const NextApiRouteConnect: typeof nextConnect<HttpRequest, HttpResponse> = (...args) => {
  return (
    nextConnect(...args)
      /**
       * @todo resolve the options method per endpoint
       * @author yonycalsin
       */
      .options((req, res) => {
        return res.status(HttpStatuses.OK).end()
      })
  )
}

export default NextApiRouteConnect
