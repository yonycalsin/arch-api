import type { Exception } from '@arch-api/exceptions'
import type HttpExceptionMapper from './HttpExceptionMapper'

class HttpExceptionMapperResolver {
  private readonly mappers: HttpExceptionMapper<never, never>[]

  public constructor(mappers: HttpExceptionMapper<never, never>[]) {
    this.mappers = mappers
  }

  public resolve(exception: Exception) {
    const mapper = this.mappers.find((mapper) => exception instanceof mapper.exception)

    if (!mapper) {
      return null
    }

    return mapper
  }
}

export default HttpExceptionMapperResolver
