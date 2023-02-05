import type { Exception } from '@arch-api/exceptions'
import type { HttpStatuses } from '@arch-api/http-status'

interface HttpExceptionMapperResponse {
  code: string
  message: string
  status: HttpStatuses
}

interface HttpExceptionMapper {
  toResponse(exception: Exception): HttpExceptionMapperResponse
}

export type { HttpExceptionMapperResponse }

export default HttpExceptionMapper
