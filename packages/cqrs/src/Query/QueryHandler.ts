import type Query from './Query'

abstract class QueryHandler<R, Q extends Query> {
  public abstract handle(query: Q): Promise<R>
}

export default QueryHandler
