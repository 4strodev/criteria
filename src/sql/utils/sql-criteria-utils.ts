/**
 * Surround column names with '`'
 * @param column
 */
export function surroundNames(column: string) {
  return column
    .split(".")
    .map((col) => "`" + col + "`")
    .join(".");
}

