import {SqlCriteriaComponent} from "../sql-criteria-component.interface";

export function limit(nRegisters: number, offset?: number): SqlCriteriaComponent {
  const parameters = [nRegisters];
  let sql = 'LIMIT ?';

  if (offset !== undefined) {
    sql += ' OFFSET ?';
    parameters.push(offset);
  }

  return {
    parameters: parameters,
    toSql(): string {
      return sql;
    },
  };
}

export function orderBy(
  column: string,
  direction: "ASC" | "DESC" = "ASC"
): SqlCriteriaComponent {
  return {
    parameters: [],
    toSql(): string {
      return `ORDER BY ${column} ${direction}`;
    },
  };
}
