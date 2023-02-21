import type EntityId from '../Definitions/EntityId'

class UUIDv4EntityId implements EntityId<string> {
  private readonly id: string

  protected constructor(value: string) {
    this.id = value
  }

  public static create(value: string) {
    return new UUIDv4EntityId(value)
  }

  public equals(aUUIDv4EntityId: UUIDv4EntityId): boolean {
    if (!(aUUIDv4EntityId instanceof UUIDv4EntityId)) {
      return false
    }

    return this.id === aUUIDv4EntityId.getValue()
  }

  public getValue(): string {
    return this.id
  }

  public toString(): string {
    return `${this.id}`
  }

  public static empty(): UUIDv4EntityId {
    return new UUIDv4EntityId('empty-uuid-v4-id')
  }
}

export default UUIDv4EntityId
