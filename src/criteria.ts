import {SqlCriteriaParameter, SqlCriteriaComponent} from "./sql-criteria-component.interface";
import {AND_UNION, OR_UNION} from "./sql/sql-unions";

export class Criteria<T> {

  parameters: SqlCriteriaParameter[] = [];

  components: SqlCriteriaComponent[] = [];
  match: (item: T) => boolean

  constructor(match: (item: T) => boolean, ...criteriaComponents: SqlCriteriaComponent[]) {
    this.match = match;
    criteriaComponents.forEach(
      (criteriaComponent) =>
        this.parameters = [
          ...this.parameters,
          ...criteriaComponent.parameters,
        ]
    );
    this.components = criteriaComponents;
  }

  and(criteria: Criteria<T>): Criteria<T> {
    if (!this.components.length) {
      return new Criteria((item: T) => this.match(item) && criteria.match(item), ...criteria.components);
    }

    return new Criteria((item: T) => this.match(item) && criteria.match(item), ...this.components, AND_UNION, ...criteria.components);
  }

  or(criteria: Criteria<T>): Criteria<T> {
    if (!this.components.length) {
      return new Criteria((item: T) => this.match(item) || criteria.match(item), ...criteria.components);
    }

    return new Criteria((item: T) => this.match(item) || criteria.match(item), ...this.components, OR_UNION, ...criteria.components);
  }

  toSql(): string {
    const sqlCommands: string[] = [];

    this.components.forEach((component) => sqlCommands.push(component.toSql()));

    return `${sqlCommands.join(" ")}`;
  }

  filter(items: T[]): T[] {
    return items.filter(this.match);
  }
}
