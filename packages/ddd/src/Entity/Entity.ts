import type ComparableObject from '../Definitions/ComparableObject'
import type EntityId from '../Definitions/EntityId'

abstract class Entity<IdType extends EntityId> implements ComparableObject {
  private readonly id: IdType

  protected constructor(id: IdType) {
    this.id = id
  }

  public getId(): IdType {
    return this.id
  }

  public equals(aEntity: Entity<IdType>): boolean {
    if (!(aEntity instanceof Entity)) {
      return false
    }

    return this.id.equals(aEntity.getId())
  }
}

export default Entity
