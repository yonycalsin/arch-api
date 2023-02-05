interface Middleware<T, R, H> {
  execute(request: T, response: R, next: H): Promise<unknown>
}

export default Middleware
