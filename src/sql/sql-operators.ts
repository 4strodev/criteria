import {
  SqlCriteriaComponent,
  SqlCriteriaParameter,
} from "../sql-criteria-component.interface";
import { surroundNames } from "./utils/sql-criteria-utils";

export function equalTo(
  column: string,
  parameter: SqlCriteriaParameter
): SqlCriteriaComponent {
  return {
    parameters: [parameter],

    toSql(): string {
      return `(${surroundNames(column)} = ?)`;
    },
  };
}

export function greaterThan(
  column: string,
  parameter: SqlCriteriaParameter
): SqlCriteriaComponent {
  return {
    parameters: [parameter],

    toSql(): string {
      return `(${surroundNames(column)} > ?)`;
    },
  };
}

export function lowerThan(
  column: string,
  parameter: SqlCriteriaParameter
): SqlCriteriaComponent {
  return {
    parameters: [parameter],

    toSql(): string {
      return `(${surroundNames(column)} < ?)`;
    },
  };
}

export function equalGreaterThan(
  column: string,
  parameter: SqlCriteriaParameter
): SqlCriteriaComponent {
  return {
    parameters: [parameter],

    toSql(): string {
      return `(${surroundNames(column)} >= ?)`;
    },
  };
}

export function equalLowerThan(
  column: string,
  parameter: SqlCriteriaParameter
): SqlCriteriaComponent {
  return {
    parameters: [parameter],

    toSql(): string {
      return `(${surroundNames(column)} <= ?)`;
    },
  };
}

export function notEqualThan(
  column: string,
  parameter: SqlCriteriaParameter
): SqlCriteriaComponent {
  return {
    parameters: [parameter],

    toSql(): string {
      return `(${surroundNames(column)} != ?)`;
    },
  };
}
