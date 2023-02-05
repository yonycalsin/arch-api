interface Responder<T, R> {
  answer(response: R, payload: T): R
}

export default Responder
