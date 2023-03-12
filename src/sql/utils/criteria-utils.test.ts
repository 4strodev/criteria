import { describe, expect, test } from "@jest/globals";
import { surroundNames } from "./sql-criteria-utils";

describe("test sql-criteria operators", () => {
  test("test surround names", () => {
    const mockData: { input: string; result: string }[] = [
      {
        input: "municipalities.id",
        result: "`municipalities`.`id`",
      },
      {
        input: "id",
        result: "`id`",
      },
    ];

    for (const inputSet of mockData) {
      const result = surroundNames(inputSet.input);
      expect(result).toEqual(inputSet.result);
    }
  });
});
