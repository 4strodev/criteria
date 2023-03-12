import { SqlCriteriaComponent } from "../sql-criteria-component.interface";

export const AND_UNION: SqlCriteriaComponent = {
  parameters: [],
  toSql(): string {
    return "AND";
  },
};

export const OR_UNION: SqlCriteriaComponent = {
  parameters: [],
  toSql(): string {
    return "OR";
  },
};
