interface Action<T, R> {
  execute(request: T, response: R): Promise<R>
}

export default Action
