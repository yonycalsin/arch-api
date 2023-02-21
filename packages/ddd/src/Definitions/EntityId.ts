import type ValueObject from './ValueObject'

interface EntityId<V = number | string> extends ValueObject {
  getValue(): V
  toString(): string
  empty(): V
}

export default EntityId
