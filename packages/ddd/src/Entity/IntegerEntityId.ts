import type EntityId from '../Definitions/EntityId'

class IntegerEntityId implements EntityId<number> {
  private readonly id: number

  protected constructor(value: number) {
    this.id = value
  }

  public static create(value: number) {
    return new IntegerEntityId(value)
  }

  public equals(anIntegerEntityId: IntegerEntityId): boolean {
    if (!(anIntegerEntityId instanceof IntegerEntityId)) {
      return false
    }

    return this.id === anIntegerEntityId.getValue()
  }

  public getValue(): number {
    return this.id
  }

  public toString(): string {
    return `${this.id}`
  }

  public static empty(): IntegerEntityId {
    return new IntegerEntityId(Number.MIN_SAFE_INTEGER)
  }
}

export default IntegerEntityId
