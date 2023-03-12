export type SqlCriteriaParameter = string | number | Date | boolean;

/**
 * This interface implements the most basic method to convert a sql-criteria into a sql condition
 */
export interface SqlCriteriaComponent {
  parameters: SqlCriteriaParameter[];

  toSql(): string;
}
